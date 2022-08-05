import React from "react";
import { NavLink } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";

const Sidebar = ({ sidebar, showSidebar, role }) => {
  return (
    <>
      <div
        className="d-flex flex-column p-3 bg-dark fixed-top"
        style={
          sidebar
            ? {
                width: "250px",
                height: "100vh",
                left: "-100%",
                transition: "850ms",
              }
            : {
                width: "250px",
                height: "100vh",
                left: "0",
                transition: "350ms",
              }
        }
      >
        <div className="text-white text-decoration-none">
          <AiIcons.AiOutlineClose
            role="button"
            style={{ width: "20px", height: "20px" }}
            onClick={showSidebar}
          />
        </div>

        <ul className="nav nav-pills flex-column mb-auto mt-3">
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link text-white d-flex justify-content-start align-items-center"
            >
              <AiIcons.AiFillHome style={{ width: "20px", height: "20px" }} />
              <span className="ms-2">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/domains"
              className="nav-link text-white d-flex justify-content-start align-items-center"
            >
              <MdIcons.MdEmojiTransportation
                style={{ width: "20px", height: "20px" }}
              />
              <span className="ms-2">Domains</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/calculator"
              className="nav-link text-white d-flex justify-content-start align-items-center"
            >
              <RiIcons.RiFootprintFill
                style={{ width: "20px", height: "20px" }}
              />
              <span className="ms-2">CO2 Calculator</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/results"
              className="nav-link text-white d-flex justify-content-start align-items-center"
            >
              <BsIcons.BsFillPieChartFill
                style={{ width: "20px", height: "20px" }}
              />
              <span className="ms-2">Results</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/simulation"
              className="nav-link text-white d-flex justify-content-start align-items-center"
            >
              <AiIcons.AiOutlineAreaChart
                style={{ width: "20px", height: "20px" }}
              />
              <span className="ms-2">Scenario Simulation</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stats"
              className="nav-link text-white d-flex justify-content-start align-items-center"
            >
              <IoIcons.IoIosStats style={{ width: "20px", height: "20px" }} />
              <span className="ms-2">Statistics</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/account"
              className="nav-link text-white d-flex justify-content-start align-items-center"
            >
              <BsIcons.BsFillPersonFill
                style={{ width: "20px", height: "20px" }}
              />
              <span className="ms-2">Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="nav-link text-white d-flex justify-content-start align-items-center"
            >
              <IoIcons.IoIosMail style={{ width: "20px", height: "20px" }} />
              <span className="ms-2">Contact</span>
            </NavLink>
          </li>
          {role === "admin" && (
            <li>
              <NavLink
                to="/users"
                className="nav-link text-white d-flex justify-content-start align-items-center"
              >
                <FaIcons.FaUsers style={{ width: "20px", height: "20px" }} />
                <span className="ms-2">Users</span>
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
