export const GET_ALL_STUDENTS_SUCCESS = "GET_ALL_STUDENTS_SUCCESS";
export const getAllStudentsSuccess = (students: any) => ({
  type: GET_ALL_STUDENTS_SUCCESS,
  payload: students,
});

export const CREATE_STUDENT_SUCCESS = "CREATE_STUDENT_SUCCESS";
export const createStudentSuccess = (student: any) => ({
  type: CREATE_STUDENT_SUCCESS,
  payload: student,
});

export const DELETE_STUDENT_SUCCESS = "DELETE_STUDENT_SUCCESS";
export const deleteStudentSuccess = (id: string) => ({
  type: DELETE_STUDENT_SUCCESS,
  payload: id,
});

export const UPDATE_STUDENT_SUCCESS = "UPDATE_STUDENT_SUCCESS";
export const updateStudentSuccess = (student: any) => ({
  type: UPDATE_STUDENT_SUCCESS,
  payload: student,
});
