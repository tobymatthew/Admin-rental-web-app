import React from "react";
import Bar from "../components/Bar";
import Chart from "../data/Charts.svg"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUser, getVehicles } from "../Redux/apiCalls";
import { useStateContext } from "../contexts/ContextProvider"
function Dashboard() {
  const dispatch = useDispatch();
  const { vehicles } = useSelector((state) => state.allVehicles);
  const { products } = useSelector((state) => state.allUser);

  console.log("prod", products.length);

  const TotalVehicles = typeof vehicles === "string" ? '0' : vehicles.length;
  const TotalUser = typeof products === "string" ? '0' : products.length;
  const { setActiveMenu, setBigNav, setSmallNav, bigNav } = useStateContext();


  useEffect(() => {
    setBigNav(true);
    setActiveMenu(true);
  }, [setBigNav, setSmallNav, setActiveMenu]);

  return (

    <div className="mt-20 md:mt-10 md:px-10 ">
      <div className="bg-primary p-8 md:rounded-xl text-white">
        <h2 className="mb-2 text-2xl">Welcome to your dashboard!</h2>
        <p className="text-sm">
          View latest stats on cargenie, growth, analytics, activities and
          updates.
        </p>
      </div>

      <div className="flex flex-wrap justify-between lg:flex-nowrap mt-10">
        <div className="flex flex-wrap justify-between rounded-xl bg-white p-6 md:w-1/2 w-11/12 md:mr-4 mb-4 ml-4 md:ml-0" >
          <div className="mt-8">
            <p className="text-xs font-semibold">Total Users</p>
            <p className="mb-4  text-2xl font-semibold">{TotalUser}</p>

          </div>
          <div>
            <img src={Chart} alt="" />
          </div>
        </div>

        <div className="flex flex-wrap justify-between rounded-xl bg-white p-6 md:w-1/2 w-11/12 md:mr-4 mb-3 ml-4 md:ml-0">
          <div className="mt-8">
            <p className="text-xs font-semibold">Uploaded Vehicles</p>
            <p className="mb-4  text-2xl font-semibold">{TotalVehicles}</p>
          </div>

          <div>
            <img src={Chart} alt="" />
          </div>
        </div>
      </div>

      {/* <div className="flex flex-wrap justify-between lg:flex-nowrap mt-10">
          <div className="flex flex-wrap justify-between rounded-xl bg-white p-6 w-1/2 mr-4 md:mb-3">
            <div>
              <p className="text-xs">Total Users</p>
              <p className="mb-4  text-2xl font-semibold"> 2,643</p>
              <p className="flex text-xs">
                <span>1.10% Since yesterday</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-between rounded-xl bg-white p-6 w-1/2 mr-4 md:mb-3">
            <div>
              <p className="text-xs">Total Users</p>
              <p className="mb-4  text-2xl font-semibold"> 2,643</p>
              <p className="flex text-xs">
                <span>1.10% Since yesterday</span>
              </p>
            </div>
          </div>
        </div> */}
    </div>

  );
}

export default Dashboard;
