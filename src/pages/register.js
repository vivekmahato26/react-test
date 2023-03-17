import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

import "../styles/register.scss";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import {Register} from "../redux/slice/register";

export default () => {
    const dispatch = useDispatch();
    const registerRef = useRef();
    const handleRegister = (event) => {
        event.preventDefault();
        const data = {
            email: registerRef.current.email.value,
            name: registerRef.current.name.value,
            phone: registerRef.current.phone.value,
            password: registerRef.current.password.value,
        }
        dispatch(Register(data))
    }
  return (
    <div className="registerContainer">
      <div className="flexBox">
        <div className="left">
          <p className="title">Login</p>
          <p className="desc">
            Already an account? <Link to="/login">Sign In</Link>
          </p>
          <form className="form" ref={registerRef}>
            <div>
              <label htmlFor="name">Name</label>
              <input name="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input name="email" />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input name="phone" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input name="password" type="password" />
            </div>
            <div>
              <label htmlFor="password">Confirm Password</label>
              <input name="passwordc" type="password" />
            </div>
            <button onClick={(e) => handleRegister(e)}>Register</button>
          </form>
          <p className="social">or Register With</p>
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
