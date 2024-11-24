import { FaEye, FaEyeSlash } from "react-icons/fa";
import './InputField.css'
// import { isDraft } from '@reduxjs/toolkit';

const InputField = ({ label, type, name, value, onChange, required, readOnly, passwordToggle, setPasswordToggle ,isDisabled}) => {
    const isPassword = label.toLowerCase() === 'password';

    return (
        <div className="common-input-field">
            <label htmlFor={name}>{label}{required && '*'}</label>
            <div className="common-input-wrapper">
                <input
                    type={isPassword ? (passwordToggle ? "text" : "password") : type}
                    name={name}
                    id={name}
                    onChange={onChange}
                    value={value}
                    required={required}
                    readOnly={readOnly}
                    disabled={isDisabled}
                />
                {isPassword && (
                    <span className="common-password-icon" onClick={() => setPasswordToggle(!passwordToggle)}>
                        {passwordToggle ? <FaEyeSlash /> : <FaEye />}
                    </span>
                )}
            </div>
        </div>
    );
};

export default InputField;