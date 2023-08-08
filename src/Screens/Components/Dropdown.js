import React, { useState } from "react";

function Dropdown({ options, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.label : options[0].label}
        <div className={`dropdown-arrow ${isOpen ? "open" : ""}`}>
          <div className="arrow-block">
            <div className="arrow"> &#9650;</div>
            <div className="arrow">&#9660;</div>
          </div>
        </div>

        {isOpen ? (
          <div className="dropdown-options">
            {options.map((option, index) => (
              <div
                key={option.value + index}
                className={`dropdown-option ${
                  selectedOption === option ? "selected" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Dropdown;
