import './socialMediaHandles.css';

import React from "react";
import SelectInput from "../common/SelectInput";
import TextInput from "../common/TextInput";

const SocialMediaHandles = ({ socialMedia, handleLocalStateForStep, socialMediaOptions }) => {
  const handleAddSocialHandle = () => {
    const updatedHandles = [
      ...socialMedia,
      { socialMediaHandle: "", pageLink: "" },
    ];
    handleLocalStateForStep({
      target: { name: "socialMedia", value: updatedHandles },
    });
  };

  const handleRemoveSocialHandle = (index) => {
    const updatedHandles = socialMedia.filter((_, idx) => idx !== index);
    handleLocalStateForStep({
      target: { name: "socialMedia", value: updatedHandles },
    });
  };

  const handleInputChange = (index, field, value) => {
    const updatedHandles = socialMedia.map((item, idx) =>
      idx === index ? { ...item, [field]: value } : item
    );
    handleLocalStateForStep({
      target: { name: "socialMedia", value: updatedHandles },
    });
  };

  return (
    <div className="social-media-container">
      <h3>Social Media Handles</h3>
      {socialMedia.map((item, index) => (
        <div key={index} className="social-media-row">
          <SelectInput
            label="Social Media Handles*"
            name={`socialMediaHandles-${index}`}
            value={item.socialMediaHandle}
            options={socialMediaOptions}
            onChange={(e) => handleInputChange(index, "socialMediaHandle", e.target.value)}
          />
          <TextInput
            label="Page Link*"
            name={`pageLink-${index}`}
            value={item.pageLink}
            onChange={(e) => handleInputChange(index, "pageLink", e.target.value)}
          />
          <button
            type="button"
            className="remove-handle-btn"
            onClick={() => handleRemoveSocialHandle(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="add-handle-btn"
        onClick={handleAddSocialHandle}
      >
        Add More Social Handle
      </button>
    </div>
  );
};

export default SocialMediaHandles;
