import { combineReducers } from "redux";
import CoursesReducer from "./CoursesReducer";
import LoadingReducer from "./loadingReducer";
import MessageReducer from "./messageReducer";
import StudentsReducer from "./StudentsReducer";
import TeachersReducer from "./TeachersReducer";

export default combineReducers({
  TeachersReducer,
  StudentsReducer,
  CoursesReducer,
  LoadingReducer,
  MessageReducer,
});

export type rootReducer = ReturnType<typeof combineReducers>;
