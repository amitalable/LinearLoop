import React, { useState } from "react";
import SettingLink from "../components/SettingLink";
import { BsPerson } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/ai";
import { FiServer } from "react-icons/fi";
import MyProfile from "../components/MyProfile";
import ChangePassword from "../components/ChangePassword";
import Credentials from "../components/Credentials";
import Sessions from "../components/Sessions";
import LeftNavigation from "../components/LeftNavigation";

const Settings = () => {
  const links = [
    { data: "My Profile", icon: <BsPerson /> },
    { data: "Change Password", icon: <BiLockAlt /> },
    { data: "Marketo Credentials", icon: <AiOutlineAppstore /> },
    { data: "Sessions", icon: <FiServer /> },
  ];

  const [check, setCheck] = useState({
    "My Profile": true,
    "Change Password": false,
    "Marketo Credentials": false,
    Sessions: false,
  });

  const handleCheck = (data) => {
    const newCheck = {
      "My Profile": false,
      "Change Password": false,
      "Marketo Credentials": false,
      Sessions: false,
    };
    newCheck[data] = true;
    setCheck({ ...newCheck });
  };

  return (
    <>
      <LeftNavigation />
      <div className="settings">
        <div className="setting-list">
          {links.map((link) => (
            <SettingLink key={link.data} handle={handleCheck} {...link} />
          ))}
        </div>
        {check["My Profile"] && <MyProfile />}
        {check["Change Password"] && <ChangePassword />}
        {check["Marketo Credentials"] && <Credentials />}
        {check["Sessions"] && <Sessions />}
      </div>
    </>
  );
};

export default Settings;
