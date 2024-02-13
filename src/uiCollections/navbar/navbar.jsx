// import React from 'react'
// import '../../media/css/main.css'
// import icon from '../../media/images/hamburger.jpg'

// const Navbar = () => {
//   return (
//     // <>
//     // <div className="navContainer">
//     //   <ul className='navLists'>
//     //     <li className='navHome' >Home</li>
//     //     <li className='navAttendance' >Attendance</li>
//     //     <li className='navPolicy' >Policy Docs</li>
//     //   </ul>
//     // </div>
//     // </>
//     <div className="navbarContainer">
//       <img src= {icon} alt="" className='navIcon' />
//       <ul className='navLists'>
//         <li className='listHome' >Home</li>
//         <li className='listAttendance' >Attendance</li>
//         <li className='listPolicy' >Policy Docs</li>
//       </ul>
//     </div>
//   )
// }

// export default Navbar  

import React, { useState } from 'react';
import '../../media/css/main.css';
import icon from '../../media/images/hamburger.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const redirect = useNavigate();
  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handlePolicy = async (e) => {
      e.preventDefault();
      const response = await axios.get('http://localhost:8000/user/getPolicyDoc')
      // console.log(response.data.policyArray);
      redirect('/policy', {state : {props : response.data.policyArray}})
  }

  const handleHome = () => {
    redirect('/home')
  }

  const handleAttendance = () => {
    
  }

  return (
    <div className={`navbarContainer ${showNavbar ? 'show' : ''}`}>
      <img src={icon} alt="" className='navIcon' onClick={toggleNavbar} />
      <ul className='navLists'>
        <li className='listHome' onClick={handleHome} >Home</li>
        <li className='listAttendance' onClick={handleAttendance} >Attendance</li>
        <li className='listPolicy' onClick={handlePolicy} >Policy Docs</li>
      </ul>
    </div>
  );
};

export default Navbar;
