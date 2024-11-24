import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
//new
import vendorStore from "./Store/vendor/vendorStore"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={vendorStore}>
      <App />
    </Provider>
  </StrictMode>,
)
