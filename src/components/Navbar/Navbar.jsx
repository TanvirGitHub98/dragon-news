import React, { use } from 'react'
import { Link, NavLink } from 'react-router'
import userProfileImg from '../../assets/user.png'
import { AuthContext } from '../../AuthProvider/AuthProvider'

const Navbar = () => {
    const {user,logOut}=use(AuthContext)
    const handleLogout=()=>{
        logOut()
        .then(()=>{
            alert("User Logout Successfully!!!")
        })
        .catch((error)=>{
            alert(error.message)
        })

    }
  return (
    <div className='flex justify-between items-center'>
        <div className="start-div">
            {user && user.email }
        </div>
        <div className="middle-div">
            <nav className='text-accent flex gap-5'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </nav>
        </div>
        <div className="end-div flex items-center gap-4">
            <img src={userProfileImg} alt="" />
            {
                user?(<button onClick={handleLogout} className='btn btn-primary px-6'><Link to='/'>Logout</Link></button>):(<button className='btn btn-primary px-6'><Link to='/auth/login'>Login</Link></button>)
            }

        </div>
    </div>
  )
}

export default Navbar