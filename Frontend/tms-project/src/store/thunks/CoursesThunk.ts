import CoursesService from "../../services/CoursesService";
import {
  createCourseSuccess,
  deleteCourseSuccess,
  getAllCoursesSuccess,
  updateCourseSuccess,
} from "../actions/CoursesActions";

export const getAllCoursesRequest = () => (dispatch: any) => {
  try {
    CoursesService.getAllCourses().then((response: any) => {
      console.log("response", response);
      dispatch(getAllCoursesSuccess(response.data));
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const createCourseRequest =
  (course: any, closePopup: any) => (dispatch: any) => {
    try {
      CoursesService.createCourse(course).then((response: any) => {
        console.log("response", response);
        dispatch(createCourseSuccess(response.data));
        closePopup();
      });
    } catch (error) {
      console.log("error", error);
    }
  };

export const updateCourseRequest =
  (id: string, course: any, closePopup: any) => (dispatch: any) => {
    try {
      CoursesService.updateCourse(id, course).then((response: any) => {
        console.log("response", response);
        dispatch(updateCourseSuccess(response.data));
        closePopup();
      });
    } catch (error) {
      console.log("error", error);
    }
  };

export const deleteCourseRequest =
  (id: string, closePopup: any) => (dispatch: any) => {
    try {
      CoursesService.deleteCourse(id).then((response: any) => {
        console.log("response", response);
        dispatch(deleteCourseSuccess(response.data.id));
        closePopup();
      });
    } catch (error) {
      console.log("error", error);
    }
  };
