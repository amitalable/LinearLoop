import React from "react";
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlinePushpin, AiOutlineForm } from "react-icons/ai";
import { RiPulseFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

const LeftNavigation = () => {
  const toggleNavBar = (classQuery, displayQuery, sidebar) => {
    let elements = [...document.getElementsByClassName(classQuery)];
    for (let i = 0; i < elements.length; i++) {
      elements[i].className = displayQuery;
    }

    document.getElementsByClassName("sidebar")[0].className = sidebar;
  };

  return (
    <div className="sidebar">
      <div className="nav_list">
        <div className="nav_link mt-2">
          <div
            className="link_icon"
            onClick={() => toggleNavBar("link_name", "link_name", "sidebar")}
          >
            <CgMenuLeft />
          </div>
          <div
            className="link_name"
            onClick={() =>
              toggleNavBar(
                "link_name",
                "link_name d-none",
                "sidebar sidebar-mini"
              )
            }
          >
            <AiOutlinePushpin />
          </div>
        </div>
        <div className="nav_link mt-4">
          <div className="link_name">Dashboard</div>
          <div className="link_icon">
            <RiPulseFill />
          </div>
        </div>
        <div className="nav_link mt-2">
          <div className="link_name">Forms</div>
          <div className="link_icon">
            <AiOutlineForm />
          </div>
        </div>
        <div className="nav_link mt-2">
          <div className="link_name">Settings</div>
          <div className="link_icon">
            <IoSettingsOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNavigation;
