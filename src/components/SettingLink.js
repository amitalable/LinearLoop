import React from "react";

const SettingLink = ({ handle, icon, data }) => {
  return (
    <div className="link" onClick={() => handle(data)}>
      <span className="link-icon">{icon}</span>
      <span className="link-data">{data}</span>
    </div>
  );
};

export default SettingLink;
