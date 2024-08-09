import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ButtonToast = () => {
  const notify = () => {
    toast.success("Bu bir başarı mesajıdır!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      closeButton: (
        <button onClick={closeToast}>Kapat</button>
      )
    });
  };

  const closeToast = () => {
    toast.dismiss();
  };

  return (
    <div>
      <button onClick={notify}>Bildirimi Göster</button>
      <ToastContainer />
    </div>
  );
};

export default ButtonToast;
