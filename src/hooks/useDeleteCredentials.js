import { useEffect, useState } from "react";
import * as CmDevAPI from "../services/services";

const useDeleteCredentials = (id) => {
  const [response, setResponse] = useState("");

  const setData = (res) => {
    setResponse(res);
  };

  useEffect(() => {
    CmDevAPI.deleteCredentials(id)
      .then((data) => setData(data.data))
      .catch((err) => console.error(err));
  }, [id]);

  return { response };
};

export { useDeleteCredentials };
