import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../store/actions/authActions";

const NavBar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div style={{ width: "54.78px", height: "54.78px", margin: "0px 15px" }}>
        <abbr title="Home">
          <Link to="/">
            <img
              src="https://sode-edu.in/varnothsava20/img/eat.png"
              alt=""
              height="auto"
              width="100%"
            />
          </Link>
        </abbr>
      </div>

      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <Link to="/about">ABOUT US</Link>
        <Link to="/menu">MENU</Link>
        <Link to="/gallary">GALLARY</Link>
        <Link to="/contact">CONTACT US</Link>
        <Link to="/reservation">RESERVATION</Link>
        {/* <Link to="">ARABIC</Link> */}
     
      {user ? (
        <Link
          to="/"
          onClick={() => dispatch(signout())}
          className="btn btn-dark btn-sm"
          style={{
            width: "100px",
            height: "35px",
            marginTop: "0.7%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            fontWeight:"bold"

          }}
        >
          Signout
        </Link>
      ) : (
        <Link
          to="/signin"
          className="btn btn-dark btn-sm"
          style={{
            width: "100px",
            height: "35px",
            marginTop: "0.7%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            fontWeight:"bold"
          }}
        >
          Login
        </Link>
      )}
       </div>
    </div>
  );
};

export default NavBar;
