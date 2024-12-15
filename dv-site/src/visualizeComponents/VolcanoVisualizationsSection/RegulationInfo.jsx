import React, { useState, useEffect } from "react";
// import { motion as m } from "framer-motion";
import "./DEGListDatasets.css";
import Plot from "./RegulationPlot";

const RegulationInfo = ({ barChartData, onClose, selectedDropdown }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State for expansion
  const [isAdditionalInfoExpanded, setIsAdditionalInfoExpanded] =
    useState(false); // State for additional info

  // useEffect(() => {
  //   // Disable body scrolling when the modal is visible
  //   document.body.style.overflow = "hidden";

  //   // Re-enable body scrolling when the modal is closed
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, []);

  if (!barChartData) return null;

  // Function to split text by commas
  const splitText = (text) => {
    return text.split(",");
  };

  const labels = splitText(barChartData.matchingProteinsLabels);
  const ids = splitText(barChartData.matchingProteinsIds);

  // Function to generate CSV and trigger download
  const downloadCSV = () => {
    // Create CSV content
    let csvContent = "data:text/csv;charset=utf-8,";

    // Add Protein Data Header
    csvContent += "Label,ID\n";

    // Add Protein Data Rows
    labels.forEach((label, index) => {
      csvContent += `${label},${ids[index] || ""}\n`; // Append each row
    });

    // Add a blank line for separation
    csvContent += "\n";

    // Add Additional Information Header
    csvContent +=
      "Term Description,Enrichment Score,False Discovery Rate,Term ID,Direction,Genes Mapped,Method\n";

    // Add Additional Information Row (only once)
    csvContent += `${barChartData.termDescription},${barChartData.enrichmentScore},${barChartData.falseDiscoveryRate},${barChartData.termId},${barChartData.direction},${barChartData.genesMapped},${barChartData.method}\n`;

    // Create a downloadable link
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "protein_data.csv");
    document.body.appendChild(link); // Required for Firefox

    link.click(); // Trigger the download
    document.body.removeChild(link); // Cleanup
  };

  return (
    // <div className="modal-overlay" onClick={onClose}>
    <div className="testing" onClick={onClose}>
      <div
        // initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0 }}
        // transition={{ duration: 0.3 }}
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent click event from closing modal
      >
        <button
          style={{ height: "25px", marginTop: "10px" }}
          className="threshold-submit-button"
          onClick={onClose}
        >
          Close
        </button>

        <div className="scrollable-content">
          <p
            style={{ marginBottom: "0px", padding: "20px", marginTop: "10px" }}
          >
            <h3>{barChartData.termDescription}</h3>
          </p>
          <div className="columns-container">
            <div>
              <div className="column">
                <p>
                  <strong>Enrichment Score:</strong>{" "}
                  <span className="highlight">
                    {barChartData.enrichmentScore}
                  </span>
                </p>
                <p>
                  <strong>False Discovery Rate:</strong>{" "}
                  {barChartData.falseDiscoveryRate}
                </p>
                <p>
                  <strong>Term ID:</strong>{" "}
                  <span className="highlight">{barChartData.termId}</span>
                </p>
              </div>
            </div>
            <div>
              <div className="column">
                <p>
                  <strong>Direction:</strong> {barChartData.direction}
                </p>
                <p>
                  <strong>Genes Mapped:</strong>{" "}
                  <span className="highlight">{barChartData.genesMapped}</span>
                </p>
                <p>
                  <strong>Method:</strong> {barChartData.method}
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              // marginRight: "50px",
              // marginLeft: "50px",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              transition: "0s",
            }}
          >
            <button
              style={{ height: "30px", padding: "5px" }}
              onClick={() => setIsExpanded(!isExpanded)} // Toggle expansion
              className="general-button"
            >
              Matching Genes {isExpanded ? "▲" : "▼"}
            </button>
            {isExpanded && (
              <div
                className="scrollable-content"
                style={{
                  maxWidth: "500px",
                  marginRight: "20px",
                  marginLeft: "20px",
                  maxHeight: "150px",
                  boxShadow: "0px 0px 17px -7px gray inset",
                  borderRadius: "3px",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                  transition: "0s",
                }}
              >
                <div style={{ width: "50%" }}>
                  <strong>Labels:</strong>
                  <div>
                    {labels.map((label, index) => (
                      <React.Fragment key={index}>
                        {label}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div style={{ width: "80%" }}>
                  <strong>IDs:</strong>
                  <div>
                    {ids.map((id, index) => (
                      <React.Fragment key={index}>
                        {id}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <Plot currentDropdown={selectedDropdown} labels={labels} />
            <button
              style={{
                margin: "10px",
                height: "17px",
                width: "130px",
                fontSize: "15px",
              }}
              className="general-button"
              onClick={downloadCSV} // Call download function
            >
              Download All Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegulationInfo;
