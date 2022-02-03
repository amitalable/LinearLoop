import { createContext } from "react";
import { useSignUp } from "../hooks/useSignUp";

const SignUpContext = createContext({
  user: {},
  orgHasUser: {},
  setFirstName: () => {},
  setLastName: () => {},
  setEmail: () => {},
  setOrganizationName: () => {},
  setPassword: () => {},
  setCPassword: () => {},
});

const SignUpProvider = ({ children }) => {
  const {
    user,
    orgHasUser,
    setFirstName,
    setLastName,
    setEmail,
    setOrganizationName,
    setPassword,
    setCPassword,
  } = useSignUp();

  const context = {
    user,
    orgHasUser,
    setFirstName,
    setLastName,
    setEmail,
    setOrganizationName,
    setPassword,
    setCPassword,
  };

  return (
    <SignUpContext.Provider value={context}>{children}</SignUpContext.Provider>
  );
};

export { SignUpContext, SignUpProvider };
