// import React, { useEffect, useRef, useState } from "react";
// import Plotly from "plotly.js-dist-min";
// import "./PlotlyGraph.css";

// const VolcanoPlot = ({
//   data,
//   threshold,
//   method,
//   foldChange,
//   handlePlotlyClick,
// }) => {
//   const plotContainerRef = useRef(null);
//   const [showTextTraces, setShowTextTraces] = useState(false);

//   useEffect(() => {
//     if (data && plotContainerRef.current) {
//       let pValueThreshold;
//       let foldChangeThreshold;

//       if (method === true) {
//         // For DESeq2
//         pValueThreshold = -Math.log10(threshold); // Convert user-defined threshold to -log10 scale for plotting
//         foldChangeThreshold = 0; // No fold change threshold for DESeq2
//       } else if (method === false) {
//         // For edgeR
//         pValueThreshold = -Math.log10(threshold); // Convert user-defined threshold to -log10 scale for plotting
//         foldChangeThreshold = foldChange; // Fixed fold change threshold for edgeR
//       }

//       const processedData = data.map((d) => {
//         const pValue = method === true ? d.padj : d.pvalue;
//         const log10PValue =
//           method === true ? -Math.log10(d.padj) : -Math.log10(d.pvalue);
//         const isSignificant =
//           method === true
//             ? pValue < threshold
//             : pValue < threshold &&
//               Math.abs(d.log2FoldChange) > foldChangeThreshold;

//         return {
//           ...d,
//           "-log10(pvalue)": log10PValue, // Convert p-values for plotting
//           Category: isSignificant
//             ? d.log2FoldChange > 0
//               ? "Up Regulated"
//               : "Down Regulated"
//             : "Non-Significant",
//         };
//       });

//       const categories = ["Non-Significant", "Up Regulated", "Down Regulated"];
//       const colors = ["lightslategray", "blue", "red"];

//       // Generate marker traces for all categories
//       const markerTraces = categories.map((category, index) => {
//         const categoryData = processedData.filter(
//           (d) => d.Category === category
//         );
//         return {
//           x: categoryData.map((d) => d.log2FoldChange),
//           y: categoryData.map((d) => d["-log10(pvalue)"]),
//           mode: "markers",
//           marker: {
//             color: colors[index],
//             size: 5,
//             symbol: "circle",
//             opacity: 0.7,
//           },
//           type: "scattergl",
//           customdata: categoryData.map((d) => [
//             d.gene_name,
//             d.gene_id,
//             d.gene_biotype,
//             d.gene_description,
//           ]),
//           hovertemplate:
//             category === "Non-Significant"
//               ? "gene_name=%{customdata[0]}<br>-log10(pvalue)=%{y}<br>log2FoldChange=%{x}<br>gene_id=%{customdata[1]}<extra></extra>"
//               : "gene_name=%{customdata[0]}<br>-log10(pvalue)=%{y}<extra></extra>",
//           name: category,
//         };
//       });

//       const textTraces = showTextTraces
//         ? processedData
//             .filter((d) => d.Category !== "Non-Significant")
//             .map((d) => ({
//               x: [d.log2FoldChange],
//               y: [d["-log10(pvalue)"]],
//               mode: "text",
//               text: [d.gene_name],
//               textposition: "top center",
//               type: "scattergl",
//               hoverinfo: "none",
//               showlegend: false,
//             }))
//         : [];

//       const layout = {
//         shapes: [
//           // Dotted line for p-value threshold
//           {
//             type: "line",
//             x0: 0,
//             x1: 1,
//             y0: pValueThreshold,
//             y1: pValueThreshold,
//             xref: "paper",
//             yref: "y",
//             line: {
//               color: "red",
//               width: 1,
//               dash: "dot",
//             },
//           },
//           // Dotted lines for fold change threshold (positive)
//           {
//             type: "line",
//             x0: foldChangeThreshold,
//             x1: foldChangeThreshold,
//             y0: 0,
//             y1: 1,
//             xref: "x",
//             yref: "paper",
//             line: {
//               color: "blue",
//               width: 1,
//               dash: "dot",
//             },
//           },
//           // Dotted lines for fold change threshold (negative)
//           {
//             type: "line",
//             x0: -foldChangeThreshold,
//             x1: -foldChangeThreshold,
//             y0: 0,
//             y1: 1,
//             xref: "x",
//             yref: "paper",
//             line: {
//               color: "blue",
//               width: 1,
//               dash: "dot",
//             },
//           },
//         ],

