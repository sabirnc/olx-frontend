import "../styles/Login.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { authContext } from "../context/authContext";
import { useContext } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loader, setLoader] = useState(false);
  const [error, setError] = useState();

  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);

  const anime = {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    x: { duration: 4 },
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({
        type: "signup",
        payload: { email: json.email, token: json.token },
      });
      navigate("/");
    }
  }
  return (
    <div className="login-container">
      {loader && <motion.div className="box" animate={anime} />}
      <div className="loginParentDiv">
        <img
          width="200px"
          height="200px"
          src="../th.webp"
          style={{ objectFit: "cover", margin: "0 auto" }}
        ></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required={true}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required={true}
          />
          <span className="err">{error}</span>
          <br />
          <br />
          <button>Login</button>
        </form>
        <NavLink to={"/signup"}>
          <span style={{ margin: "10px" }}>Signup</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
