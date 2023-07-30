import React from 'react';
import Style from './Header.module.css';
import '../../../Styles/globals.css'
import {Link , NavLink} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Header() {
  const navBarStyles =({isActive})=>{
    return{
     textDecoration: isActive ?'underline':'none',
     color:isActive ? '#A201FF':'#000000' ,
    }
  }
  return (
    <header>
      <div className={Style.logo}>
       <img src='' alt='logo' />
      </div>
      <nav>
       <NavLink style={navBarStyles} to="/">Home</NavLink>
       <NavLink style={navBarStyles} to="/services">Services</NavLink>
       <NavLink style={navBarStyles} to="/reviews">Reviews</NavLink>
      </nav>
      <div className={Style.Icons}>
        <div><SearchIcon/></div>
        <div><LanguageIcon/></div>
        <Link to='register'><AccountCircleIcon/></Link>
      </div>
    </header>
  )
}


  
    
