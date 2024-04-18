import React, { useEffect, useRef } from "react";
import Plotly from "plotly.js-dist-min";
import Data from "./eIF5AvsWT_EC.all.Reactome_enrich.json";

const DotPlot = () => {
  const plotContainerRef = useRef(null);
  const data = Data;
  useEffect(() => {
    const createDotPlot = () => {
      data.sort((a, b) => a.pvalue - b.pvalue);
      const topTerms = data.slice(0, 50);

      const descriptions = topTerms.map((item) =>
        shortenDescription(item.Description)
      );
      const fullDescription = topTerms.map((item) => item.Description);
      const geneRatios = topTerms.map((item) => item.GeneRatio);
      const bgRatios = topTerms.map((item) => item.Count * 4);
      const padjs = topTerms.map((item) => item.padj);
      const reactomeID = topTerms.map((item) => item.ReactomeID);
      const count = topTerms.map((item) => item.Count);

      const hovertext = fullDescription.map(
        (desc, index) =>
          `${desc}<br>Adjusted p-value: ${padjs[index]}<br>ReactomeID: ${reactomeID[index]} <br> Count:${count[index]}`
      );

      const trace = {
        x: geneRatios,
        y: descriptions,
        mode: "markers",
        marker: {
          size: bgRatios,
          color: padjs,
          colorscale: "Bluered",
          showscale: true,
        },
        type: "scatter",
        hoverinfo: "y+x+text",
        hovertext: hovertext, // Ensuring this is set correctly
      };

      const layout = {
        title:
          "Top Significant Pathways by Calculated Gene Ratio and Adjusted P-Value",
        autosize: true,
        margin: {
          t: 50,
          l: 300,
          b: 100,
          r: 100,
        },
        plot_bgcolor: "white",
        xaxis: {
          title: "Gene Ratio Calculated",
          showgrid: true,
          gridwidth: 1,
          gridcolor: "lightgrey",
          griddash: "dot",
          ticks: "outside",
          tickwidth: 2,
          tickcolor: "black",
        },
        yaxis: {
          title: "Pathways",
          autorange: "reversed",
          showgrid: true,
          gridwidth: 1,
          gridcolor: "lightgrey",
          griddash: "dot",
          ticks: "outside",
          tickwidth: 2,
          tickcolor: "black",
        },
        modebar: {
          orientation: "v",
          activecolor: "gray",
        },
      };

      Plotly.newPlot(plotContainerRef.current, [trace], layout, {
        responsive: true,
      });
      //   plotContainerRef.current.on("plotly_click", handleDotClick);
    };

    createDotPlot(data);

    const resizeObserver = new ResizeObserver(() => {
      Plotly.relayout(plotContainerRef.current, {
        autosize: true,
      });
    });

    if (plotContainerRef.current) {
      resizeObserver.observe(plotContainerRef.current);
    }

    return () => {
      if (plotContainerRef.current) {
        resizeObserver.unobserve(plotContainerRef.current);
      }
    };
  }, []);
  const shortenDescription = (description) => {
    const maxLength = 30;
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
        minHeight: 800,
        marginTop: 60,
        marginBottom: 30,
        height: "100%",
      }}
    ></div>
  );
};

export default DotPlot;
