import { Link, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

import "../styles/register.scss";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Login } from "../redux/slice/login";

export default () => {
    const loginRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            email: loginRef.current.email.value,
            password: loginRef.current.password.value,
        }
        dispatch(Login(data))
        navigate("/subscribe")
    }
  return (
    <div className="registerContainer">
      <div className="flexBox">
        <div className="left">
          <p className="title">Login</p>
          <p className="desc">
            Already an account? <Link to="/">Sign Up</Link>
          </p>
          <form className="form" ref={loginRef}>
            <div>
              <label htmlFor="email">Email</label>
              <input name="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input name="password" type="password" />
            </div>
            <button onClick={(e) =>handleLogin(e)}>Login</button>
          </form>
          <p className="social">or Login With</p>
          <div>
            <p>
              <FcGoogle />
              <span>Google</span>
            </p>
            <p>
              <FaFacebookF />
              <span>Facebook</span>
            </p>
          </div>
        </div>
        <div>
          <img src="https://res.cloudinary.com/cliqtick/image/upload/v1678959844/students/test_rwctqg.jpg" />
        </div>
      </div>
    </div>
  );
};
