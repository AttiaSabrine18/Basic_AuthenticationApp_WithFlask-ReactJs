import React , {useState} from 'react'
import ph1 from '../assets/ph1.avif'
import {Link} from 'react-router-dom'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [email , setEmail] = useState('');
    const [password , setpassword] = useState('');
    

    const logInUser = (event) => {
      event.preventDefault();
  
      if (email.length === 0) {
        alert("Email has left Blank!");
      } else if (password.length === 0) {
        alert("Password has left Blank!");
      } else {
        axios.post('http://127.0.0.1:5000/login', {
            email: email,
            password: password
        })
        .then((response) => {
            console.log(response);
            alert("login successed ! ");
        })
        .catch((error) => {
            console.log(error, 'error');
            if (error.response && error.response.status === 401) {
                alert("Invalid credentials");
            } else {
                alert("An error occurred. Please try again.");
            }
        });
      }
    };
  return (
    <div className='container h-100'>
      <div className="container-fluid h-custom">
        <h1 style={{ marginBottom: "5%" }}>Login here ..</h1>

        <div className="row align-items-center">
          <div className="col-md-4">
            <img src={ph1} alt="Your Image" className="img-fluid" />
          </div>

          <div className="col-md-8">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email"  className="form-control" id="exampleInputEmail1" name='email' value={email} onChange={(e)=> setEmail(e.target.value)} aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value={password} onChange={(e)=> setpassword(e.target.value)} id="exampleInputPassword1" />
              </div>
              <button type="submit" className="btn btn-primary" onClick={logInUser}>Submit</button>
              <p className="mt-3">Don't have an account? <Link to="/register">Register here</Link></p>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage