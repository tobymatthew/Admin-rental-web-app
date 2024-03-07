import React, { useEffect, useContext } from "react";
import { RiNotification3Line } from "react-icons/ri";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from '../contexts/ContextProvider';
import { AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import avatar from "../data/avatar.jpg";
import Logo from "../data/Logo.svg"
import LogoutIcon from '@mui/icons-material/Logout';
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const NavBar = () => {
  const navigate = useNavigate();
  const { setActiveMenu, activeMenu, setScreenSize,handleClick, screenSize,setBigNav,setSmallNav,bigNav} = useStateContext();

  const handleLogout = () => {
    localStorage.removeItem('login');
    navigate("/login");
   
  }

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 1000) {
      setActiveMenu(false);
      setBigNav(false);
      setSmallNav(true);

    } else {
      setActiveMenu(true);
      setBigNav(true);
      setSmallNav(false);
    }
  }, [screenSize, setActiveMenu,setSmallNav,setBigNav]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2  md:p-4 md:mx-6 relative">
      <div className="flex">
        { bigNav === false ?
        (
       <NavButton title="Menu" customFunc={handleActiveMenu} icon={<AiOutlineMenu />} />
        ): null
        }
       <img src={Logo} alt="" />
      </div>
      <div className="flex">

        <button onClick={()=>{handleLogout()}}><LogoutIcon/></button>
      
        {/* <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => handleClick("notification")}
          icon={<RiNotification3Line />}
        /> */}

        
      </div>
    </div>
  );
};

export default NavBar;
