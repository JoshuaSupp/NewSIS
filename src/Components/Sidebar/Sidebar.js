import React, { useState } from 'react'
import {
    FaTh,
    FaBars,
    FaUser,
    FaRegistered,
    FaTable,
    FaTablet,
    FaLock,
    FaFile, 
    FaFileAlt,
    FaUserAstronaut,
    FaAd,
    FaAdn,
    FaKaaba,
    FaKorvue,
    FaPalfed,
    FaPager,
    FaPatreon,
    FaPalette,
    FaPrint,
    FaPenAlt,
    FaUserAlt,
    FaUserCircle,
    FaRegUserCircle,
    FaUserClock,
    FaKaggle,
    FaAdjust,
    FaAmazon,
    FaAlgolia,
    FaAndroid,
    FaAngry,
    FaApper,
    FaAt,
    FaAtom,
    FaAviato,
    FaPaste,
    FaPodcast,
    FaPray,
    FaPallet,
    FaProductHunt,
    FaAppStore,
    FaKickstarterK,
    FaPinterestP
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem = [
        {
            path:'/Dashboard',
            name: "Dashboard",
            icon: <FaTh/>
        },
        {
          path:'/Admin',
          name: "Admin",
          icon: <FaUser/>
      },
      {
        path:'/KXRegistry',
        name: "KX Registry",
        icon: <FaKorvue/>
    },
    {
      path:'/ANRegistry',
      name: "AN Registry",
      icon: <FaAdn/>
  },

  {
    path:'/PDRegistry',
    name: "PD Registry",
    icon: <FaPinterestP/>
},
{
  path:'/StudentReports',
  name: "Student Reports",
  icon: <FaFileAlt/>
},
{
  path:'/KXAccounts',
  name: "KX Student Accounts",
  icon: <FaKickstarterK/>
},
{
  path:'/ANAccounts',
  name: "AN Student Accounts",
  icon: <FaAppStore/>
},
{
  path:'/PDAccounts',
  name: "PD Student Accounts",
  icon: <FaProductHunt/>
},
{
  path:'/',
  name: "Log Out",
  icon: <FaLock/>
},

    ]
        
    
  return (
   
    <div className='container'>
            <div style={{width: isOpen ? "180px" : "50px"}} className='sidebar'>
              <div className='topsection'>
               <img alt='logo' src="/images/smallmeu.png" style={{display: isOpen ? "block" : "none", width:"30px" ,height:"30px"}}/>
                <div style={{marginLeft: isOpen ? "50px" : "0px"}} className='bars'>
                    <FaBars onClick={toggle}/>
                </div>
              </div>
              {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className='link' activeclassName='active'>
                        <div className='icon'>{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
                    </NavLink>
                ))
              }
            </div> 
            <main>{children}</main>
    </div>
    
  )
}

export default Sidebar