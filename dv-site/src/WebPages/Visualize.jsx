import VisualizeHero from "../visualizeComponents/VisualizeHero";
import VisualizeBody from "../visualizeComponents/VisualizeBody";
import { motion as m } from "framer-motion";
import VisualizeSection from "../visualizeComponents/VolcanoVisualizationsSection/VisualizationSection";

export default function Visualize() {
  return (
    <div style={{ minWidth: "500px" }}>
      <VisualizeHero />
      <VisualizeSection />
    </div>
  );
}
