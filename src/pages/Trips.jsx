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
import {UserGrid,mockDataUsers} from "../data/static"
import Bar from "../components/Bar"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProduct, getProducts } from "../Redux/apiCalls";
const Trips = () => {
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.product.products);

  // useEffect(() => {
  //   getProducts(dispatch);
  // }, [dispatch]);

  return (
  <Bar>
  <div className="m-2 md:m-10 p-2 md:p-5  rounded-3xl  ">
   
   <InfoHeader header="All Users"/>
   <SubInfoHeader header="Monitor users, activities, etc."/>
    <GridComponent
      id="gridcomp"
      dataSource={mockDataUsers}
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
  </Bar>
  );
};

export default Trips;
