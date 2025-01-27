import React, { useState, useEffect } from "react";
import "./DEGListDatasets.css";
import Dropdown from "../DropDown";
import PlotlyBarChart from "../../barCharts/PlotlyJSGraph";
// import { AnimatePresence } from "framer-motion";
import RegulationInfo from "./RegulationInfo";
import Plot from "./RegulationPlot";
import {
  chartDataMapping,
  dropdownOptions,
  DEGdropdownLength,
  termsLength,
} from "./imports";

export default function ToggleCharts({ subCategory, currentPlot }) {
  const [selectedDropdown, setSelectedDropdown] = useState("-- choose --");
  const [numTerms, setNumTerms] = useState(0);
  const [selectedChartData, setSelectedChartData] = useState(null);
  const [mainCategory, setMainCategory] = useState(currentPlot);
  const [showGeneInfo, setShowGeneInfo] = useState(false);
  const [barChartData, setBarChartData] = useState(null);
  const [showDropdowns, setShowDropdowns] = useState(true);
  const [dataLength, setDataLength] = useState(0); // State to hold the length of data

  useEffect(() => {
    if (subCategory === "AllGenes") {
      setShowDropdowns(false);
      setMainCategory(currentPlot);
      setSelectedChartData(
        chartDataMapping[currentPlot]?.[subCategory] || null
      );
    } else {
      setShowDropdowns(true);
      const mainCat =
        selectedDropdown !== "-- choose --" ? selectedDropdown : currentPlot;
      setSelectedChartData(chartDataMapping[mainCat]?.[subCategory] || null);
      setMainCategory(mainCat);
    }

    const getDataLength = (selectedChartData) => {
      if (selectedChartData != null) {
        const length = selectedChartData.length;
        setDataLength(length); // Update the state with the length of the data
      }
    };
    getDataLength(selectedChartData); // Call the function
  }, [selectedDropdown, subCategory, currentPlot, selectedChartData]); // Include selectedChartData in dependency array

  const handleMainCategoryChange = (e) => {
    setSelectedDropdown(e.target.value);
  };

  const handleCloseClick = () => {
    setShowGeneInfo(false);
  };
  const handleChartClick = (eventData) => {
    const clickedPoint = eventData.points[0];
    const {
      termId,
      termDescription,
      genesMapped,
      enrichmentScore,
      direction,
      falseDiscoveryRate,
      method,
      matchingProteinsIds,
      matchingProteinsLabels,
    } = clickedPoint.customdata;

    console.log("Term ID:", termId);
    console.log("Term Description:", termDescription);
    console.log("Genes Mapped:", genesMapped);
    console.log("Enrichment Score:", enrichmentScore);
    console.log("Direction:", direction);
    console.log("False Discovery Rate:", falseDiscoveryRate);
    console.log("Method:", method);
    console.log("Matching Proteins IDs:", matchingProteinsIds);
    console.log("Matching Proteins Labels:", matchingProteinsLabels);

    setBarChartData({
      termId,
      termDescription,
      genesMapped,
      enrichmentScore,
      direction,
      falseDiscoveryRate,
      method,
      matchingProteinsIds,
      matchingProteinsLabels,
    });
    setShowGeneInfo(true);
  };
  console.log(barChartData);

  // const handleChartClick = (eventData) => {
  //   const clickedPoint = eventData.points[0];
  //   console.log(clickedPoint);
  //   setBarChartData({
  //     barLabel: clickedPoint.label,
  //     xVal: clickedPoint.x,
  //     yVal: clickedPoint.y,
  //     enrichmentScore: clickedPoint.x,
  //   });
  //   setShowGeneInfo(true);
  // };

  // const renderDropdownOptions = () => {
  //   if (dataLength < 50) {
  //     const options = [{ label: "-- choose --", value: "-- choose --" }];
  //     if (dataLength >= 10) options.push({ label: "10", value: 10 });
  //     if (dataLength >= 20) options.push({ label: "20", value: 20 });
  //     if (dataLength >= 50) options.push({ label: "50", value: 50 });
  //     options.push({ label: dataLength, value: dataLength });
  //     return options;
  //   } else {
  //     return [
  //       { label: "-- choose --", value: "-- choose --" },
  //       { label: "10", value: 10 },
  //       { label: "20", value: 20 },
  //       { label: "50", value: 50 },
  //     ];
  //   }
  // };

  return (
    <>
      {showDropdowns && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Dropdown
            className={DEGdropdownLength}
            selectedDropdown={selectedDropdown}
            onChange={handleMainCategoryChange}
            options={dropdownOptions}
          />
          <span className="tooltip">
            ?
            <span className="tooltip-text">
              Select a pairwise comparison. Then select the top number pathways
              in groups of 10, 20, or 50. If the dataset has fewer than 50
              pathways then all data will be displayed. Click a specific pathway
              for additional information
            </span>
          </span>
        </div>
      )}
      {/* <Dropdown
        className={termsLength}
        selectedDropdown={numTerms.toString()}
        onChange={(e) => setNumTerms(parseInt(e.target.value))}
        options={renderDropdownOptions()}
      /> */}
      <div className="more-testing">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {selectedChartData && (
            <>
              <PlotlyBarChart
                chart={selectedChartData}
                numTerms={numTerms}
                mainCategory={mainCategory}
                subCategory={subCategory}
                handleChartClick={handleChartClick}
              />
            </>
          )}
        </div>
        {showGeneInfo && (
          // <AnimatePresence>
          <RegulationInfo
            barChartData={barChartData}
            onClose={handleCloseClick}
            selectedDropdown={selectedDropdown}
          />
          // </AnimatePresence>
        )}
      </div>
    </>
  );
}
