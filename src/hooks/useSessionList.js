import { useEffect, useState } from "react";
import * as CmDevAPI from "../services/services";

const useSessionList = () => {
  const [response, setResponse] = useState({});

  const setData = (res) => {
    setResponse(res);
  };

  useEffect(() => {
    CmDevAPI.getSessions()
      .then((data) => setData(data.data))
      .catch((err) => console.error(err));
  }, []);

  return { response };
};

export { useSessionList };
