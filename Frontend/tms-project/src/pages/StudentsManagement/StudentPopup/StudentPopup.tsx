import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import "./StudentPopup.css";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  createStudentRequest,
  updateStudentRequest,
} from "../../../store/thunks/StudentsThunk";

type StudentPopupProps = {
  id?: string;
  closePopup: any;
};

type StudentState = {
  name: string;
  email: string;
  major: string;
};

function StudentPopup(props: StudentPopupProps) {
  const dispatch = useDispatch<any>();
  const students = useSelector((state: any) => state.StudentsReducer);

  const [student, setStudent] = useState<StudentState>({
    name: "",
    email: "",
    major: "",
  });

  const getStudentById = () => {
    return students.filter((student: any, index: number) => {
      if (student.id == props.id) {
        setStudent(students[index]);
      }
    });
  };

  useEffect(() => {
    getStudentById();
  }, []);

  const handleOnNameChange = (event: any) => {
    let value = event.target.value;
    setStudent({ ...student, name: value });
  };

  const handleOnEmailChange = (event: any) => {
    let value = event.target.value;
    setStudent({ ...student, email: value });
  };

  const handleOnMajorChange = (event: any) => {
    let value = event.target.value;
    setStudent({ ...student, major: value });
  };

  const handleOnSubmit = () => {
    props.id
      ? dispatch(
          updateStudentRequest(
            props.id,
            { name: student.name, email: student.email, major: student.major },
            props.closePopup
          )
        )
      : dispatch(createStudentRequest(student, props.closePopup));
  };

  return (
    <div className="student-popup-container">
      <div onClick={props.closePopup} className="student-popup-overlay"></div>
      <div className="student-popup-content">
        <div className="student-popup-header">
          <Typography variant="h3" fontWeight="bold" color="primary">
            {props.id ? "Update Student" : "Create Student"}
          </Typography>
          <IconButton
            size="large"
            title="close icon"
            color="error"
            onClick={props.closePopup}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <div>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Student Name"
                variant="outlined"
                fullWidth
                name="name"
                value={student.name}
                onChange={handleOnNameChange}
              ></TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Student Email"
                variant="outlined"
                fullWidth
                name="email"
                value={student.email}
                onChange={handleOnEmailChange}
              ></TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Student Major"
                variant="outlined"
                fullWidth
                name="major"
                value={student.major}
                onChange={handleOnMajorChange}
              ></TextField>
            </Grid>
            <Grid xs={12}>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                onClick={handleOnSubmit}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default StudentPopup;
