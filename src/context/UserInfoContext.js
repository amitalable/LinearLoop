import { createContext } from "react";
import { useUserInfo } from "../hooks/useUserInfo";

const UserInfoContext = createContext({
  user: {},
  session: {},
});

const UserInfoProvider = ({ children }) => {
  const { user, session } = useUserInfo();

  const context = { user, session };

  return (
    <UserInfoContext.Provider value={context}>
      {children}
    </UserInfoContext.Provider>
  );
};

export { UserInfoContext, UserInfoProvider };
