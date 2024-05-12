import "./ContactSection.css";
import LeftContent from "./contactSectionComponents/LeftContent";
import ContactForm from "./contactSectionComponents/ContactForm";
import PhoneIcon from "./contactSectionComponents/phone-icon.png";
import EmailIcon from "./contactSectionComponents/mail-icon.png";
import LocationIcon from "./contactSectionComponents/location-icon.png";

export default function ContactSection() {
  return (
    <div className="">
      <div className="form-container">
        <div className="contact-title">
          <p style={{ fontSize: 27 }}>CONTACT</p>
        </div>
        <div className="form-inner-container">
          {/* <div className="form-content"> */}
          {/* <div className="form-wrapper"> */}
          <div className="left-content">
            <LeftContent content={"1(859)-562-0333"} icon={PhoneIcon} />
            <LeftContent content={"justin.miller@uky.edu"} icon={EmailIcon} />
            <LeftContent
              content={"University of Kentucky"}
              icon={LocationIcon}
            />
          </div>

          {/* <div className="right-content">
                <ContactForm />
              </div> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
