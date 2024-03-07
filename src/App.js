import React, { useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Dashboard,
  Settings,
  Trips,
  Users,
  Vehicles,
  UserId,
  VehicleId,
  Login,
} from "./pages";
import { Sidebar, NavBar } from "./components";
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  // const activeMenu = true;
  const { activeMenu, bigNav, smallNav } = useStateContext();
  const isUser = JSON.parse(localStorage.getItem("login"));
  return (
    <div>
      <BrowserRouter>
        {bigNav && (
          <div className="fixed sidebar md:static bg-white dark:bg-main-dark-bg navbar w-full ">
            <NavBar />
          </div>
        )}

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
            {smallNav && (
              <div className="fixed sidebar md:static bg-white dark:bg-main-dark-bg navbar w-full ">
                <NavBar />
              </div>
            )}
            <div>
              <Routes>
                <Route path="/" element={isUser ? <Dashboard /> : <Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/vehicles" element={<Vehicles />} />
                <Route path="/trips" element={<Trips />} />
                <Route path="/Settings" element={<Settings />} />
                <Route path="/user/:useId" element={<UserId />} />
                <Route path="/vehicle/:vehicleId" element={<VehicleId />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
