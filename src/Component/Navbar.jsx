import "../styles/nav.css";
import { FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as MySvg } from "../mysvg.svg";
import { authContext } from "../context/authContext";
import { useContext } from "react";

const Nav = () => {
  const [focus, setFocus] = useState({
    input: false,
    location: false,
    languagge: false,
  });
  const navigate = useNavigate();
  const { state, dispatch } = useContext(authContext);

  function hanlefocus(event) {
    setFocus({ ...focus, [event.target.name]: true });
  }

  function handleBlur(event) {
    setFocus({ ...focus, [event.target.name]: false });
  }
  
  // handling logout function 
  function handleLogout() {
    localStorage.clear("user");
    dispatch({ type: "logout" });
    navigate("/");
  }

  return (
    <nav>
      <div className="nav">
        <NavLink to={"/"}>
          <img src="../th.webp" alt="logo" />
        </NavLink>
        <div className="container">
          <select
            className="location"
            name="location"
            onFocus={hanlefocus}
            onBlur={handleBlur}
            style={{ borderColor: focus.location ? "lightblue" : "#002f34" }}
          >
            <option value="India" className="option">
              India
            </option>
          </select>
          <div className="search-container">
            <input
              type="text"
              className="search"
              placeholder="Find Moblies ,Cars and Many More"
              name="input"
              onFocus={(event) => hanlefocus(event)}
              style={{ borderColor: focus.input ? "lightblue" : "#002f34" }}
              onBlur={(event) => handleBlur(event)}
            />
            <div className="search-icon">
              <FaSearch />
            </div>
          </div>
        </div>
        <div className="btn-container">
          <select
            className="languagge"
            name="languagge"
            onFocus={hanlefocus}
            onBlur={handleBlur}
            style={{ borderColor: focus.languagge ? "lightblue" : "#002f34" }}
          >
            <option value="English">English</option>
          </select>
          {!state.email && (
            <NavLink to={"/login"}>
              <button className="login-btn">Login</button>
            </NavLink>
          )}
          {state.email && (
            <button className="login-btn" onClick={handleLogout}>
              Logout
            </button>
          )}

          <NavLink
            to={state.email ? "/create" : "/"}
            style={{ textDecoration: "none" }}
          >
            <button className="sell-btn">
              <MySvg className="svg" />
              <span className="my-text">SELL</span>
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
