import "./VisualizeHero.css";
import { motion as m } from "framer-motion";

export default function Visualize() {
  return (
    <div className="visualize-container">
      <div className="background">
        <div className="vh-container">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="visualize-header"
          >
            {/* <h1>Visualizations</h1> */}
            <h1
              style={{
                color: "white",
                maxWidth: 1000,
                minWidth: 400,
                textAlign: "center",
              }}
            >
              Explore the entire enrichment analysis or view relevant
              information to a specific pathway
            </h1>
          </m.div>
        </div>
      </div>
    </div>
  );
}
