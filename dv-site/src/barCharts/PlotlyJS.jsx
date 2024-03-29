import React, { useEffect, useRef } from "react";
import Plotly from "plotly.js-dist-min";

import "./PlotlyJS.css";

const PlotlyBarChart = ({ numTerms, chart }) => {
  // const graphsMap = {
  //   DHS_DOHHvsTar4_EC: DHS_DOHHvsTar4_EC_WikiPathways,
  // };
  console.log(chart);
  const plotContainerRef = useRef(null);

  useEffect(() => {
    const createBarChart = (data) => {
      data.sort(
        (a, b) =>
          parseFloat(b["enrichment score"]) - parseFloat(a["enrichment score"])
      );
      const topTerms = data.slice(0, numTerms);

      const uniqueDescriptions = topTerms.map((item, index) => {
        const baseDescription = shortenDescription(item["term description"]);
        const uniqueDescriptor = `${baseDescription} (${item[
          "enrichment score"
        ].toFixed(2)})`;
        return uniqueDescriptor;
      });

      const enrichmentScores = topTerms.map((item) =>
        parseFloat(item["enrichment score"])
      );

      const trace = {
        y: uniqueDescriptions,
        x: enrichmentScores,
        hovertemplate: topTerms.map(
          (item) =>
            `${item["term description"]}<br>Enrichment Score: %{x}<extra></extra>`
        ),
        type: "bar",
        orientation: "h",
        marker: {
          color: "skyblue",
          opacity: 0.75,
        },
      };

      const layout = {
        title: `Top ${numTerms} Regulations`,
        autosize: true,
        margin: {
          t: 25, // Top margin
          l: 300, // Adjust for term descriptions
          b: 300, // Bottom margin
          r: 125, // Right margin
        },
        plot_bgcolor: "white",
        xaxis: {
          //   title: "Enrichment Score",
          showgrid: true,
          gridwidth: 1,
          gridcolor: "lightgrey",
          griddash: "dot",
          ticks: "outside",
          tickwidth: 2,
          tickcolor: "black",
        },
        yaxis: {
          //   title: "Term Description",
          autorange: "reversed",
          showgrid: true,
          gridwidth: 1,
          gridcolor: "lightgrey",
          griddash: "dot",
          ticks: "outside",
          tickwidth: 2,
          tickcolor: "black",
        },
      };

      const config = {
        displayModeBar: false, // This disables the modebar
      };

      Plotly.newPlot(plotContainerRef.current, [trace], layout, config, {
        responsive: true,
      });
    };

    // createBarChart(DHS_DOHHvsTar4_EC_KEGG);
    createBarChart(chart);

    // Setup ResizeObserver to ensure the plot is responsive
    const resizeObserver = new ResizeObserver(() => {
      Plotly.relayout(plotContainerRef.current, {
        autosize: true,
      });
    });

    if (plotContainerRef.current) {
      resizeObserver.observe(plotContainerRef.current);
    }

    // Cleanup on component unmount
    return () => {
      if (plotContainerRef.current) {
        resizeObserver.unobserve(plotContainerRef.current);
      }
    };
  }, [numTerms]); // Empty dependency array means this effect runs once on mount

  const shortenDescription = (description) => {
    const maxLength = 30; // Maximum length for description
    if (description.length > maxLength) {
      return description.substring(0, maxLength - 3) + "...";
    } else {
      return description;
    }
  };

  return (
    <div
      ref={plotContainerRef}
      style={{
        width: "100%",
        maxWidth: 1300,
        minHeight: 1000,
        marginTop: 60,
        marginBottom: 30,
        height: "100%",
      }}
    ></div>
  );
};

export default PlotlyBarChart;
