import "./HomeLearnMore.css";
import ExpandingButton from "./ExpandingButton";
import groupImage from "./multiple-users-silhouette.png";
import sLab from "./lab.png";
import mLab from "./computer-science.png";
import infoImg from "./google-docs.png";

function Plot3() {
  const cobreInfo =
    "Learn about  CNS-MET Cobre, the group that funded the research of this project.";
  const selenicaLabInfo =
    "Discover the team that made this project possible and explore their research";
  const millerLabInfo =
    "This website was done in collaboration with the Miller Lab. Learn more about their team ";
  const projectInfo =
    " Uncover the profound impact that hypusine loop moiety has on TDP-43 pathology.";
  return (
    <div className="p3-background">
      <div className="p3-container">
        <div className="p3-box">
          <div className="p3-large-font">Learn More</div>
          <div className="buttons-container">
            <div className="buttons-subcontainer">
              <ExpandingButton
                tab="About"
                info={projectInfo}
                image={infoImg}
                link="/about"
              />
              <ExpandingButton
                tab="CNS-Met Cobre"
                info={cobreInfo}
                image={groupImage}
                link="https://medicine.uky.edu/centers/scobirc/cns-met-metabolomics-core"
              />
            </div>
            <div className="buttons-subcontainer">
              <ExpandingButton
                tab="Selenica Lab"
                info={selenicaLabInfo}
                image={sLab}
                link="http://selenicalab.createuky.net/"
              />
              <ExpandingButton
                tab="Miller Lab"
                info={millerLabInfo}
                image={mLab}
                link="https://millerlab.createuky.net/our-research/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plot3;
