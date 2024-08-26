import { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({ Show: false, text: "", type: "danger" });

  const showAlert = ({ text, type = "danger" }) => {
    setAlert({
      Show: true,
      text,
      type,
    });
  };

  const hideAlert = () => {
    setAlert({
      Show: false,
      text: "",
      type: "danger",
    });
  };
  return { alert, showAlert, hideAlert };
};

export default useAlert;
