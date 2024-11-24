import { configureStore } from '@reduxjs/toolkit';
import signupReducer from "./features/signupSlice";
import loginReducer from './features/loginSlice';

const userStore = configureStore({
	reducer: {
		signUp: signupReducer,
		logIn: loginReducer,
	}
});

export default userStore;