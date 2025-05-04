import React, { use, useState } from "react";
import { Link, useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router";

const Login = () => {
  const [error, setError] = useState("")
  const {userLogin} = use( AuthContext);

  const location = useLocation()
  const navigate = useNavigate()
  // console.log(location);
  

  

  const handleLogin = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password)

    userLogin(email, password)
      .then((result) => {
        // console.log(result);
        navigate(`${location.state ? location.state : "/"}`)
        
      }).catch((err) => {
        console.log(err.code);
        setError(err.code)
        
      });

  }

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-2xl font-bold text-center mt-1">Login your account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">

            {/* email */}
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" required/>

            {/* password */}
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" required/>
            <div>
              <a className="link link-hover mb-2">Forgot password?</a>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
            <p className="font-semibold text-center mt-5">Don't Have An Account ? <Link to='/auth/register' className="text-secondary">Register</Link></p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
