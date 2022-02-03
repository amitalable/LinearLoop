import { useEffect, useState } from "react";
import * as CmDevAPI from "../services/services";

const useChangePassword = (props) => {
  /* 
        props = 
        {
            "oldPassword": "stringst",
            "newPassword": "stringst",
            "confirmPassword": "stringst"
        }
    */

  const [success, setSuccess] = useState(false);

  const setData = (response) => {
    setSuccess(response.success);
  };

  useEffect(() => {
    CmDevAPI.profile({ ...props })
      .then((data) => setData(data.data))
      .catch((err) => console.error(err));
  }, [props]);

  return { success };
};

export { useChangePassword };
