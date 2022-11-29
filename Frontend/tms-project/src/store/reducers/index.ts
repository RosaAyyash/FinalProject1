import { combineReducers } from "redux";
import TeachersReducer from "./TeachersReducer";

export default combineReducers({ TeachersReducer });

export type rootReducer = ReturnType<typeof combineReducers>;
