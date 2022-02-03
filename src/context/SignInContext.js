import { createContext } from "react";
import { useLogin } from "../hooks/useLogin";

const SignInContext = createContext({
  token: "",
  setEmail: () => {},
  setPassword: () => {},
});

const SignInProvider = ({ children }) => {
  const { token, setEmail, setPassword } = useLogin();

  const context = {
    token,
    setEmail,
    setPassword,
  };
  return (
    <SignInContext.Provider value={context}>{children}</SignInContext.Provider>
  );
};

export { SignInContext, SignInProvider };
