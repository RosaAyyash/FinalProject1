import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";
import "./TeacherPopup.css";
import CloseIcon from "@mui/icons-material/Close";

import { createTeacherRequest } from "../../../store/thunks/TeachersThunk";
import { useDispatch } from "react-redux";

type TeacherPopupProps = {
  id?: number;
  closePopup: any;
};

type TeacherState = {
  name: string;
  email: string;
  speciality: string;
};

export default function TeacherPopup(props: TeacherPopupProps) {
  const dispatch = useDispatch<any>();
  //local state
  const [teacher, setTeacher] = useState<TeacherState>({
    name: "",
    email: "",
    speciality: "",
  });

  const handleOnNameChange = (event: any) => {
    let value = event.target.value;
    setTeacher({ ...teacher, name: value });
  };

  const handleOnEmailChange = (event: any) => {
    let value = event.target.value;
    setTeacher({ ...teacher, email: value });
  };

  const handleOnSpecialityChange = (event: any) => {
    let value = event.target.value;
    setTeacher({ ...teacher, speciality: value });
  };

  const handleOnSubmit = () => {
    dispatch(createTeacherRequest(teacher, props.closePopup));
  };

  return (
    <div className="teacher-pop-up-container">
      {/* Overlay */}
      <div onClick={props.closePopup} className="teacher-popup-overlay"></div>
      <div className="teacher-popup-content">
        {/* Popup header */}
        <div className="teacher-popup-header">
          <Typography variant="h3" fontWeight="bold" color="primary">
            {props.id ? "Update Teacher" : "Create Teacher"}
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

        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Teacher Name"
              variant="outlined"
              fullWidth
              name="name"
              value={teacher.name}
              onChange={handleOnNameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Teacher Email"
              variant="outlined"
              fullWidth
              name="email"
              value={teacher.email}
              onChange={handleOnEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Teacher Speciality"
              variant="outlined"
              fullWidth
              name="speciality"
              value={teacher.speciality}
              onChange={handleOnSpecialityChange}
            />
          </Grid>
          <Grid xs={12} className="save-button-container">
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
  );
}
