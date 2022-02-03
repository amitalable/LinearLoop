import { useEffect, useState } from "react";
import * as CmDevAPI from "../services/services";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const setData = (response) => {
    setToken(response.token);
  };

  useEffect(() => {
    if (email && password) {
      CmDevAPI.login({
        email: email,
        password: password,
      })
        .then((data) => setData(data.data))
        .catch((err) => console.error(err));
    }
  }, [email, password]);

  return { token, setEmail, setPassword };
};

export { useLogin };
