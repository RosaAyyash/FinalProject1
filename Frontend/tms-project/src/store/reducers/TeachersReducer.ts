import {
  GET_ALL_TEACHERS_SUCCESS,
  CREATE_TEACHER_SUCCESS,
  DELETE_TEACHER_SUCCESS,
} from "../actions/TeachersActions";
const initialState = [] as any;

const TeacherReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  let tempArray = [] as any;

  switch (type) {
    case GET_ALL_TEACHERS_SUCCESS:
      return payload;

    case CREATE_TEACHER_SUCCESS:
      // return the precious state and the newly created one
      return [...state, payload];

    case DELETE_TEACHER_SUCCESS:
      tempArray = state.filter((teacher: any) => teacher.id !== payload);
      return tempArray;

    default:
      return state;
  }
};

export default TeacherReducer;
