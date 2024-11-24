import { FaCheck } from 'react-icons/fa';
import InputField from '../common/InputField'; 
import { RiArrowDownSLine } from 'react-icons/ri';
import {regions} from "../staticData.json"


const PortfolioFormStep1 = ({vendorData:{firstName,lastName,email,password,phone,areaCode},handleLocalStateForStep,localStateForStep}) => {

  console.log("[localStateForStep]",localStateForStep)

  
  return (
    <div className="portfolio-form-step-1">
      <div className="portfolio-form-step-1-container1">
        <div className="portfolio-form-step-container-left">
          <InputField
            label="First Name*"
            type="text"
            id="firstName"
            name="firstName"
            value={firstName || ""}
            isDisabled={true}
          />
        </div>
        <div className="portfolio-form-step-container-right">
          <InputField
            label="Last Name*"
            type="text"
            id="lastName"
            name="lastName"
            value={lastName || ""}
            isDisabled={true}
          />
        </div>
      </div>

      <div className="portfolio-form-step-1-container2">
        <div className="portfolio-form-step-container-left">
          <InputField
            label="Email*"
            type="email"
            id="email"
            name="email"
            value={email || ""}
            isDisabled={true}
          />
        </div>
        <div className="portfolio-form-step-container-right">
          <InputField
            label="Password*"
            type="password"
            id="password"
            name="password"
            value={password || ""}
            
            isDisabled={true}
          />
        </div>
      </div>

      <div className="portfolio-form-step-1-container3">
        <div className="portfolio-form-step1-area-code portfolio-area-code">
          <label htmlFor="phoneAreaCode">Area Code*</label>
          <select
            id="phoneAreaCode"
            name="phoneAreaCode"
            value={areaCode || "+1"} // Default to "+1"
            readOnly // Prevents user modification since there's only one option
            className="phone-area-code-select"
            style={{ appearance: "none" }}
          >
            <option value="+1">+1</option>
          </select>
          <span>
            <RiArrowDownSLine />
          </span>
        </div>
        <div className="portfolio-form-step1-phone-number">
          <InputField
            label="Phone Number*"
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={phone || ""}
            isDisabled={true}

          />
          //think about phone verification later
          {/* {vendorData.phoneVerified && (
            <span className="edit-phone-area-code">
              {vendorData.phoneVerified && <FaCheck className="edit-phone-area-code-icon" />}
              {vendorData.phoneVerified ? 'Verified' : 'Unverified'}
              
              
            </span>
          )} */}










        </div>
        <div className="portfolio-form-step1-country">
          <select
            id="country"
            name="country"
            value={localStateForStep.country || ""}
            onChange={(e)=>handleLocalStateForStep(e)}
            style={{appearance:"none"}}
          >
            <option value="" disabled>
              Select Country
            </option>
            <option value="Canada">Canada</option>
            <option value="United States">United States</option>
          </select>
          <span>
            <RiArrowDownSLine />
          </span>
        </div>
      </div>

      <div className="portfolio-form-step-1-container4">
        <div className="portfolio-form-step-container-left">
          <label htmlFor="city">City*</label>
          <select
            id="city"
            name="city"
            value={localStateForStep.city || ""}
            onChange={(e) => handleLocalStateForStep(e)}
            style={{appearance:"none"}}
            
          >
            <option value="" disabled>
              Select City
            </option>
            {localStateForStep?.country === 'Canada' ? (
              <>
                <optgroup label="Provinces">
                  {regions.Canada.Provinces.map((province) => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </optgroup>
                <optgroup label="Territories">
                  {regions.Canada.Territories.map((territory) => (
                    <option key={territory} value={territory}>{territory}</option>
                  ))}
                </optgroup>
              </>
            ) : regions['United States'].Provinces.map((state)=>(
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          <span>
            <RiArrowDownSLine />
          </span>
        </div>
        <div className="portfolio-form-step-container-right">
          <InputField
            label="Postal Code*"
            type="text"
            id="postalCode"
            name="postalCode"
            value={localStateForStep.postalCode || ""}
            onChange={(e) => handleLocalStateForStep(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioFormStep1;
