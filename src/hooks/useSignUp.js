import { useEffect, useState } from "react";
import * as CmDevAPI from "../services/services";

const useSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [user, setUser] = useState({});
  const [orgHasUser, setOrgHasUser] = useState({});

  const setData = (response) => {
    setUser(response.user);
    setOrgHasUser(response.orgHasUser);
  };

  useEffect(() => {
    if (
      firstName &&
      lastName &&
      email &&
      organizationName &&
      password &&
      cPassword
    ) {
      CmDevAPI.signUp({
        firstName,
        lastName,
        email,
        organizationName,
        password,
        cPassword,
      })
        .then((data) => setData(data.data))
        .catch((err) => console.error(err));
    }
  }, [firstName, lastName, email, organizationName, password, cPassword]);

  return {
    user,
    orgHasUser,
    setFirstName,
    setLastName,
    setEmail,
    setOrganizationName,
    setPassword,
    setCPassword,
  };
};

export { useSignUp };
