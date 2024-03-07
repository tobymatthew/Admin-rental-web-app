import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getvehicleByUserid, getTripsByUserid, updateUser, resetusers } from "../../Redux/apiCalls";
import { Button, Modal as Modals } from 'antd';
import Bar from "../../components/Bar"
export default function UserId() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  const product = useSelector((state) =>
    state.allUser.products.find((product) => product.d_user_id === productId)
  );
  const { tripId, vehicleId, isFetching, error, isDone } = useSelector((state) => state.allUser)

  const dispatch = useDispatch();
  const tripLength= tripId.length ===0 ? null : tripId.data.length;
 

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const [action, setAction] = useState(null);
  const [view, setView] = useState(false);

  const handleLicense = () => {
    const values = {
      query: "d_drivers_license_image",
      value: null
    }
    updateUser(product.d_user_id, values, dispatch)
  }

  const handleSuspendAccount = () => {
    const values = {
      query: "d_account_suspended",
      value: null ? 1 : null
    }
    updateUser(product.d_user_id, values, dispatch)
  }


  const showModal = (actions) => {
    setOpen(true);
    setAction(actions);
  };
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(isFetching);
    if (action === "suspend") {
      handleSuspendAccount();
    }

    else if (action === "remove") {
      handleLicense();
    }



  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  useEffect(() => {
    getvehicleByUserid(productId, dispatch);
    getTripsByUserid(productId, dispatch);

  }, [dispatch, productId]);


  useEffect(() => {
    if (isDone) {
      resetusers(dispatch);
      setOpen(false);
    }
    if (error) {
      console.log('error occured');
      setOpen(false);
      console.log("error occured");
    }
    resetusers(dispatch);
  }, [dispatch, isDone, error]);





  return (
   
      <div className="idContainer">
        <div className="user-container mt-13 md:mt-4">
          <div className="image-container">
            {product.d_profile_photo !== null ?

              <img
                src={product.d_profile_photo}
                alt=""
                className="user-image"
              />
              :
              <img
                src="https://via.placeholder.com/100x100"
                alt="User"
                className="user-image"
              />
            }
          </div>
          <div className="text-container">
            <p className="first-name">First Name</p>
            <p className="name">{product.d_first_name}</p>
            <p className="last-name">Last Name</p>
            <p className="name">{product.d_last_name}</p>
          </div>
        </div>

        <div className="infoContainer">
          <div className="infoColumn1">
            <div className="infoRow">
              <p className="infoHeader">User ID</p>
              <p className="infoSubHeader">{product.d_user_id}</p>
            </div>
            <div className="infoRow">
              <p className="infoHeader">Email</p>
              <p className="infoSubHeader">{product.d_email}</p>
            </div>
            <div className="infoRow">
              <p className="infoHeader">User Type</p>
              <p className="infoSubHeader">
                {product.d_is_user_host === 1 ? "Host" : "Guest"}
              </p>
            </div>
            <div className="infoRow">
              <p className="infoHeader">Date Joined</p>
              <p className="infoSubHeader">{product.d_date_created}</p>
            </div>
            <div className="infoRow">
              <p className="infoHeader">Last Login</p>
              <p className="infoSubHeader">{product.d_last_signed_in}</p>
            </div>
            <div className="infoRow">
              <p className="infoHeader">Trips Taken</p>
              <p className="infoSubHeader">{tripLength}</p>
              <p className="infoSubHeader">View Trips</p>
            </div>
          </div>

          <div className="infoColumn2">

            <div className="infoRow">
              <p className="infoHeader">Listed Cars</p>
              <p className="infoSubHeader">{ typeof vehicleId !=='string'? vehicleId.length:0}</p>
            </div> 

            <div className="infoRow">
              <p className="infoHeader">Drivers License</p>
              <p className="infoSubHeader">Approved</p>
            </div>



            <span className="infoRow">
              <img src={""} alt="" />
            </span>

            <div >
              <p className="infoHeader">Actions</p>
              <div className="actionHeader">
                <button onClick={() => showModal('remove')} className="infoSubHeader action ">Remove Drivers License</button>
              </div>
              <div>
              {  product.d_account_suspended===null ?
              (
              <button
                onClick={() => showModal("suspend")}
                className="infoSubHeader action "
              >
                Suspend Users Account
              </button>
              ):
               (
              <button
                onClick={() => showModal("suspend")}
                className="infoSubHeader action "
              >
                Unsuspend Users Account
              </button>
               )
           }
              </div>
              {/* <button  onClick={()=> showModal('delete')} className="infoSubHeader">Delete Users Account</button> */}
            </div>
          </div>
        </div>
        <Modals
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
            Cancel
            </Button>,
            <Button className="actionFooter" onClick={handleOk}>
              Submit
            </Button>,
          ]}
        >
          { action==='suspend' ?

          (<p>Are you sure you want to suspend this user.</p>):
          (<p>Are you sure you want to remove user's license.</p>)
          }
        </Modals>
      </div>
    
  );
}
