import React, { useEffect, useRef } from "react";
import Plotly from "plotly.js-dist-min";
import data from "./heatmap_data.json";

const HeatmapPlot = () => {
  const plotContainerRef = useRef(null);

  useEffect(() => {
    const createHeatmap = () => {
      const xValues = Object.keys(data[Object.keys(data)[0]]);
      const yValues = Object.keys(data).reverse();
      const descriptions = yValues.map(shortenDescription);
      const fullDescriptions = yValues; // Assume this holds the full descriptions for tooltips

      const zValues = yValues.map((row, index) =>
        xValues.map((col) => data[row][col])
      );

      const heatmapData = {
        x: xValues,
        y: descriptions,
        z: zValues,
        type: "heatmap",
        colorscale: "Rainbow",
        hoverinfo: "text+x+z", // Specifies what information to display on hover
        text: fullDescriptions.map((desc) => Array(xValues.length).fill(desc)), // Repeat full description across all columns
      };

      const layout = {
        title: "Heatmap of Top Gene Descriptions by average FPKM",
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
          l: 300,
          r: 10,
          t: 80,
          b: 100,
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
        minHeight: 900,
        minWidth: "500px",
        marginTop: 60,
        marginBottom: 70,
        height: "100%",
      }}
    ></div>
  );
};

export default HeatmapPlot;
