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
	},
	reducers: {
		updateSignup: (state, actions) => {
			const { firstName, lastName, areaCode, phone, password, email } = actions.payload;
			state.firstName = firstName;
			state.lastName = lastName;
			state.areaCode = areaCode;
			state.phone = phone;
			state.email = email;
			state.password = password;
		}
	}

});

export const { updateSignup } = signupSlice.actions;

export default signupSlice.reducer;