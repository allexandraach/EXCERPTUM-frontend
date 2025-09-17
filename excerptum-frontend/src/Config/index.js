let url = import.meta.env.VITE_REACT_APP_LOCAL_URL;

if (import.meta.env.VITE_REACT_APP_ENV === 'development') {
  url = import.meta.env.VITE_REACT_APP_DEV_URL;
}

if (import.meta.env.VITE_REACT_APP_ENV === 'production') {
  url = import.meta.env.VITE_REACT_APP_PROD_URL;
}

const object = {
  apiUrl: url
};

export default object;

