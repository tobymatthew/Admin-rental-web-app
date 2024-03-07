import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css"
import { Dashboard } from "../pages";
import { useStateContext } from '../contexts/ContextProvider';
import  Sidebar  from "./Sidebar";
import  NavBar  from "./NavBar";
// import  ContextProvider from '../contexts/ContextProvider';

const Bar = ({children}) => {
  const { activeMenu } = useStateContext();
    return (
        <div>
        
          <div className="fixed sidebar md:static bg-white dark:bg-main-dark-bg navbar w-full ">
            <NavBar />
          </div>
        
          <div className="flex relative">
            {activeMenu ? (
              <div className="w-72 fixed sidebar bg-primary">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0">Sidebar</div>
            )}
  
            <div
              className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
                activeMenu ? "md:ml-72" : "flex-2"
              }`}
            >
              <div>
               {children}
              </div>
            </div>
          </div>
      
      </div>
    );
}

export default Bar;
