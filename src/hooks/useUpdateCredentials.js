import { useEffect, useState } from "react";
import * as CmDevAPI from "../services/services";

const useUpdateCredentials = ({ id, data }) => {
  /* 
        props = 
       {
        "name": "string",
        "clientId": "string",
        "clientSecret": "string"
        }
  */

  const [response, setResponse] = useState({});

  const setData = (res) => {
    setResponse(res);
  };

  useEffect(() => {
    CmDevAPI.updateCredentials(id, data)
      .then((data) => setData(data.data))
      .catch((err) => console.error(err));
  }, [id, data]);

  return { response };
};

export { useUpdateCredentials };
