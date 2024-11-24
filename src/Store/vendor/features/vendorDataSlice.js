import { createSlice } from '@reduxjs/toolkit';
const vendorDataSlice = createSlice({
	name: "vendorData",
	initialState: {
		firstName: "John", // from contactInfo
		lastName: "Doe",   // from contactInfo
		email: "some-email2@gmail.com", // from contactInfo
		password: "", // Not provided in the response
		areaCode: "+1", // from contactInfo
		phone: "001-002-0235", // from contactInfo
		country: "Canada", // from address
		city: "Toronto", // from address
		postalCode: "M12 T34", // from address
		businessLogoUrl: "s3://uploadUrl-folder-path", // from imageFolder
		businessName: "Mr. John Doe", // mapped to ownerName
		service: "", // Not explicitly provided in the response
		subCategory: [], // Not explicitly provided in the response
		streetAddress1: "123 Main St E", // from address
		streetAddress2: "", // from address
		province: "Ontario", // from address
		businessDescription: "", // Not explicitly provided in the response
		title: "Owner", // from contactInfo (title of Owner)
		socialMedia: [], // Not provided in the response
		references: [] // Not provided in the response
	},
	reducers: {
		updateVendorData: (state, action) => {
			Object.assign(state, action.payload);
		}
	}

});

export const { updateVendorData } = vendorDataSlice.actions;
export default vendorDataSlice.reducer;
