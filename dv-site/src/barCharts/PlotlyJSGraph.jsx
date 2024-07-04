// import React, { useEffect, useRef } from "react";
// import Plotly from "plotly.js-dist-min";
// import "./PlotlyJS.css";

// const PlotlyBarChart = ({ numTerms, chart, handleChartClick }) => {
//   const plotContainerRef = useRef(null);

//   useEffect(() => {
//     const createBarChart = (data) => {
//       data.sort(
//         (a, b) =>
//           parseFloat(b["enrichment score"]) - parseFloat(a["enrichment score"])
//       );
//       const topTerms = data.slice(0, numTerms);

//       // Grouping by enrichment score and adjusting the y-axis labels to avoid overlap
//       const enrichmentScores = new Map();
//       topTerms.forEach((item) => {
//         const score = item["enrichment score"].toFixed(2);
//         if (!enrichmentScores.has(score)) {
//           enrichmentScores.set(score, []);
//         }
//         enrichmentScores.get(score).push(item);
//       });

//       const yLabels = [];
//       const xValues = [];
//       const hoverText = [];
//       const termIds = [];
//       const lDescription = [];

//       enrichmentScores.forEach((items, score) => {
//         items.forEach((item, index) => {
//           const longDescription = item["term description"];
//           const baseDescription = shortenDescription(item["term description"]);
//           const uniqueDescriptor = `${baseDescription} (${score})`;
//           // console.log(longDescription);
//           yLabels.push(`${uniqueDescriptor}${index > 0 ? " " + index : ""}`); // Adjust label if there are duplicates
//           xValues.push(parseFloat(score));
//           termIds.push(item["#term ID"]);
//           lDescription.push(longDescription);
//           hoverText.push(
//             `${item["term description"]}<br>Enrichment Score: ${score}<extra></extra>`
//           );
//         });
//       });

//       const trace = {
//         y: yLabels,
//         x: xValues,
//         hovertemplate: hoverText,
//         type: "bar",
//         orientation: "h",
//         marker: {
//           color: "darkblue",
//           opacity: 0.75,
//         },
//       };

//       const layout = {
//         title: `Top Regulations`,
//         autosize: true,
//         margin: {
//           t: 25,
//           l: 210,
//           b: 100,
//           r: 100,
//         },
//         plot_bgcolor: "white",
//         xaxis: {
//           showgrid: true,
//           gridwidth: 1,
//           gridcolor: "lightgrey",
//           griddash: "dot",
//           ticks: "outside",
//           tickwidth: 2,
//           tickcolor: "black",
//         },
//         yaxis: {
//           autorange: "reversed",
//           showgrid: true,
//           gridwidth: 1,
//           gridcolor: "lightgrey",
//           griddash: "dot",
//           ticks: "outside",
//           tickwidth: 2,
//           tickcolor: "black",
//         },
//         modebar: {
//           orientation: "v",
//           activecolor: "gray",
//         },
//       };

//       const config = {
//         displayModeBar: true,
//       };

//       Plotly.newPlot(plotContainerRef.current, [trace], layout, config, {
//         responsive: true,
//       });
//       plotContainerRef.current.on("plotly_click", handleChartClick);
//     };

//     createBarChart(chart);

//     const resizeObserver = new ResizeObserver(() => {
//       Plotly.relayout(plotContainerRef.current, {
//         autosize: true,
//       });
//     });

//     if (plotContainerRef.current) {
//       resizeObserver.observe(plotContainerRef.current);
//     }

//     return () => {
//       if (plotContainerRef.current) {
//         resizeObserver.unobserve(plotContainerRef.current);
//       }
//     };
//   }, [numTerms, chart]);

//   const shortenDescription = (description) => {
//     const maxLength = 20;
//     if (description.length > maxLength) {
//       return description.substring(0, maxLength - 3) + "...";
//     } else {
//       return description;
//     }
//   };

//   return (
//     <div
//       ref={plotContainerRef}
//       style={{
//         width: "100%",
//         maxWidth: 1300,
//         minHeight: 1000,
//         marginTop: 60,
//         // marginBottom: 10,
//         height: "100%",
//       }}
//     ></div>
//   );
// };

// export default PlotlyBarChart;

import React, { useEffect, useRef, useState } from "react";
import Plotly from "plotly.js-dist-min";
import "./PlotlyJS.css";

const PlotlyBarChart = ({ numTerms, chart, handleChartClick }) => {
  const plotContainerRef = useRef(null);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const createBarChart = (data, category) => {
      let filteredData = data;
      if (category !== "all") {
        filteredData = data.filter((item) => item.direction === category);
      }

      filteredData.sort(
        (a, b) =>
          parseFloat(b["enrichment score"]) - parseFloat(a["enrichment score"])
      );

      const topTerms = filteredData.slice(0, numTerms);

      const enrichmentScores = new Map();
      topTerms.forEach((item) => {
        const score = item["enrichment score"].toFixed(2);
        if (!enrichmentScores.has(score)) {
          enrichmentScores.set(score, []);
        }
        enrichmentScores.get(score).push(item);
      });

      const yLabels = [];
      const xValues = [];
      const hoverText = [];
      const termIds = [];
      const lDescription = [];

      enrichmentScores.forEach((items, score) => {
        items.forEach((item, index) => {
          const longDescription = item["term description"];
          const baseDescription = shortenDescription(item["term description"]);
          const uniqueDescriptor = `${baseDescription} (${score})`;
          yLabels.push(`${uniqueDescriptor}${index > 0 ? " " + index : ""}`);
          xValues.push(parseFloat(score));
          termIds.push(item["#term ID"]);
          lDescription.push(longDescription);
          hoverText.push(
            `${item["term description"]}<br>Enrichment Score: ${score}<extra></extra>`
          );
        });
      });

      const trace = {
        y: yLabels,
        x: xValues,
        hovertemplate: hoverText,
        type: "bar",
        orientation: "h",
        marker: {
          color: "darkblue",
          opacity: 0.75,
        },
      };

      const layout = {
        title: `Regulations (${category})`,
        autosize: true,
        margin: {
          t: 25,
          l: 210,
          b: 100,
          r: 100,
        },
        plot_bgcolor: "white",
        xaxis: {
          showgrid: true,
          gridwidth: 1,
          gridcolor: "lightgrey",
          griddash: "dot",
          ticks: "outside",
          tickwidth: 2,
          tickcolor: "black",
        },
        yaxis: {
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

      const config = {
        displayModeBar: true,
      };

      Plotly.newPlot(plotContainerRef.current, [trace], layout, config, {
        responsive: true,
      });
      plotContainerRef.current.on("plotly_click", handleChartClick);
    };

    createBarChart(chart, category);

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
  }, [numTerms, chart, category]);

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
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}
      >
        <button onClick={() => setCategory("all")}>All</button>
        <button onClick={() => setCategory("top")}>Top</button>
        <button onClick={() => setCategory("bottom")}>Bottom</button>
        <button onClick={() => setCategory("both ends")}>Both Ends</button>
      </div>
      <div
        ref={plotContainerRef}
        style={{
          width: "100%",
          maxWidth: 1300,
          minHeight: 1000,
          marginTop: 60,
          height: "100%",
        }}
      ></div>
    </>
  );
};

export default PlotlyBarChart;
