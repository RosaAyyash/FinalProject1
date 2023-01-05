import StudentsService from "../../services/StudentsService";
import {
  createStudentSuccess,
  deleteStudentSuccess,
  getAllStudentsSuccess,
  updateStudentSuccess,
} from "../actions/StudentsActions";

export const getAllStudentsRequest = () => (dispatch: any) => {
  try {
    StudentsService.getAllStudents().then((response: any) => {
      dispatch(getAllStudentsSuccess(response.data));
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const createStudentRequest =
  (student: any, closePopup: any) => (dispatch: any) => {
    try {
      StudentsService.createStudent(student).then((response: any) => {
        dispatch(createStudentSuccess(response.data));
        closePopup();
      });
    } catch (error) {
      console.log("error", error);
    }
  };

export const updateStudentRequest =
  (id: string, student: any, closePopup: any) => (dispatch: any) => {
    try {
      StudentsService.updateStudent(id, student).then((response: any) => {
        dispatch(updateStudentSuccess(response.data));
        closePopup();
      });
    } catch (error) {
      console.log("error", error);
    }
  };

export const deleteStudentRequest =
  (id: string, closePopup: any) => (dispatch: any) => {
    try {
      StudentsService.deleteStudent(id).then((response: any) => {
        console.log("response", response);
        dispatch(deleteStudentSuccess(response.data.id));
        closePopup();
      });
    } catch (error) {
      console.log("error", error);
    }
  };
