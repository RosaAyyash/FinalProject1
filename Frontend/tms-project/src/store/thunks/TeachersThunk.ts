import TeachersService from "../../services/TeachersService";
import {
  createTeacherSuccess,
  deleteTeacherSuccess,
  getAllTeachersSuccess,
} from "../actions/TeachersActions";

export const getAllTeachersRequest = () => (dispatch: any) => {
  try {
    //API call
    TeachersService.getAllTeachers().then((response: any) => {
      //dispath
      dispatch(getAllTeachersSuccess(response.data));
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const createTeacherRequest =
  (teacher: any, closePopup: any) => (dispatch: any) => {
    try {
      TeachersService.createTeacher(teacher).then(
        (response: any) => {
          console.log("response", response);
          dispatch(createTeacherSuccess(response.data));
          //only close the pop up when the response is success
          closePopup();
        },
        (error: any) => {
          console.log("error", error);
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.toString();
          console.log("message", message);
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  };

export const deleteTeacherRequest =
  (id: string, closePopup: any) => (dispatch: any) => {
    try {
      TeachersService.deleteTeacher(id).then(
        (response: any) => {
          console.log("response", response);
          dispatch(deleteTeacherSuccess(response.data.id));
          closePopup();
        },
        (error: any) => {
          console.log("error", error);
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.toString();
          console.log("message", message);
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  };
