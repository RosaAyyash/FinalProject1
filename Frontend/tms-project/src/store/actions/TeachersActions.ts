//get all teachers: if it was success it will return the success key and the payload containing the teachers
export const GET_ALL_TEACHERS_SUCCESS = "GET_ALL_TEACHERS_SUCCESS";
export const getAllTeachersSuccess = (teachers: any) => ({
  type: GET_ALL_TEACHERS_SUCCESS,
  payload: teachers,
});

export const CREATE_TEACHER_SUCCESS = "CREATE_TEACHER_SUCCESS";
export const createTeacherSuccess = (teacher: any) => ({
  type: CREATE_TEACHER_SUCCESS,
  payload: teacher,
});

export const DELETE_TEACHER_SUCCESS = "DELETE_TEACHER_SUCCESS";
export const deleteTeacherSuccess = (id: string) => ({
  type: DELETE_TEACHER_SUCCESS,
  payload: id,
});
