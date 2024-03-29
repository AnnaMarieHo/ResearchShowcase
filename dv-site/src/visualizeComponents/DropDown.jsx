// Dropdown.js
import "./DropDown.css";

export default function Dropdown({
  selectedDropdown,
  onChange,
  options,
  className,
}) {
  return (
    <div style={{ margin: 30 }}>
      <select
        className={className}
        selectedDropdown={selectedDropdown}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} className="option">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
