import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const {createUser,setUser,user}=use(AuthContext)
  const handleRegister=(e)=>{
    e.preventDefault();
    const name=e.target.name.value
    const photo=e.target.photo.value
    const email=e.target.email.value
    const password=e.target.password.value
    createUser(email,password)
    .then(userCredential=>{
      setUser(userCredential.user)
      console.log(user)

    })
    .catch(error=>{
      alert(error.message)
    })

  }

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-center p-5 font-semibold">Register your account</h2>
        <form className="card-body" onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Your Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your name"
              name='name'
            />
            {/* photo url */}
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo url" name='photo' />
            {/* Email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" name='email' />
            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" name='password' />
            <label className="label mt-4">
              <input type="checkbox" defaultChecked className="checkbox" />
              Accept term & conditions
            </label>
            <button type="submit" className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p>
            Already Have An Account ?{" "}
            <span className="text-red-500">
              <Link to="/auth/login">Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
