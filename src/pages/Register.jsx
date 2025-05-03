import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

  const {userSignUp, setUser} = use(AuthContext)
  
  const handleRegister = (e) =>{
    e.preventDefault();
    console.log("register clicked");
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    userSignUp(email, password)
      .then((result) => {
        console.log(result)
        setUser(result.user)
      }).catch((error) => {
        console.log(error);
        
      });
    
  }

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="text-2xl font-bold text-center mt-1">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">

            {/* Name */}
            <label className="label">Name</label>
            <input type="text" name="name" className="input" placeholder="Name" required/>

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input type="text"name="photoUrl" className="input" placeholder="Photo URL" required/>
            {/* email */}
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" required/>

            {/* password */}
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" required/>
            
            <button type="submit" className="btn btn-neutral mt-4">Register</button>
            <p className="font-semibold text-center mt-5">
              Already Have An Account ?{" "}
              <Link to="/auth/login" className="text-secondary">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
