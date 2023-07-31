import React from 'react'
import NavCategory from './navCategory';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function NavButton() {
  let navigate=useNavigate();
  return (
    <>
    <div className="navbar__text">
    <NavCategory/>
    <Link to='/courses'>Courses</Link>
    <Link to='/' onClick={()=>{
    window.scrollTo(0, 1650);} 
  }>About us</Link>
</div>
    <div className="navbar__button">
      <Link to="/login">
       <button className='btnLogin'>
        Login
       </button></Link>
       <Link to='/register'>
       <button className='btnSignUp'>
       Sign up
       </button></Link>
    </div>
    </>
        )
      }

export default NavButton
