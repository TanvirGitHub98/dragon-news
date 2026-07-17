import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-center p-5 font-semibold">Register your account</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Your Name</label>
            <input
              type="email"
              className="input"
              placeholder="Enter your name"
            />
            {/* photo url */}
            <label className="label">Photo URL</label>
            <input type="email" className="input" placeholder="Photo url" />
            {/* Email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <label className="label mt-4">
              <input type="checkbox" defaultChecked className="checkbox" />
              Accept term & conditions
            </label>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p>
            Already Have An Account ?{" "}
            <span className="text-red-500">
              <Link to="/auth/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