//         xaxis: {
//           title: "Log2 Fold Change",
//           showgrid: true,
//           gridwidth: 0.5,
//           gridcolor: "lightgrey",
//           zeroline: true,
//           zerolinecolor: "grey",
//           zerolinewidth: 1,
//         },
//         yaxis: {
//           title: "-Log10(pvalue)",
//           showgrid: true,
//           gridwidth: 0.5,
//           gridcolor: "lightgrey",
//         },
//         plot_bgcolor: "white",
//         autosize: true,
//         margin: { l: 30, r: 0, t: 20, b: 30 },
//         showlegend: true,
//         modebar: {
//           orientation: "v",
//           activecolor: "gray",
//         },
//       };

//       const config = {
//         displayModeBar: true,
//       };

//       Plotly.newPlot(
//         plotContainerRef.current,
//         [...markerTraces, ...textTraces],
//         layout,
//         config,
//         {
//           responsive: true,
//         }
//       );

//       // plotContainerRef.current.on("plotly_click", handlePlotlyClick);
//     }

//     const resizeObserver = new ResizeObserver(() => {
//       Plotly.relayout(plotContainerRef.current, {
//         autosize: true,
//       });
//     });

//     if (plotContainerRef.current) {
//       resizeObserver.observe(plotContainerRef.current);
//     }

//     // Cleanup on component unmount
//     return () => {
//       if (plotContainerRef.current) {
//         resizeObserver.unobserve(plotContainerRef.current);
//         // plotContainerRef.current.removeListener(
//         //   "plotly_click",
//         //   handlePlotlyClick
//         // );
//       }
//     };
//   }, [threshold, method, data, showTextTraces, foldChange]);

//   const toggleTextTraces = () => {
//     setShowTextTraces((prev) => !prev);
//   };

//   return (
//     <>
//       <button className="trace-button" onClick={toggleTextTraces}>
//         {showTextTraces ? "Hide" : "Show"} Gene Names
//       </button>
//       <div
//         ref={plotContainerRef}
//         style={{
//           width: "100%",
//           maxWidth: 1300,
//           maxHeight: 600,
//           marginTop: 10,
//           marginBottom: 30,
//           height: "100%",
//         }}
//       />
//     </>
//   );
// };

// export default VolcanoPlot;

import React, { useEffect, useRef, useState } from "react";
import Plotly from "plotly.js-dist-min";
import "./PlotlyGraph.css";

