// import MaterialIcon from "material-icons-react";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SideBar.css";



const SideBar = () => {
  const [activeUsers, setActiveUsers] = useState("active");
  const [activeCategories, setActiveCategories] = useState("inactive");
  const [activeCards, setActiveCards] = useState("inactive");

  useLayoutEffect(() => {
    if (window.location.pathname === "/home") {
      setActiveUsers("active");
      setActiveCategories("inactive");
      setActiveCards("inactive");
    } else if (window.location.pathname === "/stats") {
      setActiveUsers("inactive");
      setActiveCategories("active");
      setActiveCards("inactive");
    } else if (window.location.pathname === "/access") {
      setActiveUsers("inactive");
      setActiveCategories("inactive");
      setActiveCards("active");
    }
  }, [window.location.pathname]);

  return (
    <>
      <div className="sidebar">
        
        <div className="sidebar-menu">
          <Link
            to={"/user"}
            onClick={() => {
              setActiveUsers("active");
              setActiveCategories("inactive");
              setActiveCards("inactive");
              //   console.log(active);
            }}
          >
            <div
              className={`sidebar-menu-item
            ${activeUsers}
            `}
            >
              {/* <div className="sidebar-menu-item-icon">
                <MaterialIcon icon="home" size={"large"} color="#ffffff" />
              </div> */}
              <div
                className={`sidebar-menu-item-text ${activeCategories}
            `}
              >
                Home
              </div>
            </div>
          </Link>

          {/* <Link
            to={"/stats"}
            onClick={() => {
              setActiveHome("inactive");
              setActiveStats("active");
              setActiveAccess("inactive");
            }}
          >
            <div className={`sidebar-menu-item ${activeStats}`}>
              <div className="sidebar-menu-item-icon">
                <MaterialIcon icon="bar_chart" size={"large"} color="#ffffff" />
              </div>
              <div
                className={`
                sidebar-menu-item-text ${activeStats}
              `}
              >
                Stats
              </div>
            </div>
          </Link>

          <Link
            to={"access"}
            onClick={() => {
              setActiveHome("inactive");
              setActiveStats("inactive");
              setActiveAccess("active");
              //   console.log(active);
            }}
          >
            <div className={`sidebar-menu-item ${activeAccess}`}>
              <div className="sidebar-menu-item-icon">
                <MaterialIcon
                  icon="accessibility"
                  size={"large"}
                  color="#ffffff"
                />
              </div>
              <div
                className={`
                sidebar-menu-item-text ${activeAccess}
              `}
              > */}
                Accessibility
              </div>
            </div>
          {/* </Link>
        </div>
      </div> */}
    </>
  );
};

export default SideBar;