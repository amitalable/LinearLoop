import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserInfoContext } from "../context/UserInfoContext";
import LeftNavigation from "../components/LeftNavigation";
const Dashboard = () => {
  const { user, session } = useContext(UserInfoContext);
  const navigate = useNavigate();
  if (!user && !session) {
    return navigate("/signin");
  }

  return (
    <>
      <LeftNavigation />
      {user && session && <h1>{user.firstName + " " + user.lastName}</h1>}
    </>
  );
};

export default Dashboard;
