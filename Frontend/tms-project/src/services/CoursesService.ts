import { httpCommon } from "./http-common";

export const getAllCourses = () => {
  return httpCommon.get("Courses");
};

export const createCourse = (course: any) => {
  return httpCommon.post("Courses", course);
};

export const deleteCourse = (id: string) => {
  return httpCommon.delete(`Courses/${id}`);
};

export const updateCourse = (id: string, course: any) => {
  return httpCommon.put(`Course/${id}`, course);
};

const CoursesService = {
  getAllCourses,
  createCourse,
  deleteCourse,
  updateCourse,
};

export default CoursesService;
