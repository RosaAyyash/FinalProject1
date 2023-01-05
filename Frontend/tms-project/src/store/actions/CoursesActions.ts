export const GET_COURSES_SUCCESS = "GET_COURSES_SUCCESS";
export const getAllCoursesSuccess = (courses: any) => ({
  type: GET_COURSES_SUCCESS,
  payload: courses,
});

export const CREATE_COURSE_SUCCESS = "CREATE_COURSE_SUCCESS";
export const createCourseSuccess = (course: any) => ({
  type: CREATE_COURSE_SUCCESS,
  payload: course,
});

export const DELETE_COURSE_SUCCESS = "DELETE_COURSE_SUCCESS";
export const deleteCourseSuccess = (course: any) => ({
  type: DELETE_COURSE_SUCCESS,
  payload: course,
});

export const UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS";
export const updateCourseSuccess = (course: any) => ({
  type: UPDATE_COURSE_SUCCESS,
  payload: course,
});
