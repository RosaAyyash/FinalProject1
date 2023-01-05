import { httpCommon } from "./http-common";

const getAllStudents = () => {
  return httpCommon.get("Students");
};

const createStudent = (student: any) => {
  return httpCommon.post("Students", student);
};

const deleteStudent = (id: string) => {
  return httpCommon.delete(`Students/${id}`);
};

const updateStudent = (student: any, id: string) => {
  return httpCommon.put(`Students/${id}`, student);
};
const StudentsService = {
  getAllStudents,
  createStudent,
  deleteStudent,
  updateStudent,
};

export default StudentsService;
