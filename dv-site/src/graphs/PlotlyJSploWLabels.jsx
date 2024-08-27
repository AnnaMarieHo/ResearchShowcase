import React, { useState, useEffect, useRef } from "react";
import Plotly from "plotly.js-dist-min";
import "./PlotlyGraph.css";

const VolcanoPlot = ({
  data,
  threshold,
  method,
  foldChange,
  statMethod,
  labels,
}) => {
  const plotContainerRef = useRef(null);
  const [showTextTraces, setShowTextTraces] = useState(false); // Toggle gene labels
  const [significantCount, setSignificantCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [validatedThreshold, setValidatedThreshold] = useState(threshold);
  const [validatedFoldChange, setValidatedFoldChange] = useState(foldChange);
  const [labelsCount, setLabelsCount] = useState(0);

  useEffect(() => {
    if (data && plotContainerRef.current) {
      let pValueThreshold;
      let foldChangeThreshold;

      if (method === true) {
        pValueThreshold = -Math.log10(validatedThreshold);
        foldChangeThreshold = 0;
      } else if (method === false) {
        pValueThreshold = -Math.log10(validatedThreshold);
        foldChangeThreshold = validatedFoldChange;
      }

      const processedData = data
        .map((d) => {
          let pValue, log10PValue, isSignificant;

          switch (statMethod) {
            default:
              pValue = method === true ? d.padj : d.pvalue;
              log10PValue = -Math.log10(pValue);
              isSignificant =
                method === true
                  ? pValue < validatedThreshold
                  : pValue < validatedThreshold &&
                    Math.abs(d.log2FoldChange) > foldChangeThreshold;
              break;
          }

          return {
            ...d,
            "-log10(pvalue)": log10PValue,
            Category: isSignificant
              ? d.log2FoldChange > 0
                ? "Up Regulated"
                : "Down Regulated"
              : null, // No category for non-significant points
          };
        })
        .filter((d) => d.Category); // Filter out non-significant points

      const significantGenes = processedData;

      setSignificantCount(significantGenes.length);

      const categories = ["Up Regulated", "Down Regulated"];
      const colors = ["rgb(77, 136, 255)", "rgb(255, 80, 80)"];

      // Dynamic layer for significant points
      const dynamicTraces = categories.map((category, index) => {
        const categoryData = significantGenes.filter(
          (d) => d.Category === category
        );

        return {
          x: categoryData.map((d) => d.log2FoldChange),
          y: categoryData.map((d) => d["-log10(pvalue)"]),
          mode: showTextTraces ? "markers+text" : "markers",
          marker: {
            color: colors[index],
            size: 4.5,
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
            "gene_name=%{customdata[0]}<br>-log10(pvalue)=%{y}<br>log2FoldChange=%{x}<br>gene_id=%{customdata[1]}<extra></extra>",
          name: category,
        };
      });

      // Trace for searched gene
      const searchTrace = searchQuery
        ? significantGenes
            .filter(
              (d) => d.gene_name.toLowerCase() === searchQuery.toLowerCase()
            )
            .map((d) => ({
              x: [d.log2FoldChange],
              y: [d["-log10(pvalue)"]],
              mode: "markers",
              marker: {
                color: "rgb(17, 157, 255)",
                opacity: 1,
                size: 7,
                line: {
                  color: "rgb(231, 99, 250)",
                  width: 1,
                },
              },
              type: "scattergl",
              text: [d.gene_name],
              textposition: "top center",
              hoverinfo: "text",
              name: "Searched Gene",
            }))
        : [];

      // Traces for label genes with labels
      // Traces for label genes with labels
      const labelTraces = labels
        ? significantGenes
            .filter((d) => labels.includes(d.gene_name))
            .map((d) => ({
              x: [d.log2FoldChange],
              y: [d["-log10(pvalue)"]],
              mode: showTextTraces ? "markers+text" : "markers",
              marker: {
                color: "rgb(0, 0, 102)",
                opacity: 0.5,
                size: 10,
                line: {
                  color: "rgb(255, 255, 153)",
                  width: 1.5,
                },
              },
              type: "scattergl",
              text: [d.gene_name], // Display gene names
              textposition: "top center",
              name: d.gene_name, // Set trace name to gene name
            }))
        : [];

      const tempCount = labelTraces;
      setLabelsCount(tempCount.length);

      const layout = {
        shapes: [
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
        modebar: {
          orientation: "v",
          activecolor: "gray",
        },
        showlegend: true, // Disable legend
      };

      const config = {
        displayModeBar: true, // Re-enable modebar
      };

      Plotly.purge(plotContainerRef.current);
      Plotly.newPlot(
        plotContainerRef.current,
        [...dynamicTraces, ...searchTrace, ...labelTraces],
        layout,
        config
      );
    }

    const resizeObserver = new ResizeObserver(() => {
      if (plotContainerRef.current) {
        Plotly.relayout(plotContainerRef.current, {
          autosize: true,
        });
      }
    });

    if (plotContainerRef.current) {
      resizeObserver.observe(plotContainerRef.current);
    }

    return () => {
      if (plotContainerRef.current) {
        Plotly.purge(plotContainerRef.current);
        resizeObserver.unobserve(plotContainerRef.current);
      }
    };
  }, [
    validatedThreshold,
    method,
    data,
    showTextTraces,
    validatedFoldChange,
    statMethod,
    searchQuery,
    labels,
  ]);

  const validateAndSetThreshold = (value) => {
    const numericValue = parseFloat(value);
    if (numericValue > 0 && numericValue <= 0.05) {
      setValidatedThreshold(numericValue);
    }
  };

  const validateAndSetFoldChange = (value) => {
    const numericValue = parseFloat(value);
    if (numericValue >= 0 && numericValue <= 1) {
      setValidatedFoldChange(numericValue);
    }
  };

  const toggleTextTraces = () => {
    setShowTextTraces((prev) => !prev);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      {/* <div className="controls"> */}
      {/* <p>Significant Genes: {labelsCount}</p> */}
      <button
        style={{
          margin: "10px",
          height: "17px",
          width: "130px",
          // padding: "10px",
          fontSize: "15px",
        }}
        className="general-button"
        onClick={toggleTextTraces}
      >
        {showTextTraces ? "Hide Gene Labels" : "Show Gene Labels"}
      </button>
      {/* <input
        type="text"
        placeholder="Search for a gene"
        value={searchQuery}
        onChange={handleSearchInputChange}
      /> */}
      {/* </div> */}
      <div
        style={{
          width: "100%",
          maxWidth: 1000,
          maxHeight: 470,
          marginTop: 10,
          marginBottom: 30,
          height: "100%",
        }}
        ref={plotContainerRef}
      ></div>
    </>
  );
};

export default VolcanoPlot;
