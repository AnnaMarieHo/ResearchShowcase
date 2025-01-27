// Dropdown.js
import "./DropDown.css";

export default function Dropdown({
  selectedDropdown,
  onChange,
  options,
  className,
}) {
  console.log(selectedDropdown);
  const filteredOptions = options.filter((option) => option.label !== null);

  return (
    <div style={{ margin: 30 }}>
      <select
        className={className}
        value={selectedDropdown}
        onChange={onChange}
      >
        {filteredOptions.map((option, index) => (
          <option key={index} value={option.label} className="option">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
