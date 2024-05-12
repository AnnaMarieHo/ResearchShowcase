import React, { useEffect, useRef } from "react";
import Plotly from "plotly.js-dist-min";
import Data from "./eIF5AvsWT_EC.all.Reactome_enrich.json";

const DotPlot = ({ plot }) => {
  const plotContainerRef = useRef(null);
  const data = plot;
  console.log(plot);

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

      const containerWidth = plotContainerRef.current.offsetWidth;
      const markerScale = containerWidth / 1000; // Adjust this factor as needed

      const trace = {
        x: geneRatios,
        y: descriptions,
        mode: "markers",
        marker: {
          size: bgRatios.map((ratio) => ratio * markerScale), // Scale marker size dynamically
          color: padjs,
          colorscale: "Bluered",
          showscale: true,
        },
        type: "scatter",
        hoverinfo: "y+x+text",
        hovertext: hovertext, // Ensuring this is set correctly
      };

      const layout = {
        title: "",
        autosize: true,
        margin: {
          t: 50,
          l: 160,
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

      const resizeHandler = () => {
        const newContainerWidth = plotContainerRef.current.offsetWidth;
        const newMarkerScale = newContainerWidth / 1000; // Adjust this factor as needed
        Plotly.restyle(plotContainerRef.current, "marker.size", [
          bgRatios.map((ratio) => ratio * newMarkerScale),
        ]);
      };

      const resizeObserver = new ResizeObserver(resizeHandler);

      if (plotContainerRef.current) {
        resizeObserver.observe(plotContainerRef.current);
      }

      return () => {
        if (plotContainerRef.current) {
          resizeObserver.unobserve(plotContainerRef.current);
        }
      };
    };

    createDotPlot(data);
  }, []);

  const shortenDescription = (description) => {
    const maxLength = 20;
    if (description.length > maxLength) {
      return description.substring(0, maxLength - 3) + "...";
    } else {
      return description;
    }
  };

  return (
    <>
      <p
        style={{
          color: "black",
          width: "400px",
          fontSize: "20px",
          textAlign: "center",
          marginTop: 30,
        }}
      >
        Top Significant Pathways by Calculated Gene Ratio and Adjusted P-Value
      </p>
      <div
        ref={plotContainerRef}
        style={{
          width: "100%",
          maxWidth: 1300,
          minHeight: 800,
          marginTop: 10,
          marginBottom: 30,
          height: "100%",
        }}
      ></div>
    </>
  );
};

export default DotPlot;
