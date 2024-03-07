import { configureStore,combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import userReducer from  './slice/userSlice'
import storage from "redux-persist/lib/storage";
import allUserReducer from "./slice/allUserSlice";
import allVehicleReducer from "./slice/AllVehicleSlice";

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
   
  } 

  const rootReducer=combineReducers({
    user:userReducer,
    allUser:allUserReducer,
    allVehicles:allVehicleReducer
 })

 const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store= configureStore({
    reducer:persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }),
})


 export const persistor = persistStore(store)