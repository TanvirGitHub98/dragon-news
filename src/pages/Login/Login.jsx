import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const location=useLocation()
  const navigate=useNavigate();
  const {signIn,setUser}=use(AuthContext)
  const handleSignIn=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value
    signIn(email,password)
    .then((userCredential)=>{
      setUser(userCredential.user)
      alert("User Login Successfully")
      navigate(`/${location.state? location.state:'/'}`)

    })
    .catch((error)=>{
      alert(error.message)
    })


  }
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-center p-5 font-semibold">Login your account</h2>
        <form className="card-body" onSubmit={handleSignIn}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" name='email' />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" name='password' />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p>Dont’t Have An Account ? <span className="text-red-500"><Link to="/auth/register">Register</Link></span></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
