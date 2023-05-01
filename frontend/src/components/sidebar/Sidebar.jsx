import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../images/analog-clock.png'
import './Sidebar.css'
import {MenubarData} from '../../data/Data';
import {FaSignOutAlt} from 'react-icons/fa'

export default function Sidebar() {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }

  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        {/* <UilBars /> */}
      </div>
    <div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          P<span>S</span>-TA
        </span>
      </div>

      <div className="menu">
        {MenubarData.map((item, index) => {
          return (
            <Link to={item.link}
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </Link>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem">
          <FaSignOutAlt /> Logout
        </div>
      </div>
    </div>
    </>
  );
};
