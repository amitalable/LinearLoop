import React from "react";
import SettingLink from "../components/SettingLink";
import { BsPerson } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/ai";
import { FiServer } from "react-icons/fi";
import MyProfile from "../components/MyProfile";
import ChangePassword from "../components/ChangePassword";
import Credentials from "../components/Credentials";
import Sessions from "../components/Sessions";

const Settings = () => {
  const links = [
    { data: "My Profile", icon: <BsPerson /> },
    { data: "Change Password", icon: <BiLockAlt /> },
    { data: "Marketo Credentials", icon: <AiOutlineAppstore /> },
    { data: "Sessions", icon: <FiServer /> },
  ];
  return (
    <div className="settings">
      <div className="setting-list">
        {links.map((link) => (
          <SettingLink key={link.data} {...link} />
        ))}
      </div>
      {/* <MyProfile /> */}
      {/* <ChangePassword /> */}
      {/* <Credentials /> */}
      <Sessions />
    </div>
  );
};

export default Settings;
