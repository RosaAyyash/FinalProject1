import TeachersService from "../../services/TeachersService";
import { removeLoading, setLoading } from "../actions/loadingAction";
import { setMessage } from "../actions/messageAction";
import {
  createTeacherSuccess,
  deleteTeacherSuccess,
  getAllTeachersSuccess,
  updateTeacherSuccess,
} from "../actions/TeachersActions";

export const getAllTeachersRequest = () => (dispatch: any) => {
  try {
    dispatch(setLoading());
    //API call
    TeachersService.getAllTeachers().then((response: any) => {
      //dispath
      dispatch(getAllTeachersSuccess(response.data));
      dispatch(removeLoading());
      dispatch(
        setMessage("success", "You fetched all the teachers succesfully")
      );
    });
  } catch (error) {
    console.log("error", error);
    dispatch(removeLoading());
  }
};

export const createTeacherRequest =
  (teacher: any, closePopup: any) => (dispatch: any) => {
    try {
      dispatch(setLoading());

      TeachersService.createTeacher(teacher).then(
        (response: any) => {
          console.log("response", response);
          dispatch(createTeacherSuccess(response.data));
          //only close the pop up when the response is success
          closePopup();
          dispatch(removeLoading());
        },
        (error: any) => {
          console.log("error", error);
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.toString();
          console.log("message", message);
          dispatch(removeLoading());
        }
      );
    } catch (error) {
      console.log("error", error);
      dispatch(removeLoading());
    }
  };

export const updateTeacherRequest =
  (id: string, teacher: any, closePopup: any) => (dispatch: any) => {
    try {
      dispatch(setLoading());

      TeachersService.updateTeacher(id, teacher).then(
        (response: any) => {
          console.log("response", response);
          dispatch(updateTeacherSuccess(response.data));
          closePopup();
          dispatch(removeLoading());
        },
        (error: any) => {
          console.log("error", error);
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.toString();
          console.log("message", message);
          dispatch(removeLoading());
        }
      );
    } catch (error) {
      console.log("error", error);
      dispatch(removeLoading());
    }
  };

export const deleteTeacherRequest =
  (id: string, closePopup: any) => (dispatch: any) => {
    try {
      dispatch(setLoading());

      TeachersService.deleteTeacher(id).then(
        (response: any) => {
          console.log("response", response);
          dispatch(deleteTeacherSuccess(response.data.id));
          closePopup();
          dispatch(removeLoading());
        },
        (error: any) => {
          console.log("error", error);
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.toString();
          console.log("message", message);
          dispatch(removeLoading());
        }
      );
    } catch (error) {
      console.log("error", error);
      dispatch(removeLoading());
    }
  };
