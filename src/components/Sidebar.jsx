import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "../data/static";
import { useStateContext } from '../contexts/ContextProvider';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const activeLink =
    "flex items-center gap-5 mb-5 pl-4 pt-3 pb-2.5 rounded-full bg-hov-active hov-active text-md m-2";
  const normalLink =
    "flex items-center gap-5 mb-5  pl-4 pt-3 pb-2.5 rounded-full text-md text-gray-700 dark:text-gray-200 dark:hover:text-white bg-normal-link-bg hover:bg-hov-active hover:text-black text-white  m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
        
          <div className="mt-20 md:mt-8">
            {links.map((item) =>  (
              
              <div key={item.title}>
                <NavLink
                  to={`/${item.title}`}
                  key={item.title}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {item.icon}{item.title} 
                </NavLink>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
