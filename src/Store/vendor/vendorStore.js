import { configureStore } from '@reduxjs/toolkit';
import signupReducer from "./features/signupSlice";
import loginReducer from './features/loginSlice';
import vendorDataReducer from './features/vendorDataSlice';
const vendorStore = configureStore({
	reducer: {
		vendorData: vendorDataReducer,
		signUp: signupReducer,
		logIn: loginReducer,
	}
});

export default vendorStore;