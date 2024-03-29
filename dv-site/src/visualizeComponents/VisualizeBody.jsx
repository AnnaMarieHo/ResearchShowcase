import "./VisualizeBody.css";

// import DEGListDatasets from "../WebPages/visualizePage/VolcanoVisualizationsSection/DEGListDatasets";
// import VennVisualizations from "../WebPages/visualizePage/VennVisualizationsSection/VennVisualizations";
import VolcanoSection from "./VolcanoVisualizationsSection/DEGListDatasets";
import VennSection from "./VennVisualizationsSection/VennVisualizations";
import DataDescription from "./DataDescription";
import VisualizationSection from "./VolcanoVisualizationsSection/VisualizationSection";
import { motion as m } from "framer-motion";

export default function VisualizeBody() {
  return (
    <m.div
      style={{ minWidth: "500px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <VisualizationSection />
      {/* <DataDescription /> */}
      {/* <VennSection />
        <DataDescription /> */}
    </m.div>
  );
}
