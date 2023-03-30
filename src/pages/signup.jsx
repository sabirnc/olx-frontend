import "../styles/signup.css";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/authContext";
const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const { dispatch } = useContext(authContext);


  // handling signup form 
  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({
        type: "signup",
        payload: { email: json.email, token: json.token },
      });
      navigate("/");
    }

    if (!response.ok) {
      setError(json.error);
    }
  }

  return (
    <div className="signup-container">
      <div className="signupParentDiv">
        <img
          width="200px"
          height="200px"
          src="../th.webp "
          alt="logo"
          style={{ objectFit: "cover" }}
        ></img>
        <form onSubmit={handleSubmit}>
          <br />
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
          {error && <p style={{ color: "red" }}>{error}</p>}
          <br />
          <br />
          <button>Signup</button>
        </form>
        <NavLink to={"/login"}>
          <span>Login</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Signup;
