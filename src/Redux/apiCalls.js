import { publicRequest, userRequest } from "./../api/endpoint";
import { loginFailure, loginStart, loginSuccess,reset } from "./slice/userSlice";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  getProductIdFailure,
  getProductIdStart,
  getProductIdSuccess,
  getTripStart,
  getTripSuccess,
  getTripFailure,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getVehicleStart,
  getVehicleSuccess,
  getVehicleFailure,
  updateInfoStart,
  updateInfoSuccess,
  updateInfoFailure,
  updateStart,
  updateFailure,
  updateSuccess,
  resetUser
} from "./slice/allUserSlice";

import {
  getVehiclesStart,
  getVehiclesSuccess,
  getVehiclesFailure,
  resetVehicle,
  updateVehicleStart,
  updateVehicleInfoSuccess,
  updateVehicleFailure,

} from "./slice/AllVehicleSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/api/login", user);
    dispatch(loginSuccess(res.data));
    const result = JSON.stringify(res.data);
    localStorage.setItem('login', result);
  } catch (err) {
    dispatch(loginFailure());
  }
};


export const getAllUser = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/api/admin/users");
    dispatch(getProductSuccess(res.data));
    
    
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const getUserId = async (id, dispatch) => {
  dispatch(getProductIdStart());
  try {
    const res = await publicRequest.get(`/api/get_user_by_id/${id}`);
    dispatch(getProductIdSuccess(res.data));
  } catch (err) {
    dispatch(getProductIdFailure());
  }
};

export const getVehicles = async (dispatch) => {
  dispatch(getVehiclesStart());
  try {
    const res = await publicRequest.get("/api/admin/vehicles");
    dispatch(getVehiclesSuccess(res.data));
  } catch (err) {
    dispatch(getVehiclesFailure());
  }
};

export const getVehicleId = async (id, dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get(`api/get_host_vehicles/${id}`);
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const getTripsByUserid = async (id, dispatch) => {
  dispatch(getTripStart());
  try {
    const res = await publicRequest.get(`api/trips/all/${id}`);
    dispatch(getTripSuccess(res.data));
  } catch (err) {
    dispatch(getTripFailure());
  }
};

export const getvehicleByUserid = async (id, dispatch) => {
  dispatch(getVehicleStart());
  try {
    const res = await publicRequest.get(`api/get_host_vehicles/${id}`);
    dispatch(getVehicleSuccess(res.data));
  } catch (err) {
    dispatch(getVehicleFailure());
  }
};

export const updateUserInfo = async (id, value, dispatch) => {
  dispatch(updateInfoStart());
  try {
    const res = await publicRequest.get(`api/get_host_vehicles/${id}`, value);
    dispatch(updateInfoSuccess(res.data));
  } catch (err) {
    dispatch(updateInfoFailure());
  }
};

export const updateVehicleInfo = async (id, value, dispatch) => {
  dispatch(updateVehicleStart());
  try {
    const res = await publicRequest.post(`api/admin/update/vehicle/${id}`, value);
    dispatch(updateVehicleInfoSuccess(res.data));
  } catch (err) {
    dispatch(updateVehicleFailure(err));
  }
};
export const updateUser = async (id, value, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await publicRequest.post(`api/admin/update/user/${id}`, value);
    dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateFailure(err));
  }
};


export const resetSuccess =async (dispatch) => {
  dispatch(reset())
}

export const resetVeh=async (dispatch) => {
  dispatch(resetVehicle());
}

export const resetusers=async (dispatch) => {
  dispatch(resetUser());
}

