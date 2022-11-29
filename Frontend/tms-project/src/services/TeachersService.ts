import { httpCommon } from "./http-common";

const getAllTeachers = () => {
  return httpCommon.get("Teachers");
};

const createTeacher = (teacher: any) => {
  return httpCommon.post("Teachers", teacher);
};

const deleteTeacher = (id: string) => {
  return httpCommon.delete(`Teachers/${id}`);
};

const TeachersService = {
  getAllTeachers,
  createTeacher,
  deleteTeacher,
};

export default TeachersService;
