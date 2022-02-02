import React from "react";

const SettingLink = ({ icon, data }) => {
  return (
    <div className="link">
      <span className="link-icon">{icon}</span>
      <span className="link-data">{data}</span>
    </div>
  );
};

export default SettingLink;
