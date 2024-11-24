import './socialMediaHandles.css';

import { useDispatch } from "react-redux";
import FileInput from "../common/FileInput";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import SocialMediaHandles from "./SocialMediaHandles"; // Import SocialMediaHandles Component
import { socialMedia as socialMediaOptions } from "../staticData.json"; // Import options

const PortfolioFormStep2 = ({
  localStateForStep: {
    businessName,
    service,
    subCategory,
    businessDescription,
    title,
    streetAddress1,
    streetAddress2,
    province,
    postalCode,
    country,
    socialMedia, // Ensure socialMedia is passed in the localStateForStep object
  },
  imagePreview,
  handleFileChange,
  serviceOptions,
  countryCodes,
  regions,
  ServiceData,
  multiple,
  handleLocalStateForStep,
}) => {
  const dispatch = useDispatch();

  const getSubCategories = (service) => {
    const categories = service ? ServiceData[service] : {};
    return categories
      ? Object.keys(categories).map((key) => ({
          value: key,
          label: key,
        }))
      : [];
  };

  return (
    <div className="portfolio-form-step-2">
      <div className="portfolio-form-step-2-container1">
        <FileInput
          label="Business Logo"
          name="businessLogoUrl"
          onChange={(e) => handleLocalStateForStep(e)}
        >
          {imagePreview ? (
            <img src={imagePreview} alt="Business Logo Preview" />
          ) : (
            <div className="placeholder">Upload Logo</div>
          )}
        </FileInput>
        <TextInput
          label="Business Name*"
          value={businessName || ""}
          name="businessName"
          onChange={(e) => handleLocalStateForStep(e)}
        />
      </div>

      <div className="portfolio-form-step-2-container2">
        <SelectInput
          label="Service*"
          name="service"
          value={service || ""}
          options={serviceOptions}
          onChange={(e) => handleLocalStateForStep(e)}
        />
        <SelectInput
          label="Sub-category*"
          name="subCategory"
          value={subCategory || ""}
          options={getSubCategories(service)}
          onChange={(e) => handleLocalStateForStep(e)}
          multiple={multiple}
        />
      </div>

      <div className="portfolio-form-step-2-container3">
        <TextInput
          label="Street Address 1*"
          value={streetAddress1 || ""}
          name="streetAddress1"
          onChange={(e) => handleLocalStateForStep(e)}
        />
        <TextInput
          label="Street Address 2"
          value={streetAddress2 || ""}
          name="streetAddress2"
          onChange={(e) => handleLocalStateForStep(e)}
        />
      </div>

      <div className="portfolio-form-step-2-container4">
        <SelectInput
          label="Province*"
          name="province"
          value={province || ""}
          options={regions[country]?.Provinces || []}
          onChange={(e) => handleLocalStateForStep(e)}
          disabled={!country}
        />
        <TextInput
          label="Postal Code*"
          value={postalCode || ""}
          name="postalCode"
          onChange={(e) => handleLocalStateForStep(e)}
        />
      </div>

      <div className="portfolio-form-step-2-container5">
        <SelectInput
          label="Country*"
          name="country"
          value={country || ""}
          options={countryCodes}
          onChange={(e) => handleLocalStateForStep(e)}
        />
        <SelectInput
          label="What is your role in the company*"
          name="title"
          value={title || ""}
          options={["owner", "manager", "other"]}
          onChange={(e) => handleLocalStateForStep(e)}
        />
      </div>

      <div className="portfolio-form-step-2-container6">
        <div className="portfolio-form-step-2-container6-left">
          <label htmlFor="BusinessDescription">Business Description*</label>
          <textarea
            name="businessDescription"
            id="BusinessDescription"
            value={businessDescription || ""}
            onChange={(e) => handleLocalStateForStep(e)}
            rows={4}
          ></textarea>
        </div>
      </div>

      {/* Social Media Handles Section */}
      <SocialMediaHandles
        socialMedia={socialMedia} // Pass the existing socialMedia state
        handleLocalStateForStep={handleLocalStateForStep} // Pass state handler
        socialMediaOptions={socialMediaOptions} // Pass options
      />
    </div>
  );
};

export default PortfolioFormStep2;

