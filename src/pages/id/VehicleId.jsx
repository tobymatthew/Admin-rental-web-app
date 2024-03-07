import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  getUserId,
  getTripsByUserid,
  updateVehicleInfo,
  resetVeh,
} from "../../Redux/apiCalls";
import Bar from "../../components/Bar";
import Modal from "../../components/modal/Modal";
import { Button, Modal as Modals } from "antd";
import { useStateContext } from "../../contexts/ContextProvider";

export default function VehicleId() {
  const location = useLocation();
  const Id = location.pathname.split("/")[2];

  // use Selcetor
  const vehicle = useSelector((state) =>
    state.allVehicles.vehicles.find((vehicle) => vehicle.d_vehicle_id === Id)
  );
  const { isDone, isFetching, error, temperror } = useSelector(
    (state) => state.allVehicles
  );

  const { productId } = useSelector((state) => state.allUser);

  const name =
    productId.length !== 0
      ? productId.data.d_first_name + "  " + productId.data.d_last_name
      : null;

  const features = [
    {
      id: 1,
      name: "Gps",
      icon: "ios-locate-outline",
      type: "ionicon",
      condition: vehicle.d_is_gps ? vehicle.d_is_gps : null,
    },

    {
      id: 2,
      name: "Wheelchair Accessible",
      icon: "wheelchair",
      type: "font-awesome",
      condition: vehicle.d_is_wheel_chair ? vehicle.d_is_wheel_chair : null,
    },

    {
      id: 3,
      name: "Bike Rack",
      icon: "bicycle",
      type: "font-awesome",
      condition: vehicle.d_is_bike ? vehicle.d_is_bike : null,
    },

    {
      id: 4,
      name: "Child Seat",
      icon: "car-child-seat",
      type: "material-community",
      condition: vehicle.d_is_child ? vehicle.d_is_child : null,
    },

    {
      id: 5,
      name: "Backup " + "\n" + " Camera",
      icon: "flip-camera-android",
      type: "material",
      condition: vehicle.d_is_back_camera ? vehicle.d_is_back_camera : null,
    },

    {
      id: 6,
      name: "Bluetooth",
      icon: "bluetooth-sharp",
      type: "ionicon",
      condition: vehicle.d_is_bluetooth ? vehicle.d_is_bluetooth : null,
    },

    {
      id: 7,
      name: "Keyless Entry",
      icon: "key-wireless",
      type: "material-community",
      condition: vehicle.d_is_keyless ? vehicle.d_is_keyless : null,
    },

    {
      id: 8,
      name: "Navigation System",
      icon: "ios-navigate",
      type: "ionicon",
      condition: vehicle.d_is_navigation ? vehicle.d_is_navigation : null,
    },

    {
      id: 9,
      name: "USB Input",
      icon: "usb-port",
      type: "material-community",
      condition: vehicle.d_is_usb ? vehicle.d_is_usb : null,
    },

    {
      id: 10,
      name: "Heated " + "\n" + " Seats",
      icon: "car-seat-heater",
      type: "material-community",
      condition: vehicle.d_is_heated ? vehicle.d_is_heated : null,
    },
  ];

  console.log(productId);
  // dispatch

  const dispatch = useDispatch();

  // states
  const [mainImage, setMainImage] = useState(vehicle.d_front_view_image);
  const [suspendText, setSuspendedText] = useState(null);
  const [suspendButtonText, setSuspendButtonText] = useState(null);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [action, setAction] = useState(null);
  const [view, setView] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);

  console.log(vehicle.d_vehicle_id);

  const handleLicense = () => {
    const values = {
      query: "d_approved_for_listing",
      value: 1,
    };
    updateVehicleInfo(vehicle.d_vehicle_id, values, dispatch);
  };

  const handleSuspendAccount = () => {
    const values = {
      query: "d_account_suspended",
      value: null ? 1 : null,
    };
    updateVehicleInfo(vehicle.d_vehicle_id, values, dispatch);
  };

  const handleClick = (image) => {
    setView(true);
    setClickedImage(image);
    console.log(clickedImage);
  };

  const handleImage = (image) => {
    setMainImage(image);
  };

  const showModal = (actions) => {
    setOpen(true);
    setAction(actions);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(isFetching);
    if (action === "suspend") {
      handleSuspendAccount();
    } else if (action === "aprove") {
      handleLicense();
    }
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  useEffect(() => {
    getUserId(vehicle.d_user_id, dispatch);
    // getTripsByUserid(productId ,dispatch);
    if (isDone) {
      resetVeh(dispatch);
      setOpen(false);
    }
    if (error) {
      console.log("error occured");
      setOpen(false);
      console.log(temperror);
    }
    resetVeh(dispatch);
  }, [dispatch, isDone, error, temperror]);

  return (
    <div className="idContainer">
      <div className="infoContainer infoHeader-container">
        <div>
          <h1 className="vehicleH1">{vehicle.d_vehicle_make}</h1>

          <p className="infoHeader"> Hosted By</p>

          <span className="infoSubHeader-container">
            <img src={""} alt="" />
            <p className="infoSubHeader">{name}</p>
          </span>
          <p className="price">Price</p>
          <p className="infoSubHeader">N{vehicle.d_price} per day</p>
        </div>

        <div className="mainImgContainer">
          <img
            className="mainImg"
            onClick={() => handleClick(mainImage)}
            src={mainImage}
            alt=""
          />
        </div>
      
        <div className="sideContainer">
          <div className="sideImgContainer mt-10 md:mt-0">
            <img
              onClick={() => handleImage(vehicle.d_front_view_image)}
              className="sideImg"
              src={vehicle.d_front_view_image}
              alt=""
            />
            <img
              onClick={() => handleImage(vehicle.d_front_seat_image)}
              className="sideImg"
              src={vehicle.d_front_seat_image}
              alt=""
            />
            <img
              onClick={() => handleImage(vehicle.d_back_view_image)}
              className="sideImg"
              src={vehicle.d_back_view_image}
              alt=""
            />
            <img
              onClick={() => handleImage(vehicle.d_back_seat_image)}
              className="sideImg"
              src={vehicle.d_back_seat_image}
              alt=""
            />
          </div>
          <div className="sideImgContainer">
            <img
              onClick={() => handleImage(vehicle.d_left_side_image)}
              className="sideImg"
              src={vehicle.d_left_side_image}
              alt=""
            />
            <img
              onClick={() => handleImage(vehicle.d_right_side_image)}
              className="sideImg"
              src={vehicle.d_right_side_image}
              alt=""
            />
            <img
              onClick={() => handleImage(vehicle.d_trunk_view_image)}
              className="sideImg"
              src={vehicle.d_trunk_view_image}
              alt=""
            />
            <img
              onClick={() => handleImage(vehicle.d_dashboard_view_image)}
              className="sideImg"
              src={vehicle.d_dashboard_view_image}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="infoContainer ">
        <div className="vehicleFeaturesRow">
          <div className="vehicleFeaturesColumn">
            <h1 className="vehicleFeaturesColumnH1">Specifications</h1>
          </div>

          <div className="vehicleFeaturesColumn">
            <p className="infoHeader"> Colour</p>
            <p className="infoSubHeader"> {vehicle.d_colour}</p>
          </div>

          <div className="vehicleFeaturesColumn">
            <p className="infoHeader"> Vehicle Type</p>
            <p className="infoSubHeader"> {vehicle.d_vehicle_type}</p>
          </div>

          <div className="vehicleFeaturesColumn">
            <p className="infoHeader">Vehicle Make</p>
            <p className="infoSubHeader">{vehicle.d_vehicle_make}</p>
          </div>

          <div className="vehicleFeaturesColumn">
            <p className="infoHeader"> Year Of Make</p>
            <p>{vehicle.d_year_of_make}</p>
          </div>

          <div>
            <p className="infoHeader"> Transmission</p>
            <p className="infoSubHeader">{vehicle.d_transmission}</p>
          </div>
        </div>

        <div className="vehicleFeaturesRow">
          <div>
            <h1 className="vehicleFeaturesColumnH1">Features</h1>
          </div>
          {features.map((item) => (
            <div key={item.id} className="vehicleFeaturesColumn">
              {item.condition && <p className="infoSubHeader"> {item.name}</p>}
            </div>
          ))}
        </div>

        {/* <div className="vehicleFeaturesRow">
          <div className="vehicleFeaturesColumn">
            <h1 className="vehicleFeaturesColumnH1">Comments</h1>
          </div>

          <div className="vehicleFeaturesColumn">
            <p className="infoSubHeader"> Kelly</p>
            <p className="user101"> user 103</p>
            <p className="star">5 stars</p>
            <p className="comment">
              Lorem ipsum dolor sit amet, conse adipiscing elit. <br /> Quisque
              ultrices enim Lorem ipsum dolor sit amet, <br /> conse adipiscing
              elit.
            </p>
            <span className="navigateComments">
              <p className="previous">Previous comment</p>
              <p className="next">Next comment</p>
            </span>
            Delete Comment
          </div>
        </div> */}

        <div className="vehicleFeaturesRow">
          <div>
            <h1 className="vehicleFeaturesColumnH1">Vehicle Documents</h1>
          </div>

          <div className="vehicleFeaturesColumn">
            <p className="infoHeader"> Proof Of Ownership</p>

            <button
              className="button-link button-link-action"
              onClick={() => handleClick(vehicle.d_proof_of_own_photo)}
            >
              View
            </button>
          </div>

          <div className="vehicleFeaturesColumn">
            <p className="infoHeader">Certificate Of Road Worthiness</p>
            <button
              className="button-link button-link-action"
              onClick={() => handleClick(vehicle.d_certificate_of_road)}
            >
              View
            </button>
          </div>

          <div className="vehicleFeaturesColumn">
            <p className="infoHeader">Vehicle Registation Document</p>
            <button
              className="button-link button-link-action"
              onClick={() => handleClick(vehicle.d_vehicle_registration)}
            >
              View
            </button>
          </div>
          <div className="vehicleFeaturesColumn">
            <p className="infoHeader"> Insurance Document</p>
            <button
              className="button-link button-link-action"
              onClick={() => handleClick(vehicle.d_insurance)}
            >
              View
            </button>
          </div>
        </div>
        <div className="infoContainer">
          {/* <div  className="vehicleActivity">
          <div>Data</div>
        </div> */}

          <div>
            <div>
              <h1 className="vehicleFeaturesColumnH1">Actions</h1>
            </div>
            <div>
              {
                vehicle.d_approved_for_listing !==1 ?
             (
              <button
                onClick={() => showModal("aprove")}
                className="action"
              >
                Approve Vehicle{" "}
              </button>
             ):
             ( <button
                
                onClick={() => showModal("aprove")}
                className="action"
                disabled
              >

                Vehicle Approved

              </button>
             )
}
            </div>
            <div>
              <button
                onClick={() => showModal("suspend")}
                className="action"
              >
                Suspend Vehicle
              </button>
              
            </div>
          </div>
        </div>
      </div>

      {view && (
        <Modal
          clickedImage={clickedImage}
          setClickedImage={setClickedImage}
          setView={setView}
        />
      )}
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
        {action === "suspend" ? (
          <p>Are you sure you want to suspend this Vehcicle.</p>
        ) : (
          <p>Approve Vehicle.</p>
        )}
      </Modals>
    </div>
  );
}
