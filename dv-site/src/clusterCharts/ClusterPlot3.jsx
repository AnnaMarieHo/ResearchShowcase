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
    id="9f2a7832-94ba-4ec6-abfd-fed960b07a7f"
    class="plotly-graph-div"
    style="height: 100%; width: 100%"
  ></div>
  <script type="text/javascript">
    window.PLOTLYENV = window.PLOTLYENV || {};
    if (document.getElementById("9f2a7832-94ba-4ec6-abfd-fed960b07a7f")) {
      Plotly.newPlot(
        "9f2a7832-94ba-4ec6-abfd-fed960b07a7f",
        [
          {
            hovertemplate:
              "gene_name=Gm12751\u003cbr\u003eSHEF Index=%{x}\u003cbr\u003eExpression Level=%{y}\u003cextra\u003e\u003c\u002fextra\u003e",
            legendgroup: "Gm12751",
            line: { color: "rgba(200,200,200,0.5)", dash: "solid" },
            marker: { symbol: "circle" },
            mode: "lines",
            name: "Gm12751",
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
              -1.872349451, 2.285808475, 1.289907318, 1.004017341, -2.117506619,
              0.889902619, 0.869244333, 2.084377494, 0.897605075, -1.847026599,
              0.85874357, -2.110329178, 1.509944584, 1.591870803, -1.813111115,
              -1.691925142, 0.983197731, 1.956569507, -2.108322869, 1.624552549,
              1.510025938, -1.950653294, -1.577573747, -2.266969323,
            ],
            yaxis: "y",
            type: "scatter",
          },
          {
            hovertemplate:
              "gene_name=Gm15772\u003cbr\u003eSHEF Index=%{x}\u003cbr\u003eExpression Level=%{y}\u003cextra\u003e\u003c\u002fextra\u003e",
            legendgroup: "Gm15772",
            line: { color: "rgba(200,200,200,0.5)", dash: "solid" },
            marker: { symbol: "circle" },
            mode: "lines",
            name: "Gm15772",
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
              -1.162987192, 4.550837763, -0.747130516, -1.3897484, -1.514946182,
              -1.3277036, -1.355515066, 4.523351914, -1.078812387, -1.498403452,
              5.354764441, -1.167151579, -1.187505205, -1.380419469,
              -1.272027992, -0.730362718, -1.29103664, -0.793790906,
              -1.899734249, 4.262706404, 4.193293882, -1.118445961,
              -0.729688742, -1.239544147,
            ],
            yaxis: "y",
            type: "scatter",
          },
          {
            hovertemplate:
              "gene_name=Ttr\u003cbr\u003eSHEF Index=%{x}\u003cbr\u003eExpression Level=%{y}\u003cextra\u003e\u003c\u002fextra\u003e",
            legendgroup: "Ttr",
            line: { color: "rgba(200,200,200,0.5)", dash: "solid" },
            marker: { symbol: "circle" },
            mode: "lines",
            name: "Ttr",
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
              -2.694076409, -2.391252691, -0.541800714, -0.738450789,
              4.318584129, 0.487578068, -0.374027265, -0.490372324, 4.43643475,
              2.916685874, 0.144629871, -2.028117385, -3.031168063,
              -1.614499352, -1.771604373, 3.364973702, -0.510674286,
              -0.04778832, -2.19654959, 3.545758285, 4.957932503, -1.899958748,
              -2.548019599, -1.294217274,
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
              -2.694076409, 2.0944769587584653, -0.6380662756147986,
              -0.4659753422794367, 2.4110422340840265, 0.7456386407862352,
              0.1133134422659951, 1.039346309463702, 1.683420302986477,
              1.969633425915614, 1.2523491872643226, -2.028117385,
              1.3276555118768631, 1.3739938059861723, -1.771604373,
              0.11753242741679548, -0.021652235380796414, -0.2615139039639324,
              -2.19654959, 1.990799122751642, 2.0930546400817693, -1.899958748,
              -1.887306495990919, -1.294217274,
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
