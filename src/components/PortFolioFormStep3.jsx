import VendorReference from "./VendorReference";

export default function PortFolioFormStep3({setLocalStateForStep,localStateForStep}){
    const {references} = localStateForStep;

    //!update methods
    const handleAddReference = () => {
        setLocalStateForStep({
            ...localStateForStep,
            references: [...references, {
				"referenceBusinessName": "",
				"areaCode": "",
				"phone": "",
				"referenceWebsite": "",
				"address": "",
				"postalCode": ""
			}]
        })
    }
    const handleChange = (e,index) => {
        const {name,value} = e.target;
        const updatedReferences = structuredClone(references);
        updatedReferences[index][name] = value;
        setLocalStateForStep({
            ...localStateForStep,
            references: updatedReferences
        })
    }
	return (
        <div className="portfolio-form-step-3-container">
            <div className="references-container">
                {references.map((referenceData,index) =>
                <VendorReference
                referenceData={referenceData}
                index={index}
                handleChange={handleChange}
                />)
                }
            </div>
            <button className="add-reference-button" onClick={handleAddReference}>Add Reference</button>
        </div>

    )
}
