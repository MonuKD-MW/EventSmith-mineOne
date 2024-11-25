import "./Portfolio.css";
import { countryCodes, regions, ServiceData } from "../staticData.json";
import PortfolioFormStep1 from "./PortfolioFormStep1";
import PortfolioFormStep2 from "./PortfolioFormStep2";
import PortfolioFormStep3 from "./PortFolioFormStep3";
import Pagination from "../common/Pagination";
import usePortFolio from "../utils/CustomHooks/usePortfolio";

function Portfolio() {
  const {
    vendorData,
    step,
    setStep,
    stepNames,
    phoneVerified,
    getStepClass,
    handleChange,
    handleSubmit,
    handleNext,
    handleFileChange,
    handleServiceChange,
    serviceOptions,
    subCategoryOptions,
    imagePreview,
    //here is satudays-code
    handleSubCategoryChange,
    handleLocalStateForStep,
    localStateForStep,
    setLocalStateForStep,
  } = usePortFolio();

  return (
    <div className="portfolio-container">
      {/* Step Titles and Pagination */}
      <Pagination
        stepNames={stepNames}
      currentStep={step}
        getStepClass={getStepClass}
      />

      {/* Portfolio form step 1 */}
      {step === 1 && (
        <PortfolioFormStep1
          vendorData={vendorData}
          handleChange={handleChange}
          countryCodes={countryCodes}
          regions={regions}
          phoneVerified={phoneVerified}
          handleLocalStateForStep={handleLocalStateForStep}
          localStateForStep={localStateForStep}
        />
      )}

      {/* Portfolio form step 2 */}
      {step === 2 && (
        <PortfolioFormStep2
        vendorData={vendorData}
        imagePreview={imagePreview}
        handleFileChange={handleFileChange}
        serviceOptions={serviceOptions}
        handleServiceChange={handleServiceChange}
        subCategoryOptions={subCategoryOptions}
        handleSubCategoryChange={handleSubCategoryChange}
        handleChange={handleChange}
        countryCodes={countryCodes}
        regions={regions}
        ServiceData={ServiceData}
        multiple={true}
        handleLocalStateForStep={handleLocalStateForStep}
        localStateForStep={localStateForStep}
        />
      )}
      {step === 3 && (
        <PortfolioFormStep3
        handleLocalStateForStep={handleLocalStateForStep}
        localStateForStep={localStateForStep}
        setLocalStateForStep={setLocalStateForStep}
        />
      )}

      {/* Portfolio footer */}
      <div className="button-container-portfolio">
        <button
          className={`back-button-portfolio ${step !== 1 ? "active" : ""}`}
          onClick={() => setStep(step - 1)}
          disabled={step === 1}
        >
          Back
        </button>
        <button
          className={
            step === 2 ? "portfolio-submit-button" : "portfolio-next-button"
          }
          onClick={step === 2 ? handleNext: handleNext}
          disabled={step === 2 ? !vendorData.firstName || !vendorData.lastName : false} // Disable Next until form is valid (example validation)
        >
          {/* {step === 2 ? "Create Account" : `Next`} */}
          {step === 2 ? "Next" : `Next`}
        </button>
      </div>  

      <div className="signup-footer-portfolio">
        <div className="signup-footer-text-portfolio">
          Already A Member?{" "}
          <span className="signup-footer-text-login-portfolio">Login</span>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
