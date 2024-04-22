export default function plot({ style }) {
  const htmlContent = `
  <div>
  <script type="text/javascript">
    window.PlotlyConfig = { MathJaxConfig: "local" };
  </script>
  <script
    charset="utf-8"
    src="https://cdn.plot.ly/plotly-2.27.0.min.js"
  ></script>
  <div
    id="e943a64b-052b-402a-b3d6-557520dffab7"
    class="plotly-graph-div"
    style="height: 100%; width: 100%"
  ></div>
  <script type="text/javascript">
    window.PLOTLYENV = window.PLOTLYENV || {};
    if (document.getElementById("e943a64b-052b-402a-b3d6-557520dffab7")) {
      Plotly.newPlot(
        "e943a64b-052b-402a-b3d6-557520dffab7",
        [
          {
            hovertemplate:
              "gene_name=Gm6969\u003cbr\u003eSHEF Index=%{x}\u003cbr\u003eExpression Level=%{y}\u003cextra\u003e\u003c\u002fextra\u003e",
            legendgroup: "Gm6969",
            line: { color: "rgba(200,200,200,0.5)", dash: "solid" },
            marker: { symbol: "circle" },
            mode: "lines",
            name: "Gm6969",
            orientation: "v",
            showlegend: true,
            x: [
              "SHEF1",
              "SHEF2",
              "SHEF3",
              "SHEF4",
              "SHEF5",
              "SHEF6",
              "SHEF7",
              "SHEF8",
              "SHEF9",
              "SHEF11",
              "SHEF12",
              "SHEF13",
              "SHEF14",
              "SHEF21",
              "SHEF22",
              "SHEF24",
              "SHEF25",
              "SHEF26",
              "SHEF27",
              "SHEF28",
              "SHEF29",
              "SHEF16",
              "SHEF18",
              "SHEF20",
            ],
            xaxis: "x",
            y: [
              -1.116414275, -1.085954576, -0.772437498, -1.215840529,
              -0.864592116, -1.22557774, -0.793754592, -1.103683185,
              -1.10647864, -1.088973349, -0.738213075, 4.455623174,
              -0.746571257, 4.579288571, -0.480666554, 0.120181101, 4.305973857,
              -1.377283948, -0.720459205, -1.110698016, -1.362361961,
              -0.58207561, -0.39384334, 4.424812762,
            ],
            yaxis: "y",
            type: "scatter",
          },
          {
            hovertemplate:
              "gene_name=Gm3375\u003cbr\u003eSHEF Index=%{x}\u003cbr\u003eExpression Level=%{y}\u003cextra\u003e\u003c\u002fextra\u003e",
            legendgroup: "Gm3375",
            line: { color: "rgba(200,200,200,0.5)", dash: "solid" },
            marker: { symbol: "circle" },
            mode: "lines",
            name: "Gm3375",
            orientation: "v",
            showlegend: true,
            x: [
              "SHEF1",
              "SHEF2",
              "SHEF3",
              "SHEF4",
              "SHEF5",
              "SHEF6",
              "SHEF7",
              "SHEF8",
              "SHEF9",
              "SHEF11",
              "SHEF12",
              "SHEF13",
              "SHEF14",
              "SHEF21",
              "SHEF22",
              "SHEF24",
              "SHEF25",
              "SHEF26",
              "SHEF27",
              "SHEF28",
              "SHEF29",
              "SHEF16",
              "SHEF18",
              "SHEF20",
            ],
            xaxis: "x",
            y: [
              -2.524997414, -2.558149513, -2.518749528, 1.493896897,
              -2.348760084, 1.62454564, 2.715483533, -2.116773654, -2.210264968,
              1.580704479, -1.877390323, 2.571959801, 1.679923582, 1.892647865,
              2.201396049, 2.592974233, 1.523514756, 1.505066044, -2.029362043,
              -2.216361822, -2.596151668, 2.026438945, -2.087274814,
              1.675684008,
            ],
            yaxis: "y",
            type: "scatter",
          },
          {
            hovertemplate:
              "gene_name=Mean Expression\u003cbr\u003eSHEF Index=%{x}\u003cbr\u003eExpression Level=%{y}\u003cextra\u003e\u003c\u002fextra\u003e",
            legendgroup: "Mean Expression",
            line: { color: "blue", width: 3 },
            marker: { symbol: "circle" },
            mode: "lines+markers",
            name: "Mean Expression",
            orientation: "v",
            showlegend: true,
            x: [
              "SHEF1",
              "SHEF2",
              "SHEF3",
              "SHEF4",
              "SHEF5",
              "SHEF6",
              "SHEF7",
              "SHEF8",
              "SHEF9",
              "SHEF11",
              "SHEF12",
              "SHEF13",
              "SHEF14",
              "SHEF21",
              "SHEF22",
              "SHEF24",
              "SHEF25",
              "SHEF26",
              "SHEF27",
              "SHEF28",
              "SHEF29",
              "SHEF16",
              "SHEF18",
              "SHEF20",
            ],
            xaxis: "x",
            y: [
              -2.524997414, -2.558149513, -2.135665246538022, 1.318401822320149,
              -2.8846163539318415, 1.3920676857670766, -0.19200806054725017,
              -2.116773654, -2.210264968, 1.367764945348543,
              -1.9335350514954075, 2.142229921817967, -0.27907803644051954,
              2.0062359401786454, 0.3667171056633884, 1.0044552912219453,
              1.8715260449873048, 1.3248486393866565, -1.8388692556490294,
              -2.216361822, -2.596151668, 0.16946755413625936,
              -0.7222373912941988, 1.9297405453912992,
            ],
            yaxis: "y",
            type: "scatter",
          },
        ],
        {
          template: {
            data: {
              histogram2dcontour: [
                {
                  type: "histogram2dcontour",
                  colorbar: { outlinewidth: 0, ticks: "" },
                  colorscale: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                },
              ],
              choropleth: [
                {
                  type: "choropleth",
                  colorbar: { outlinewidth: 0, ticks: "" },
                },
              ],
              histogram2d: [
                {
                  type: "histogram2d",
                  colorbar: { outlinewidth: 0, ticks: "" },
                  colorscale: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                },
              ],
              heatmap: [
                {
                  type: "heatmap",
                  colorbar: { outlinewidth: 0, ticks: "" },
                  colorscale: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                },
              ],
              heatmapgl: [
                {
                  type: "heatmapgl",
                  colorbar: { outlinewidth: 0, ticks: "" },
                  colorscale: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                },
              ],
              contourcarpet: [
                {
                  type: "contourcarpet",
                  colorbar: { outlinewidth: 0, ticks: "" },
                },
              ],
              contour: [
                {
                  type: "contour",
                  colorbar: { outlinewidth: 0, ticks: "" },
                  colorscale: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                },
              ],
              surface: [
                {
                  type: "surface",
                  colorbar: { outlinewidth: 0, ticks: "" },
                  colorscale: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                },
              ],
              mesh3d: [
                { type: "mesh3d", colorbar: { outlinewidth: 0, ticks: "" } },
              ],
              scatter: [
                {
                  fillpattern: { fillmode: "overlay", size: 10, solidity: 0.2 },
                  type: "scatter",
                },
              ],
              parcoords: [
                {
                  type: "parcoords",
                  line: { colorbar: { outlinewidth: 0, ticks: "" } },
                },
              ],
              scatterpolargl: [
                {
                  type: "scatterpolargl",
                  marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                },
              ],
              bar: [
                {
                  error_x: { color: "#2a3f5f" },
                  error_y: { color: "#2a3f5f" },
                  marker: {
                    line: { color: "#E5ECF6", width: 0.5 },
                    pattern: { fillmode: "overlay", size: 10, solidity: 0.2 },
                  },
                  type: "bar",
                },
              ],
              scattergeo: [
                {
                  type: "scattergeo",
                  marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                },
              ],
              scatterpolar: [
                {
                  type: "scatterpolar",
                  marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                },
              ],
              histogram: [
                {
                  marker: {
                    pattern: { fillmode: "overlay", size: 10, solidity: 0.2 },
                  },
                  type: "histogram",
                },
              ],
              scattergl: [
                {
                  type: "scattergl",
                  marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                },
              ],
              scatter3d: [
                {
                  type: "scatter3d",
                  line: { colorbar: { outlinewidth: 0, ticks: "" } },
                  marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                },
              ],
              scattermapbox: [
                {
                  type: "scattermapbox",
                  marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                },
              ],
              scatterternary: [
                {
                  type: "scatterternary",
                  marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                },
              ],
              scattercarpet: [
                {
                  type: "scattercarpet",
                  marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                },
              ],
              carpet: [
                {
                  aaxis: {
                    endlinecolor: "#2a3f5f",
                    gridcolor: "white",
                    linecolor: "white",
                    minorgridcolor: "white",
                    startlinecolor: "#2a3f5f",
                  },
                  baxis: {
                    endlinecolor: "#2a3f5f",
                    gridcolor: "white",
                    linecolor: "white",
                    minorgridcolor: "white",
                    startlinecolor: "#2a3f5f",
                  },
                  type: "carpet",
                },
              ],
              table: [
                {
                  cells: {
                    fill: { color: "#EBF0F8" },
                    line: { color: "white" },
                  },
                  header: {
                    fill: { color: "#C8D4E3" },
                    line: { color: "white" },
                  },
                  type: "table",
                },
              ],
              barpolar: [
                {
                  marker: {
                    line: { color: "#E5ECF6", width: 0.5 },
                    pattern: { fillmode: "overlay", size: 10, solidity: 0.2 },
                  },
                  type: "barpolar",
                },
              ],
              pie: [{ automargin: true, type: "pie" }],
            },
            layout: {
              autotypenumbers: "strict",
              colorway: [
                "#636efa",
                "#EF553B",
                "#00cc96",
                "#ab63fa",
                "#FFA15A",
                "#19d3f3",
                "#FF6692",
                "#B6E880",
                "#FF97FF",
                "#FECB52",
              ],
              font: { color: "#2a3f5f" },
              hovermode: "closest",
              hoverlabel: { align: "left" },
              paper_bgcolor: "white",
              plot_bgcolor: "#E5ECF6",
              polar: {
                bgcolor: "#E5ECF6",
                angularaxis: {
                  gridcolor: "white",
                  linecolor: "white",
                  ticks: "",
                },
                radialaxis: {
                  gridcolor: "white",
                  linecolor: "white",
                  ticks: "",
                },
              },
              ternary: {
                bgcolor: "#E5ECF6",
                aaxis: { gridcolor: "white", linecolor: "white", ticks: "" },
                baxis: { gridcolor: "white", linecolor: "white", ticks: "" },
                caxis: { gridcolor: "white", linecolor: "white", ticks: "" },
              },
              coloraxis: { colorbar: { outlinewidth: 0, ticks: "" } },
              colorscale: {
                sequential: [
                  [0.0, "#0d0887"],
                  [0.1111111111111111, "#46039f"],
                  [0.2222222222222222, "#7201a8"],
                  [0.3333333333333333, "#9c179e"],
                  [0.4444444444444444, "#bd3786"],
                  [0.5555555555555556, "#d8576b"],
                  [0.6666666666666666, "#ed7953"],
                  [0.7777777777777778, "#fb9f3a"],
                  [0.8888888888888888, "#fdca26"],
                  [1.0, "#f0f921"],
                ],
                sequentialminus: [
                  [0.0, "#0d0887"],
                  [0.1111111111111111, "#46039f"],
                  [0.2222222222222222, "#7201a8"],
                  [0.3333333333333333, "#9c179e"],
                  [0.4444444444444444, "#bd3786"],
                  [0.5555555555555556, "#d8576b"],
                  [0.6666666666666666, "#ed7953"],
                  [0.7777777777777778, "#fb9f3a"],
                  [0.8888888888888888, "#fdca26"],
                  [1.0, "#f0f921"],
                ],
                diverging: [
                  [0, "#8e0152"],
                  [0.1, "#c51b7d"],
                  [0.2, "#de77ae"],
                  [0.3, "#f1b6da"],
                  [0.4, "#fde0ef"],
                  [0.5, "#f7f7f7"],
                  [0.6, "#e6f5d0"],
                  [0.7, "#b8e186"],
                  [0.8, "#7fbc41"],
                  [0.9, "#4d9221"],
                  [1, "#276419"],
                ],
              },
              xaxis: {
                gridcolor: "white",
                linecolor: "white",
                ticks: "",
                title: { standoff: 15 },
                zerolinecolor: "white",
                automargin: true,
                zerolinewidth: 2,
              },
              yaxis: {
                gridcolor: "white",
                linecolor: "white",
                ticks: "",
                title: { standoff: 15 },
                zerolinecolor: "white",
                automargin: true,
                zerolinewidth: 2,
              },
              scene: {
                xaxis: {
                  backgroundcolor: "#E5ECF6",
                  gridcolor: "white",
                  linecolor: "white",
                  showbackground: true,
                  ticks: "",
                  zerolinecolor: "white",
                  gridwidth: 2,
                },
                yaxis: {
                  backgroundcolor: "#E5ECF6",
                  gridcolor: "white",
                  linecolor: "white",
                  showbackground: true,
                  ticks: "",
                  zerolinecolor: "white",
                  gridwidth: 2,
                },
                zaxis: {
                  backgroundcolor: "#E5ECF6",
                  gridcolor: "white",
                  linecolor: "white",
                  showbackground: true,
                  ticks: "",
                  zerolinecolor: "white",
                  gridwidth: 2,
                },
              },
              shapedefaults: { line: { color: "#2a3f5f" } },
              annotationdefaults: {
                arrowcolor: "#2a3f5f",
                arrowhead: 0,
                arrowwidth: 1,
              },
              geo: {
                bgcolor: "white",
                landcolor: "#E5ECF6",
                subunitcolor: "white",
                showland: true,
                showlakes: true,
                lakecolor: "white",
              },
              title: { x: 0.05 },
              mapbox: { style: "light" },
            },
          },
          xaxis: {
            anchor: "y",
            domain: [0.0, 1.0],
            title: { text: "SHEF Index" },
          },
          yaxis: {
            anchor: "x",
            domain: [0.0, 1.0],
            title: { text: "centered log2(fpkm + 1)" },
          },
          legend: { title: { text: "Gene Name" }, tracegroupgap: 0 },
          margin: { t: 50, l: 50, b: 100, r: 50 },
          showlegend: false,
          autosize: true,
          plot_bgcolor: "rgba(0,0,0,0)",
        },
        { responsive: true }
      );
    }
  </script>
</div>

    `;

  const blob = new Blob([htmlContent], { type: "text/html" });

  // Create a URL for the Blob
  const url = URL.createObjectURL(blob);

  return (
    <iframe
      src={url}
      width="100%"
      height="100%"
      style={style}
      title="Plotly Chart"
      frameBorder="0"
    ></iframe>
  );
}
