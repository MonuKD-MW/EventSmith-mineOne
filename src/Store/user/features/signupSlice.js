import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
	name: "signup",
	initialState: {
		firstName: '',
		lastName: '',
		areaCode: "+1",
		phone: '',
		password: '',
		email: '',
		phoneOTP: "",
		emailOTP: "",
	},
	reducers: {
		updateSignup: (state, actions) => {
			const { firstName, lastName, areaCode, phone, password, email, phoneOTP, emailOTP } = actions.payload;
			state.firstName = firstName;
			state.lastName = lastName;
			state.areaCode = areaCode;
			state.phone = phone;
			state.email = email;
			state.password = password;
			state.phoneOTP = phoneOTP;
			state.emailOTP = emailOTP;
		}
	}

});

export const { updateSignup } = signupSlice.actions;

export default signupSlice.reducer;