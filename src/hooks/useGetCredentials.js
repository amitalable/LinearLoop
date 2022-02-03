import { useEffect, useState } from "react";
import * as CmDevAPI from "../services/services";

const useGetCredentials = () => {
  const [credentialList, setCredentialList] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const setData = (res) => {
    setCredentialList(res.list);
    setCount(res.count);
    setTotal(res.total);
  };

  useEffect(() => {
    CmDevAPI.getCredentials()
      .then((data) => setData(data.data))
      .catch((err) => console.error(err));
  }, []);

  return { credentialList, count, total };
};

export { useGetCredentials };
