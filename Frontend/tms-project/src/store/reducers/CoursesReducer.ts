import {
  GET_COURSES_SUCCESS,
  CREATE_COURSE_SUCCESS,
  UPDATE_COURSE_SUCCESS,
  DELETE_COURSE_SUCCESS,
} from "../actions/CoursesActions";
const initialState = [] as any;

const CoursesReducer = (state = initialState, action: any) => {
  let { type, payload } = action;
  let tempArray = [] as any;

  switch (type) {
    case GET_COURSES_SUCCESS:
      return payload;

    case CREATE_COURSE_SUCCESS:
      return payload;

    case DELETE_COURSE_SUCCESS:
      tempArray = state.filter((course: any) => course.id !== payload);
      return tempArray;

    case UPDATE_COURSE_SUCCESS:
      let array = [...state];
      array.map((course: any, index: number) => {
        if (course.id == payload.id) {
          array[index] = payload;
        }
      });
      return array;

    default:
      return state;
  }
};

export default CoursesReducer;
