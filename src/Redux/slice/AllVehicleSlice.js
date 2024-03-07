import { createSlice } from "@reduxjs/toolkit";

export const allVehicleSlice = createSlice({
  name: "allUser",
  initialState: {
    vehicles: [],
    tripId: [],
    vehicleId: [],
    tempVehicle:[],
    isDone:false,
    isFetching: false,
    error: false,
    temperror:[]
  },
  reducers: {
    //GET ALL
    getVehiclesStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    getVehiclesSuccess: (state, action) => {
      state.isFetching = false;
      state.vehicles = action.payload;
    },
    getVehiclesFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },


 //UPDATE
    updateVehicleStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateVehicleInfoSuccess: (state, action) => {
      state.isFetching = false;
      state.isDone=true;
      state.tempVehicle= action.payload;
    },
    updateVehicleFailure: (state,action) => {
      state.isFetching = false;
      state.error = true;
      state.temperror=action.payload;
    },

    resetVehicle:(state)=>{
     state.isDone=false;
     state.error = false;
    }
    // //DELETE
    // deleteProductStart: (state) => {
    //   state.isFetching = true;
    //   state.error = false;
    // },
    // deleteProductSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.products.splice(
    //     state.products.findIndex((item) => item._id === action.payload),
    //     1
    //   );
    // },
    // deleteProductFailure: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    // },
   
    // },
    // //UPDATE
    // addProductStart: (state) => {
    //   state.isFetching = true;
    //   state.error = false;
    // },
    // addProductSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.products.push(action.payload);
    // },
    // addProductFailure: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    // },

    // //userTripByID
    //   getTripStart: (state) => {
    //   state.isFetching = true;
    //   state.error = false;
    // },
    // getTripSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.tripId = action.payload;
    // },

    // getTripFailure: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    // },

    // //vehiclebyid
    // getVehicleStart: (state) => {
    //   state.isFetching = true;
    //   state.error = false;
    // },
    // getVehicleSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.vehicleId = action.payload;
    // },

    // getVehicleFailure: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    // },

    // updateInfoStart: (state) => {
    //   state.isFetching = true;
    //   state.error = false;
    // },
    // updateInfoSuccess: (state, action) => {
    //   state.isFetching = false;
    //   state.vehicleId = action.payload;
    // },

    // updateInfoFailure: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    // },
    
  },
});

export const {
  getVehiclesStart,
  getVehiclesSuccess,
  getVehiclesFailure,
  resetVehicle,
  updateVehicleStart,
  updateVehicleInfoSuccess,
  updateVehicleFailure,
//   deleteProductStart,
//   deleteProductSuccess,
//   deleteProductFailure,

//   addProductStart,
//   addProductSuccess,
//   addProductFailure,
//   getTripStart,
//   getTripSuccess,
//   getTripFailure,
//   getVehicleStart,
//   getVehicleSuccess,
//   getVehicleFailure,
//   updateInfoStart,
//   updateInfoSuccess,
//   updateInfoFailure
} = allVehicleSlice.actions;

export default allVehicleSlice.reducer;