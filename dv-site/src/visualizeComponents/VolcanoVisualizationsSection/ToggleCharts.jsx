import React, { useState, useEffect } from "react";
import "./DEGListDatasets.css";
import Dropdown from "../DropDown";
import PlotlyBarChart from "../../barCharts/PlotlyJSGraph";
import { AnimatePresence } from "framer-motion";
import RegulationInfo from "./RegulationInfo";
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
    console.log(clickedPoint);
    setBarChartData({
      barLabel: clickedPoint.label,
      xVal: clickedPoint.x,
      yVal: clickedPoint.y,
      enrichmentScore: clickedPoint.enrichmentScore,
    });
    setShowGeneInfo(true);
  };

  const renderDropdownOptions = () => {
    if (dataLength < 50) {
      const options = [{ label: "-- choose --", value: "-- choose --" }];
      if (dataLength >= 10) options.push({ label: "10", value: 10 });
      if (dataLength >= 20) options.push({ label: "20", value: 20 });
      if (dataLength >= 50) options.push({ label: "50", value: 50 });
      options.push({ label: dataLength, value: dataLength });
      return options;
    } else {
      return [
        { label: "-- choose --", value: "-- choose --" },
        { label: "10", value: 10 },
        { label: "20", value: 20 },
        { label: "50", value: 50 },
      ];
    }
  };

  return (
    <>
      {showDropdowns && (
        <Dropdown
          className={DEGdropdownLength}
          selectedDropdown={selectedDropdown}
          onChange={handleMainCategoryChange}
          options={dropdownOptions}
        />
      )}
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Dropdown
          className={termsLength}
          selectedDropdown={numTerms.toString()}
          onChange={(e) => setNumTerms(parseInt(e.target.value))}
          options={renderDropdownOptions()}
        />
        <span className="tooltip">
          ?
          <span className="tooltip-text">
            Select the groups that you would like to view Enriched Pathways for.
            Then select the top regulations in groups of 10, 20, or 50. If the
            dataset has fewer results than these - then all data will be
            displayed
          </span>
        </span>
      </div>
      {showGeneInfo && (
        <AnimatePresence>
          <RegulationInfo
            barChartData={barChartData}
            onClose={handleCloseClick}
          />
        </AnimatePresence>
      )}
      {selectedChartData && (
        <PlotlyBarChart
          chart={selectedChartData}
          numTerms={numTerms}
          mainCategory={mainCategory}
          subCategory={subCategory}
          handleChartClick={handleChartClick}
        />
      )}
    </>
  );
}
