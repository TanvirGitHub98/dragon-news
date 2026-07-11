import React from 'react'
import { NavLink } from 'react-router'
import userProfileImg from '../../assets/user.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className="start-div"></div>
        <div className="middle-div">
            <nav className='text-accent flex gap-5'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </nav>
        </div>
        <div className="end-div flex items-center gap-4">
            <img src={userProfileImg} alt="" />
            <button className='btn btn-primary px-6'>Login</button>

        </div>
    </div>
  )
}

export default Navbar