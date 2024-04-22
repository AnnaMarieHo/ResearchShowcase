import React, { useEffect, useRef } from "react";
import Plotly from "plotly.js-dist-min";
import data from "./heatmap_data.json";
import "../PlotlyJS.css";

const HeatmapPlot = () => {
  const plotContainerRef = useRef(null);

  useEffect(() => {
    const createHeatmap = () => {
      // const xValues = Object.keys(data[Object.keys(data)[0]]);
      const xValues = Object.keys(data[Object.keys(data)[0]]).filter(
        (key) => key !== "gene_name" && key !== "gene_description"
      );
      const yValues = Object.keys(data).reverse();
      const descriptions = yValues.map(shortenDescription);
      const fullDescriptions = yValues; // Assume this holds the full descriptions for tooltips

      const zValues = yValues.map((row, index) =>
        xValues.map((col) => data[row][col])
      );
      const hoverText = yValues.map((row) =>
        xValues.map(
          (col) =>
            `Description: ${row}<br>Gene Name: ${data[row].gene_name.join(
              ", "
            )}<br>Value: ${data[row][col]}`
        )
      );

      const heatmapData = {
        x: xValues,
        y: descriptions,
        z: zValues,
        type: "heatmap",
        colorscale: "RdBu",
        hoverinfo: "text+x+z", // Specifies what information to display on hover
        // text: fullDescriptions.map((desc) => Array(xValues.length).fill(desc)), // Repeat full description across all columns
        text: hoverText, // Repeat full description across all columns
      };

      const layout = {
        title: "Genes Grouped by Expression Patterns",
        xaxis: { title: "" },
        yaxis: {
          title: "",
          tickmode: "array",
          tickvals: descriptions.map((_, i) => i),
          ticktext: descriptions,
        },
        aspectmode: "equal",
        autosize: true,
        margin: {
          l: 250,
          r: 10,
          t: 40,
          b: 70,
        },
      };

      Plotly.newPlot(plotContainerRef.current, [heatmapData], layout, {
        responsive: true,
      });
    };

    createHeatmap();

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
        width: "50%",
        minHeight: 1500,
        minWidth: "500px",
        marginTop: 10,
        marginBottom: 70,
        height: "100%",
      }}
    ></div>
  );
};

export default HeatmapPlot;
