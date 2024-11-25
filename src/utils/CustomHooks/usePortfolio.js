import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateVendorData } from '../../Store/vendor/features/vendorDataSlice';
import { ServiceData } from '../../staticData.json';

const usePortFolio = () => {
	const dispatch = useDispatch();
	const vendorData = useSelector((state) => state.vendorData);
	const [step, setStep] = useState(1);
	const [imagePreview, setImagePreview] = useState(null);

	//myCode here To handle data Persistence
	console.log("[vendorData]",vendorData)
	const [localStateForStep,setLocalStateForStep] = useState({...vendorData});

	function handleLocalStateForStep(e){
		const {name, value} = e.target;
		console.log("[name,value] : ",name,Array.isArray(value),value);
		setLocalStateForStep(prevState => ({
			...prevState,
			[name]: value
		}));	
	}
	function updateVendorDataWithLocalState(){
		dispatch(updateVendorData(localStateForStep));
	}
	function handleSubCategoryChange(e) {
		// Destructure necessary properties from the event target
		const { name, value } = e.target;
		console.log("[name,value,type,selectedOptions] : ",name,Array.isArray(value));
		
	}
	//End of myCode here

	const stepNames = [
		"Personal Information",
		"Portfolio Information",
		"References",
		"Membership Package",
	];

	const phoneVerified = false;

	const getStepClass = (stepIndex) => {
		if (stepIndex < step) return "completed";
		if (stepIndex === step) return "current";
		return "upcoming";
	};


	

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log("submit");
		// You can handle actual submission logic here
	};

	const handleNext = (e) => {
		e.preventDefault();
		let valid = false;

		if (step === 1) {
			// ! validation logic
			const requiredFields = ['country', 'postalCode', 'city'];
			const emptyFields = requiredFields.filter(field => 
				!localStateForStep[field] || localStateForStep[field].trim() === ""
			);

			if (emptyFields.length > 0) {
				alert(`Please fill in the following ${emptyFields.length > 1 ? "fields" : "field"}: ${emptyFields.join(', ')}`);
				return;
			}
			// ! update vendor data
			updateVendorDataWithLocalState();
		}
		// For step 2:
		// If service type is Venues, validate that street address is provided
		// Otherwise just update vendor data
		if (step === 2) {
			const isVenueService = localStateForStep.service === "Venues";
			const hasStreetAddress = localStateForStep.streetAddress1 && localStateForStep.streetAddress1.trim() !== "";
			
			if (isVenueService && !hasStreetAddress) {
				alert("Street Address is mandatory");
				return;
			}

			updateVendorDataWithLocalState();
		}
		if(step === 3){
			// ! validation logic
			updateVendorDataWithLocalState();
		}
		if (true) {
			setStep(step + 1);
		}
	};

	const validatePostalCode = (postalCode) => {
		// Add your postal code validation logic here
		return !!postalCode;
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const fileType = file.type.split('/')[0];
			const fileSize = file.size / 1024 / 1024;

			if (fileType !== 'image') {
				alert("Please upload a valid image file.");
				return;
			}

			if (fileSize > 5) { // Limit to 5MB
				alert("File size should not exceed 5MB.");
				return;
			}

			setImagePreview(URL.createObjectURL(file));
			dispatch(setPortfolioData({
				...vendorData,
				businessAddress: {
					...vendorData.businessAddress,
					businessLogo: file,
				},
			}));
		}
	};

	const handleServiceChange = (e) => {
		const { name, value } = e.target;
		dispatch(setPortfolioData({
			...vendorData,
			[name]: value,
			subCategory: [], // Reset sub-categories when service changes
		}));
	};

	

	// Get the options for services (categories)
	const serviceOptions = Object.keys(ServiceData).map((key) => ({
		value: key,
		label: key,
	}));
	const subCategoryOptions = vendorData.serviceType && ServiceData[vendorData.serviceType]
		? Object.keys(ServiceData[vendorData.serviceType])
			.filter(sub => ServiceData[vendorData.serviceType][sub] !== null)  // Filter out null values
			.map((sub) => ({
				value: sub,
				label: sub,
			}))
		: []; // Fallback to an empty array if no valid subcategories

	// Debugging logs to help identify potential issues
	// console.log("Service Type:", vendorData.serviceType);
	// console.log("Service Data for Service Type:", ServiceData[vendorData.serviceType]);

	return {
		vendorData,
		step,
		setStep,
		serviceOptions,
		stepNames,
		imagePreview,
		subCategoryOptions,
		phoneVerified,
		getStepClass,
		handleSubmit,
		handleNext,
		handleFileChange,
		handleServiceChange,
		//here is satudrays code
		handleSubCategoryChange,
		handleLocalStateForStep,
		localStateForStep,
		setLocalStateForStep,
	
	};
};

export default usePortFolio;