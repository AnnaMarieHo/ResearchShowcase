import "./DEGListDatasets.css";
import React, { useState, useEffect } from "react";
// import PlotlyGraph from "../../graphs/PlotlyGraph";
import Dropdown from "../DropDown";
import MultiStateToggle from "../MultiStateToggle";
import DownArrow from "../../generalComponents/DownArrow";
// import PlotlyBarChart from "../../barCharts/PlotlyJSGraph";
import PlotlyJSPlot from "../../graphs/PlotlyJSPlot";
import "../../graphs/PlotlyGraph.css";
import GeneInfoComponent from "./GeneInfo";
import { AnimatePresence, useScroll } from "framer-motion";
import RegulationInfo from "./RegulationInfo";
import ToggleCharts from "./ToggleCharts";
import DotPlot from "../../barCharts/testNetwork/DotPlot";
import Toggle from "../ToggleGraphComponent";

import {
  chartDataMapping,
  dropdownOptions,
  DEGdropdownLength,
  termsLength,
  plotDataMapping,
} from "./imports";

export default function DEGListDatasets() {
  const [selectedDropdown, setSelectedDropdown] = useState("-- choose --");
  const [dataFromChild, setDataFromChild] = useState("All Genes");
  // const [numTerms, setNumTerms] = useState(0);
  const [selectedChartData, setSelectedChartData] = useState(null);
  const [selectedPlotData, setSelectedPlotData] = useState(null);
  // const [selectedPlot, setSelectedPlot] = useState(null);
  const [mainCategory, setMainCategory] = useState("DHS_DOHHvsWT_EC");
  const [subCategory, setSubCategory] = useState("KEGG");
  const [pValueThreshold, setpValThreshold] = useState("0.005");
  const [tempThreshold, setTempThreshold] = useState("0.005");
  // const [showGeneInfo, setShowGeneInfo] = useState(null);
  // const [clickedPointData, setClickedPointData] = useState(null);
  const [graphModule, setGraphModule] = useState(null);
  // const [barChartData, setBarChartData] = useState(null);
  const [method, setMethod] = useState(false);
  const [disableInput, setDisableInput] = useState(false);
  const [log2FoldThreshold, setLog2FoldThreshold] = useState("1");
  const [tempLog2Fold, setTempLog2Fold] = useState("0.005");

  const handleDataFromChild = (data) => {
    if (data !== "KEGG" && data !== "Reactome" && data !== "STRING") {
      setSubCategory("WikiPathways");
    } else {
      setSubCategory(data);
    }
    setDataFromChild(data);
    if (data === "All Genes") {
      setpValThreshold(0.005);
    } else {
      setSelectedDropdown("DHS_DOHHvsWT_EC");
    }
  };

  useEffect(() => {
    const mainCategory =
      selectedDropdown !== "-- choose --" ? selectedDropdown : null;
    if (mainCategory) {
      const chartData = chartDataMapping[mainCategory]?.[subCategory];
      setSelectedChartData(chartData);

      // getDataLength(chartData);
    } else {
      setSelectedChartData(null);
    }
  }, [selectedDropdown, subCategory]);

  useEffect(() => {
    const plotData = plotDataMapping[mainCategory]?.[subCategory];
    setSelectedPlotData(plotData); // Update selectedPlotData based on mainCategory and subCategory
  }, [selectedDropdown, subCategory, mainCategory, selectedPlotData]);

  // console.log(label, label2, label3);
  // const getDataLength = (selectedChartData) => {
  //   if (selectedChartData != null) {
  //     const dataLength = selectedChartData.length;
  //     console.log(dataLength);
  //   }
  // };

  const handleMainCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedDropdown(value);
    setMainCategory(value);
  };

  const handleThresholdChange = (e) => {
    setTempThreshold(e.target.value);
  };

  const handleSubmitThreshold = () => {
    setpValThreshold(tempThreshold);
    setLog2FoldThreshold(tempLog2Fold);
  };

  // const [log2FoldThreshold, setLog2FoldThreshold] = useState("1");
  // const [tempLog2Fold, setTempLog2Fold] = useState("");

  const handleLogChange = (e) => {
    setTempLog2Fold(e.target.value);
  };

  // const handlePlotlyClick = (data) => {
  //   const { points } = data;
  //   const clickedPoint = points[0];
  //   setClickedPointData({
  //     geneName: clickedPoint.customdata[0],
  //     geneId: clickedPoint.customdata[1],
  //     geneBiotype: clickedPoint.customdata[2],
  //     geneDescription: clickedPoint.customdata[3],
  //     log2FoldChange: clickedPoint.x,
  //     log10pValue: clickedPoint.y,
  //   });
  //   setShowGeneInfo(true);
  // };
  // const handleCloseClick = () => {
  //   setShowGeneInfo(false);
  //   console.log(showGeneInfo);
  // };

  useEffect(() => {
    if (method === false) {
      setDisableInput(false);
      setLog2FoldThreshold(1);
      setTempLog2Fold(1);
      setTempThreshold("0.005"); // Reset the temporary threshold input
      setpValThreshold("0.005"); // Reset the p-value threshold to default
    } else {
      setDisableInput(true);
      setLog2FoldThreshold(0);
      setTempLog2Fold(0);
      setTempThreshold("0.05"); // Reset the temporary threshold input
      setpValThreshold("0.05");
    }
  }, [method]);

  useEffect(() => {
    async function loadGraphData() {
      if (dataFromChild === "All Genes" && selectedDropdown != "-- choose --") {
        let module;
        switch (selectedDropdown) {
          case "DHS_DOHHvsWT_EC":
            module = await import(
              "../../graphs/DHS_DOHHvsWT_EC/DHS_DOHHvsWT_EC.DEG.all.json"
            );

            break;
          case "DHS_DOHHvsTar4_EC":
            module = await import(
              "../../graphs/DHS_DOHHvsTar4_EC/DHS_DOHHvsTar4_EC.DEG.all.json"
            );
            break;
          case "eIF5A_DDvsDHS_DOHH":
            module = await import(
              "../../graphs/eIF5A_DDvsDHS_DOHH/eIF5A_DDvsDHS_DOHH.DEG.all.json"
            );
            break;

          case "eIF5A_DDvseIF5A":
            module = await import(
              "../../graphs/eIF5A_DDvseIF5A/eIF5A_DDvseIF5A.DEG.all.json"
            );
            break;
          case "eIF5A_DDvsK50A_DD":
            module = await import(
              "../../graphs/eIF5A_DDvsK50A_DD/eIF5A_DDvsK50A_DD.DEG.all.json"
            );
            break;
          case "eIF5A_DDvsTar4_EC":
            module = await import(
              "../../graphs/eIF5A_DDvsTar4_EC/eIF5A_DDvsTar4_EC.DEG.all.csv.json"
            );
            break;
          case "eIF5A_DDvsWT_EC":
            module = await import(
              "../../graphs/eIF5A_DDvsWT_EC/eIF5A_DDvsWT_EC.DEG.all.json"
            );
            break;
          case "eIF5AvsTar4_EC":
            module = await import(
              "../../graphs/eIF5AvsTar4_EC/eIF5AvsTar4_EC.DEG.all.json"
            );
            break;
          case "eIF5AvsWT_EC":
            module = await import(
              "../../graphs/eIF5AvsWT_EC/eIF5AvsWT_EC.DEG.all.json"
            );
            break;
          case "K50A_DDvsDHS_DOHH":
            module = await import(
              "../../graphs/K50A_DDvsDHS_DOHH/K50A_DDvsDHS_DOHH.DEG.all.json"
            );
            break;
          case "K50A_DDvsTar4_EC":
            module = await import(
              "../../graphs/K50A_DDvsTar4_EC/K50A_DDvsTar4_EC.DEG.all.json"
            );
            break;
          case "K50A_DDvsWT_EC":
            module = await import(
              "../../graphs/K50A_DDvsWT_EC/K50A_DDvsWT_EC.DEG.all.json"
            );
            break;
          case "Tar4_ECvsWT_EC":
            module = await import(
              "../../graphs/Tar4_ECvsWT_EC/Tar4_ECvsWT_EC.DEG.all.json"
            );
            break;
          default:
            module = null;
        }

        setGraphModule(module.default);
      }
    }
    loadGraphData();
  }, [dataFromChild, selectedDropdown, graphModule]);

  return (
    <div className="DEG-container-expanded">
      <MultiStateToggle sendDataToParent={handleDataFromChild} />
      {dataFromChild === "All Genes" && (
        <>
          <div className="all-genes-container">
            <div className="view-pathway">
              <h3 style={{ margin: 30 }}>
                explore five in vivo mouse models and compare <br />
                gene expression values with and without eIF5A hypusination
              </h3>
            </div>
          </div>

          <div className="DEG-box">
            <div className="droptown-tooltip-container">
              <Dropdown
                className={DEGdropdownLength}
                selectedDropdown={selectedDropdown}
                onChange={handleMainCategoryChange}
                options={dropdownOptions}
              />
              <span className="tooltip">
                ?
                <span className="tooltip-text">
                  Enter a statistical threshold and toggle between DESeq2 and
                  edgeR to apply statistical methods based on experimental setup
                  criteria. DESeq2 uses an adjusted P-value threshold {"<"} 0.05
                  to control the False Discovery Rate {"(FDR)"}. edgeR employs a
                  corrected P-value threshold {"<"} 0.005 and fold change
                  criterion {"<"} 1 to identify genes that exhibit substantial
                  expression changes despite the absence of replicates.
                </span>
              </span>
            </div>
            {selectedChartData && (
              <>
                <div className="chart-container">
                  <div className="sub-chart-container">
                    <Toggle
                      toggleState={method}
                      onToggle={() => setMethod(!method)}
                    />
                    <div className="threshold-input-container">
                      <div
                        style={{
                          textAlign: "center",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          // type="number"
                          default={pValueThreshold}
                          value={tempThreshold}
                          onChange={handleThresholdChange}
                          id="alphaThreshold"
                          name="alphaThreshold"
                          className="threshold-input-style"
                        />
                        <p
                          style={{
                            color: "black",
                            fontSize: "large",
                            marginRight: "10px",
                          }}
                        >
                          P-value
                        </p>
                      </div>

                      {!disableInput ? (
                        <div
                          style={{
                            textAlign: "center",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <input
                            // type="number"
                            default={log2FoldThreshold}
                            value={tempLog2Fold}
                            onChange={handleLogChange}
                            placeholder={log2FoldThreshold}
                            id="logThreshold"
                            name="logThreshold"
                            className="threshold-input-style"
                          />
                          <p
                            style={{
                              color: "black",
                              fontSize: "large",
                              marginRight: "10px",
                            }}
                          >
                            log2FC
                          </p>
                        </div>
                      ) : (
                        <div></div>
                      )}

                      <button
                        className="threshold-submit-button"
                        onClick={handleSubmitThreshold}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                <p
                  style={{
                    color: "black",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                >
                  {selectedDropdown}
                </p>
                <AnimatePresence>
                  {/* {showGeneInfo && (
                    <GeneInfoComponent
                      data={clickedPointData}
                      // onClose={handleCloseClick} // Pass handleCloseClick correctly here
                    />
                  )} */}
                </AnimatePresence>
                {graphModule ? (
                  <>
                    <PlotlyJSPlot
                      data={graphModule}
                      threshold={pValueThreshold}
                      foldChange={log2FoldThreshold}
                      // handlePlotlyClick={handlePlotlyClick}
                      method={method}
                    />
                  </>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100px",
                      color: "black",
                      fontSize: "30px",
                      textAlign: "center",
                    }}
                  >
                    Loading...
                  </div>
                )}
              </>
            )}
          </div>
        </>
      )}
      {dataFromChild === "KEGG" && (
        <>
          <ToggleCharts subCategory={subCategory} />
        </>
      )}
      {dataFromChild === "Wiki\nPathways" && (
        <>
          <ToggleCharts subCategory={subCategory} currentPlot={null} />
        </>
      )}
      {dataFromChild === "Reactome" && (
        <>
          <ToggleCharts subCategory={subCategory} currentPlot={null} />
          {selectedPlotData ? <DotPlot plot={selectedPlotData} /> : <div></div>}
        </>
      )}
      {dataFromChild === "STRING" && (
        <div
          style={{
            height: "1250px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "30px",
          }}
        >
          <iframe
            src="https://version-12-0.string-db.org/cgi/globalenrichment?networkId=bBmGA3kwle9n"
            title="Embedded Page"
            width="95%"
            height="1250px"
            frameBorder="0"
            scrolling="auto"
          ></iframe>
        </div>
      )}
    </div>
  );
}
