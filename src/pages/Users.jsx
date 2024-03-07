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
import { deleteProduct, getAllUser } from "../Redux/apiCalls";
import { Link } from 'react-router-dom';

const Users = () => {
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.allUser);

  

  const gridAction=(props)=>(
    <Link style={{backgroundColor:"#7BB66D"}}
    className="text-white py-1 px-2  rounded-2xl text-md"
    to={`/user/${props.id}`}
    >
     {props.Action}  
    </Link>
  );
  const mock= ()=>{
  const mockDataUsers = [];
  if (typeof products !=='string'){
  for (const product in products){
   
    mockDataUsers.push({
      id:products[product].d_user_id,
      FirstName:products[product].d_first_name,
      LastName:products[product].d_last_name,
      Email:products[product].d_email ,
      UserType:products[product].d_is_user_host===1 ?'Host':'Guest',
      DateJoined:products[product].d_date_created,
      Action:'ViewUser',
      ActionBg:'#8BE78B'
    })
  }

}
   
    
     return mockDataUsers
     
    }

    console.log("product", products);
    console.log("mock",mock())
    
  const UserGrid=[
    {
        field:"id",
        headerText:"UserID",
        width: '120',
        textAlign: 'Center',
    },

    {
        field:"FirstName",
        headerText:"First Name",
        width: '120',
        textAlign: 'Center',
    },
    {
        field:"LastName",
        headerText: "Last Name",
        width: '120',
        textAlign: 'Center',
    },
    {
        field:"Email",
        headerText: "Email",
        textAlign: 'Center',
        width: '120',
    },
    {
        field:"UserType",
        headerText: "User Type",
        width: '150',
        textAlign: 'Center',
    },
    {
        field:"DateJoined",
        headerText: "Date Joined",
        width: '120',
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
    getAllUser(dispatch);
  }, [dispatch]);


  return (
  
  <div className="m-2 md:m-10 p-2 md:p-5  rounded-3xl  ">
   
   <InfoHeader header="All Users"/>
   <SubInfoHeader header="Monitor users, activities, etc."/>
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

export default Users;
