const SelectInput = ({ label, name, value, options = [], onChange, multiple = false }) => {
  const selectedValue = multiple ? (Array.isArray(value) ? value : []) : value;

  const handleChange = (e) => {
    if (multiple) {
      const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
      onChange({
        target: {
          name: name,
          value: selectedOptions,
        },
      });
    } else {
      onChange(e);
    }
  };

  return (
    <div className="portfolio-form-step-2-container2-left">
      {label && <label htmlFor={name}>{label}</label>}

      <div className="select-wrapper">
        <select
          name={name}
          id={name}
          onChange={handleChange}
          value={selectedValue}
          className="custom-select"
          multiple={multiple}
        >
          {options && options.length > 0 ? (
            options.map((option, index) => {
              const optionValue = option.value || option;
              const optionLabel = option.label || option.name || option;

              return (
                <option key={index} value={optionValue}>
                  {optionLabel}
                </option>
              );
            })
          ) : (
            <option value="" disabled>No options available</option>
          )}
        </select>
{/* 
        <span className="icon">
          <MdOutlineKeyboardArrowDown />
        </span> */}
      </div>
    </div>
  );
};

export default SelectInput;
