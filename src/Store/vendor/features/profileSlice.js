import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
	name: "profile",
	initialState: {
		portfolioId: "",
		brandLogoUrl: "",
		businessDisplayName: "",
		eventType: [],
		service: "",
		serviceSubCategories: [],
		streetAddress1: '',
		streetAddress2: '',
		province: '',
		postalCode: '',
		country: '',
		designation: '',
		portfolioDescription: "",
		socialMediaLinks: {},
		references: [],
	},
	reducers: {
		setPortfolioData: (state, action) => {
			const {
				portfolioId,
				brandLogoUrl,
				businessDisplayName,
				eventType,
				service,
				serviceSubCategories,
				streetAddress1,
				streetAddress2,
				province,
				postalCode,
				country,
				designation, // Updated from roleInCompany
				portfolioDescription,
				socialMediaLinks,
			} = action.payload;

			state.portfolioId = portfolioId;
			state.brandLogoUrl = brandLogoUrl;
			state.businessDisplayName = businessDisplayName;
			state.eventType = eventType;
			state.service = service;
			state.serviceSubCategories = serviceSubCategories;
			state.streetAddress1 = streetAddress1;
			state.streetAddress2 = streetAddress2;
			state.province = province;
			state.postalCode = postalCode;
			state.country = country;
			state.designation = designation;
			state.portfolioDescription = portfolioDescription;
			state.socialMediaLinks = socialMediaLinks;

			// state = { ...state, ...action.payload };
		}
	}
});

export const { setPortfolioData } = profileSlice.actions;
export default profileSlice.reducer;