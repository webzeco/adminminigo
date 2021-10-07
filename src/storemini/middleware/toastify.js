const toast = (state) => (next) => (action) => {
  if (action?.type === 'error') alert('Toastify:', action?.payload?.message);
  else next(action);
};

export default toast;
