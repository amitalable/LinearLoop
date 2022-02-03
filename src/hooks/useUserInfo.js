import { useEffect, useState } from "react";
import * as CmDevAPI from "../services/services";

const useUserInfo = () => {
  const [user, setUser] = useState({});
  const [session, setSession] = useState({});

  const setData = (response) => {
    setUser(response.user);
    setSession(response.session);
  };

  useEffect(() => {
    CmDevAPI.profile()
      .then((data) => setData(data.data))
      .catch((err) => console.error(err));
  }, []);

  return { user, session };
};

export { useUserInfo };
