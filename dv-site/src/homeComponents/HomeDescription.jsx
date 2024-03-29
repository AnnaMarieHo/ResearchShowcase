import "./HomeDescription.css";
import { motion as m } from "framer-motion";
function Plot2() {
  return (
    <div className="black-background">
      <div className="p2-container">
        <div className="p2-box">
          <h1 className="p2-large-font">What it's About</h1>
          <h3 className="p2-small-font">
            <ul>
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
              >
                The role of eIF5A hypusination must be considered in the context
                of the cell-type specificity as well as the underlying
                physiological and/or pathological processes. Our strategy
                exploits the hypusine loop moiety with seemingly profound impact
                on TDP-43 pathology. Regarding TDP-43 pathology our findings
                suggest that eIF5A hypusination pathway orchestrates a
                multifaceted response; eIF5AHyp in worsen TDP-43 accumulation,
                and Induced eIF5AHyp caused deficits in mitochondrial TCA cycle
                and ATP production, leading to reduced neurometabolic profile.
              </m.div>
            </ul>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Plot2;
