import { useEffect, useState } from "react";
import * as CmDevAPI from "../services/services";

const useCreateCredentials = (props) => {
  /* 
        props = 
       {
        "name": "string",
        "clientId": "string",
        "clientSecret": "string"
        }
  */

  const [response, setResponse] = useState("");

  const setData = (res) => {
    setResponse(res);
  };

  useEffect(() => {
    CmDevAPI.createCredentials({ ...props })
      .then((data) => setData(data.data))
      .catch((err) => console.error(err));
  }, [props]);

  return { response };
};

export { useCreateCredentials };
