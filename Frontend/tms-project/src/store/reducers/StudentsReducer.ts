import {
  CREATE_STUDENT_SUCCESS,
  DELETE_STUDENT_SUCCESS,
  GET_ALL_STUDENTS_SUCCESS,
  UPDATE_STUDENT_SUCCESS,
} from "../actions/StudentsActions";

const initialState = [] as any;

const StudentsReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  let tempArray = [] as any;

  switch (type) {
    case GET_ALL_STUDENTS_SUCCESS:
      return payload;

    case CREATE_STUDENT_SUCCESS:
      return payload;

    case DELETE_STUDENT_SUCCESS:
      tempArray = state.filter((student: any) => student.id !== payload);
      return tempArray;

    case UPDATE_STUDENT_SUCCESS:
      let array = [...state];
      array.map((student: any, index: number) => {
        if (student.id == payload.id) {
          array[index] = payload;
        }
      });
      return array;

    default:
      return state;
  }
};

export default StudentsReducer;
