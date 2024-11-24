const TextInput = ({ label, value, name, onChange }) => {
  return (
    <div className="portfolio-form-step-2-container1-right">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};
export default TextInput;