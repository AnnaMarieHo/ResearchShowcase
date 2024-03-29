import "./PlotlyGraph.css";
import { motion as m } from "framer-motion";
import DHS_DOHHvsTar4_EC from "./DHS_DOHHvsTar4_EC.DEG.all";
import DHS_DOHHvsWT_EC from "./DHS_DOHHvsWT_EC.DEG.all";
import EI1 from "./EIf5A_DDvsDHS_DOHH.jsx";
import EI2 from "./EIF5A_DDvseIF5A.DEG.all.jsx";
import EI3 from "./EIF5A_DDvsK50A_DD.DEG.all.jsx";
import EI4 from "./EIF5A_DDvsTar4_EC.DEG.all.jsx";
import EI5 from "./EIF5A_DDvsWT_EC.DEG.all.jsx";
import EI6 from "./EIF5AvsTar4_EC.DEG.all.jsx";
import EI7 from "./EIF5AvsWT_EC.DEG.all.jsx";
import K50A_DDvsDHS_DOHH from "./K50A_DDvsDHS_DOHH.DEG.all";
import K50A_DDvsTar4_EC from "./K50A_DDvsTar4_EC.DEG.all";
import K50A_DDvsWT_EC from "./K50A_DDvsWT_EC.DEG.all";
import Tar4_ECvsWT_EC from "./Tar4_ECvsWT_EC.DEG.all";

export default function PlotlyGraph(props) {
  const iframeStyle = {
    width: "100%",
    height: "100%",
    minHeight: "500px",
    minWidth: "500px",
  };

  const graphsMap = {
    DHS_DOHHvsTar4_EC: <DHS_DOHHvsTar4_EC style={iframeStyle} />,
    DHS_DOHHvsWT_EC: <DHS_DOHHvsWT_EC style={iframeStyle} />,
    eIF5A_DDvsDHS_DOHH: <EI1 style={iframeStyle} />,
    eIF5A_DDvseIF5A: <EI2 style={iframeStyle} />,
    eIF5A_DDvsK50A_DD: <EI3 style={iframeStyle} />,
    eIF5A_DDvsTar4_EC: <EI4 style={iframeStyle} />,
    eIF5A_DDvsWT_EC: <EI5 style={iframeStyle} />,
    eIF5AvsTar4_EC: <EI6 style={iframeStyle} />,
    eIF5AvsWT_EC: <EI7 style={iframeStyle} />,
    K50A_DDvsDHS_DOHH: <K50A_DDvsDHS_DOHH style={iframeStyle} />,
    K50A_DDvsTar4_EC: <K50A_DDvsTar4_EC style={iframeStyle} />,
    K50A_DDvsWT_EC: <K50A_DDvsWT_EC style={iframeStyle} />,
    Tar4_ECvsWT_EC: <Tar4_ECvsWT_EC style={iframeStyle} />,
  };

  // const filePath = `graphs/${props.file}.html`;
  const dataBeingDisplayed = props.file.replace(".all", ""); // Remove ".all" from the file name

  const lastSlashIndex = dataBeingDisplayed.lastIndexOf("/");

  // Use substring to get the portion of the string after the last "/"
  const display = dataBeingDisplayed.substring(lastSlashIndex + 1);

  const key = display.replace(".DEG", ""); // Remove ".all" from the file name

  console.log(graphsMap[key]);

  return (
    <>
      <div className="plot-container">
        <div className="plot-spacing">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="plot-size"
          >
            <p
              style={{
                color: "black",
                textAlign: "center",
                marginTop: "50px",
                marginBottom: "10px",
              }}
            >
              {display}
            </p>
            {graphsMap[key]};
          </m.div>
        </div>
      </div>
    </>
  );
}

// `src/graphs/DHS_DOHHvsWT_EC/${props.file}.html`
