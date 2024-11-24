import React from 'react';

const Pagination = ({ stepNames, currentStep, getStepClass }) => {
  return (
    <div className="portfolio-title-container-pagination">
      <div className="portfolio-title-container">
        <h4 className="portfolio-title">Let&apos;s get started</h4>
        <h3 className="portfolio-title-2">Create Business Profile</h3>
      </div>
      <div className="portfolio-pagination">
        {stepNames.map((name, index) => (
          <React.Fragment key={index}>
            <div className={`pagination-step ${getStepClass(index + 1, currentStep)}`}>
              {name}
            </div>
            {/* Add a horizontal line between steps if it's not the last step */}
            {index < stepNames.length - 1 && (
              <div className="pagination-line"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