const VolcanoPlot = ({
  data,
  threshold,
  method,
  foldChange,
  handlePlotlyClick,
  statMethod,
}) => {
  const plotContainerRef = useRef(null);
  const [showTextTraces, setShowTextTraces] = useState(false);
  // const statMethod = "FDR";
  useEffect(() => {
    if (data && plotContainerRef.current) {
      let pValueThreshold;
      let foldChangeThreshold;

      if (method === true) {
        // For DESeq2
        pValueThreshold = -Math.log10(threshold); // Convert user-defined threshold to -log10 scale for plotting
        foldChangeThreshold = 0; // No fold change threshold for DESeq2
      } else if (method === false) {
        // For edgeR
        pValueThreshold = -Math.log10(threshold); // Convert user-defined threshold to -log10 scale for plotting
        foldChangeThreshold = foldChange; // Fixed fold change threshold for edgeR
      }

      const processedData = data.map((d) => {
        let pValue, log10PValue, isSignificant;

        switch (statMethod) {
          case "KS":
            pValue = d.pKS; // Assuming you have KS p-values in data
            log10PValue = -Math.log10(pValue);
            isSignificant = pValue < threshold;
            break;
          case "AFC":
            pValue = d.pAFC; // Assuming you have AFC p-values in data
            log10PValue = -Math.log10(pValue);
            isSignificant = pValue < threshold;
            break;
          case "FDR":
            pValue = d.padj;
            log10PValue = -Math.log10(pValue);
            isSignificant = pValue < threshold;
            break;
          default:
            pValue = method === true ? d.padj : d.pvalue;
            log10PValue = -Math.log10(pValue);
            isSignificant =
              method === true
                ? pValue < threshold
                : pValue < threshold &&
                  Math.abs(d.log2FoldChange) > foldChangeThreshold;
            break;
        }

        return {
          ...d,
          "-log10(pvalue)": log10PValue, // Convert p-values for plotting
          Category: isSignificant
            ? d.log2FoldChange > 0
              ? "Up Regulated"
              : "Down Regulated"
            : "Non-Significant",
        };
      });

      const categories = ["Non-Significant", "Up Regulated", "Down Regulated"];
      const colors = ["lightslategray", "blue", "red"];

      // Generate marker traces for all categories
      const markerTraces = categories.map((category, index) => {
        const categoryData = processedData.filter(
          (d) => d.Category === category
        );
        return {
          x: categoryData.map((d) => d.log2FoldChange),
          y: categoryData.map((d) => d["-log10(pvalue)"]),
          mode: "markers",
          marker: {
            color: colors[index],
            size: 5,
            symbol: "circle",
            opacity: 0.7,
          },
          type: "scattergl",
          customdata: categoryData.map((d) => [
            d.gene_name,
            d.gene_id,
            d.gene_biotype,
            d.gene_description,
          ]),
          hovertemplate:
            category === "Non-Significant"
              ? "gene_name=%{customdata[0]}<br>-log10(pvalue)=%{y}<br>log2FoldChange=%{x}<br>gene_id=%{customdata[1]}<extra></extra>"
              : "gene_name=%{customdata[0]}<br>-log10(pvalue)=%{y}<extra></extra>",
          name: category,
        };
      });

      const textTraces = showTextTraces
        ? processedData
            .filter((d) => d.Category !== "Non-Significant")
            .map((d) => ({
              x: [d.log2FoldChange],
              y: [d["-log10(pvalue)"]],
              mode: "text",
              text: [d.gene_name],
              textposition: "top center",
              type: "scattergl",
              hoverinfo: "none",
              showlegend: false,
            }))
        : [];

      const layout = {
        shapes: [
          // Dotted line for p-value threshold
          {
            type: "line",
            x0: 0,
            x1: 1,
            y0: pValueThreshold,
            y1: pValueThreshold,
            xref: "paper",
            yref: "y",
            line: {
              color: "red",
              width: 1,
              dash: "dot",
            },
          },
          // Dotted lines for fold change threshold (positive)
          {
            type: "line",
            x0: foldChangeThreshold,
            x1: foldChangeThreshold,
            y0: 0,
            y1: 1,
            xref: "x",
            yref: "paper",
            line: {
              color: "blue",
              width: 1,
              dash: "dot",
            },
          },
          // Dotted lines for fold change threshold (negative)
          {
            type: "line",
            x0: -foldChangeThreshold,
            x1: -foldChangeThreshold,
            y0: 0,
            y1: 1,
            xref: "x",
            yref: "paper",
            line: {
              color: "blue",
              width: 1,
              dash: "dot",
            },
          },
        ],

        xaxis: {
          title: "Log2 Fold Change",
          showgrid: true,
          gridwidth: 0.5,
          gridcolor: "lightgrey",
          zeroline: true,
          zerolinecolor: "grey",
          zerolinewidth: 1,
        },
        yaxis: {
          title: "-Log10(pvalue)",
          showgrid: true,
          gridwidth: 0.5,
          gridcolor: "lightgrey",
        },
        plot_bgcolor: "white",
        autosize: true,
        margin: { l: 30, r: 0, t: 20, b: 30 },
        showlegend: true,
        modebar: {
          orientation: "v",
          activecolor: "gray",
        },
      };

      const config = {
        displayModeBar: true,
      };

      Plotly.newPlot(
        plotContainerRef.current,
        [...markerTraces, ...textTraces],
        layout,
        config,
        {
          responsive: true,
        }
      );

      // plotContainerRef.current.on("plotly_click", handlePlotlyClick);
    }

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
        // plotContainerRef.current.removeListener(
        //   "plotly_click",
        //   handlePlotlyClick
        // );
      }
    };
  }, [threshold, method, data, showTextTraces, foldChange, statMethod]);

  const toggleTextTraces = () => {
    setShowTextTraces((prev) => !prev);
  };

  return (
    <>
      <button className="trace-button" onClick={toggleTextTraces}>
        {showTextTraces ? "Hide" : "Show"} Gene Names
      </button>
      <div
        ref={plotContainerRef}
        style={{
          width: "100%",
          maxWidth: 1300,
          maxHeight: 600,
          marginTop: 10,
          marginBottom: 30,
          height: "100%",
        }}
      />
    </>
  );
};

export default VolcanoPlot;
