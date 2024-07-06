import React, { useState } from "react";
import ph2 from "../assets/ph2.avif";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const RegistrePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
   const registerUser = (event) => {
    event.preventDefault();

    axios.post("http://127.0.0.1:5000/signup", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        navigate('/login')
      })
      .catch((error) => {
        console.log(error, "error");
        if (error.response && error.response.status === 409) {
          alert("Email already exists");
        } else {
          alert("An error occurred. Please try again.");
        }
      });
  };
  return (
    <div className="container h-100">
      <div className="container-fluid h-custom">
        <h1 style={{ marginBottom: "5%" }}>Registre here ..</h1>

        <div className="row align-items-center">
          <div className="col-md-4">
            <img src={ph2} alt="Your Image" className="img-fluid" />
          </div>

          <div className="col-md-8">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="exampleInputPassword1"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={registerUser}
              >
                Submit
              </button>
              <p className="mt-3">
                Don't have an account? <Link to="/login">login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrePage;
