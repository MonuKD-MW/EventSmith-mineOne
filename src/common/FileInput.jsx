import { RiPencilLine } from 'react-icons/ri';

const FileInput = ({ label, name, onChange }) => {
  const triggerFileSelect = () => {
    document.getElementById(name).click(); 
  };

  return (
    <div className="portfolio-form-step-2-container1-left">
      <label htmlFor={name}>{label}</label>
      <input
        type="file"
        name={name}
        id={name}
        style={{ display: "none" }}
        onChange={onChange}
      />
      <span onClick={triggerFileSelect} className="file-input-icon">
        <RiPencilLine />
      </span>
    </div>
  );
};

export default FileInput;





// SelectInput.js
// import { MdOutlineKeyboardArrowDown } from 'react-icons/md';