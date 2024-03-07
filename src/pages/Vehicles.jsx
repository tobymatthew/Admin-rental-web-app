import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Search,
  Toolbar
} from "@syncfusion/ej2-react-grids";

import { InfoHeader, SubInfoHeader } from "../components";
// import {UserGrid} from "../data/static"
import Bar from "../components/Bar"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProduct, getVehicles} from "../Redux/apiCalls";
import { Link } from 'react-router-dom';
const Vehicles = () => {
  const dispatch = useDispatch();
  const {vehicles} = useSelector((state) => state.allVehicles);

  

  const gridAction=(props)=>(
    <Link style={{backgroundColor:"#7BB66D"}}
    className="text-white py-1 px-2  rounded-2xl text-md"
    to={`/vehicle/${props.id}`}
    >
     {props.Action}  
    </Link>
  );
  const mock= ()=>{
  const mockDataUsers = [];
  if (typeof vehicles !=='string'){
  for (const vehicle in vehicles){
   
    mockDataUsers.push({
      id:vehicles[vehicle].d_vehicle_id,
      VehicleName:vehicles[vehicle].d_vehicle_make ,
      VehicleType:vehicles[vehicle].d_vehicle_type,
      DateUploaded:vehicles[vehicle].d_date_created,
      Status:vehicles[vehicle].d_approved_for_listing===0 ? 'Pending':'Verified',
      Action:'ViewCar',
      ActionBg:'#8BE78B'
    })
  }
}
    
     return mockDataUsers
    }
    console.log("product",vehicles);
    console.log("mock",mock())
    
  const UserGrid=[
    {
        field:"id",
        headerText:"Vehicle ID",
        width: '120',
        textAlign: 'Center',
    },

    {
        field:"VehicleName",
        headerText:"Vehicle Name",
        width: '120',
        textAlign: 'Center',
    },
    {
        field:"VehicleType",
        headerText: "Vehicle Type",
        width: '120',
        textAlign: 'Center',
    },
    {
        field:"DateUploaded",
        headerText: "Date Uploaded",
        textAlign: 'Center',
        width: '120',
    },
    {
        field:"Status",
        headerText: "Status",
        width: '150',
        textAlign: 'Center',
    },
    {
        field:"Action",
        template:gridAction,
        headerText: "Action",
        width: '120',
        textAlign: 'Center',
    },
];


  useEffect(() => {
    getVehicles(dispatch);
  }, [dispatch]);


  return (

  <div className="m-2 md:m-10 p-2 md:p-5  rounded-3xl  ">
   
   <InfoHeader header="All Vehicles"/>
   <SubInfoHeader header="Monitor Uploaded vehicles, Listed Vehicles, etc."/>
    <GridComponent
      id="gridcomp"
      dataSource={mock()}
      allowPaging
      allowSorting
      toolbar={['Search']}
    >
      <ColumnsDirective>
      {UserGrid.map((item,index)=>(
        <ColumnDirective key={index} {...item}/>
      ))}
      </ColumnsDirective>
      <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, Search, PdfExport,Toolbar]} />
    </GridComponent>
  </div>
  
  );
};

export default Vehicles;
