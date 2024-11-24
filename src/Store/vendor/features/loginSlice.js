import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
	name: "login",
	initialState: {
		email: '',
		password: '',
		isLoggedIn: false,
	},
	reducers: {
		updateLogin: (state, actions) => {
			const { email, password, isLoggedIn } = actions.payload;
			state.email = email;
			state.password = password;
			state.isLoggedIn = isLoggedIn;
		}
	}

});

export const { updateLogin } = loginSlice.actions;

export default loginSlice.reducer;