import { useState } from "react";
import "./MultiStateToggle.css";
import { Link } from "react-router-dom";

export default function MultiStateToggle({ sendDataToParent }) {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const buttonTexts = [
    "All Genes",
    "KEGG",
    "Reactome",
    "Wiki\nPathways",
    "STRING",
  ];

  const handleClick = (index) => {
    setActiveButtonIndex(index);
    sendDataToParent(buttonTexts[index]);
  };

  return (
    <div className="m-state-toggle-container">
      {buttonTexts.map((text, index) => (
        <Link
          key={index}
          className={activeButtonIndex === index ? "t-1 active" : "t-1"}
          onClick={() => handleClick(index)}
        >
          {text}
        </Link>
      ))}
      <div
        className="overlay"
        style={{
          left: `calc(${activeButtonIndex * 17}% + ${
            activeButtonIndex * 2.7
          }%)`,
        }}
      >
        {buttonTexts[activeButtonIndex]}
      </div>
    </div>
  );
}
