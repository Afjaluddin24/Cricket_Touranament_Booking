// toastify.jsx
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Toastify Container (use once in your App.jsx)
export const ToastifyContainer = () => (
  <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
  />
);

// Toast functions with Font Awesome icons
export const showSuccess = (message) =>
  toast.success(message, {
    icon: <i class="fa-solid fa-circle-check"></i>,
  });

export const showError = (message) =>
  toast.error(message, {
    icon: <i class="fa-solid fa-circle-exclamation"></i>,
  });

export const showInfo = (message) =>
  toast.info(message, {
    icon: <i class="fa-solid fa-circle-info"></i>,
  });

export const showWarning = (message) =>
  toast.warn(message, {
    icon: <i class="fa-solid fa-triangle-exclamation"></i>,
  });


  // npm i react-toastify
