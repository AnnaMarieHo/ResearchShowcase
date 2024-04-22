import React, { useEffect, useRef } from "react";
import Plotly from "plotly.js-dist-min";
import Data from "./clustered_data.json"; // Path to your JSON data file

const LinePlot = () => {
  const plotContainerRef = useRef(null);

  useEffect(() => {
    const createLinePlot = () => {
      let traces = []; // Array to store all traces
      let highlightedTrace; // Trace that needs to be interactive and highlighted

      Data.forEach((gene, index) => {
        const shefKeys = Object.keys(gene).filter((key) =>
          key.startsWith("SHEF")
        );
        const xValues = shefKeys;
        const yValues = shefKeys.map((key) => gene[key]);
        const logYValues = shefKeys.map((key) => Math.log2(gene[key] + 1)); // Calculate log2(SHEF + 1)

        // Create trace for each gene, initially grayed out
        const trace = {
          x: xValues,
          y: yValues,
          type: "scatter",
          mode: "lines+markers",
          name: gene.gene_name,
          line: {
            color: "gray", // Set all traces to gray
          },
          hoverinfo: "skip", // Optionally skip hover information for grayed-out traces
        };

        // Special handling for the trace to be highlighted
        if (index === 0) {
          // Assume first gene should be highlighted, adjust logic as needed
          highlightedTrace = {
            x: xValues,
            y: logYValues,
            type: "scatter",
            mode: "lines+markers",
            name: gene.gene_name + " (Highlighted)",
            line: {
              color: "blue", // Highlight color
            },
          };
        }

        traces.push(trace);
      });

      // Add the highlighted trace if it exists
      if (highlightedTrace) {
        traces.push(highlightedTrace);
      }

      const layout = {
        title: "Gene Expression Levels Across SHEF Values",
        autosize: true,
        margin: {
          t: 50,
          l: 50,
          b: 100,
          r: 50,
        },
        xaxis: {
          title: "SHEF Index",
          type: "category", // To treat SHEF indices as categorical variables
        },
        yaxis: {
          title: "SHEF Value",
        },
      };

      // Render the combined plot
      Plotly.newPlot(plotContainerRef.current, traces, layout, {
        responsive: true,
      });
    };

    createLinePlot();

    // Optional: Resize observer to make the plot responsive
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

export default LinePlot;
