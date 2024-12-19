import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// styling
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// router
import router from './router/router.jsx'
import { RouterProvider } from 'react-router-dom'

// redux
import { store } from './redux/store.js';
import { Provider } from 'react-redux';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
