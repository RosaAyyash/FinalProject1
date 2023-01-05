import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import "./TeacherPopup.css";
import CloseIcon from "@mui/icons-material/Close";

import {
  createTeacherRequest,
  updateTeacherRequest,
} from "../../../store/thunks/TeachersThunk";
import { useDispatch, useSelector } from "react-redux";

type TeacherPopupProps = {
  id?: string;
  closePopup: any;
};

type TeacherState = {
  name: string;
  email: string;
  speciality: string;
};

export default function TeacherPopup(props: TeacherPopupProps) {
  const teachers = useSelector((state: any) => state.TeachersReducer);
  const dispatch = useDispatch<any>();

  //local state
  const [teacher, setTeacher] = useState<TeacherState>({
    name: "",
    email: "",
    speciality: "",
  });

  const getTeacherById = () => {
    return teachers.filter((teacher: any, index: number) => {
      if (teacher.id == props.id) {
        setTeacher(teachers[index]);
      }
    });
  };
  useEffect(() => {
    getTeacherById();
  }, []);

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

  const [isSaveButtonDisabled, setSaveButtonDisabled] = useState(false);

  const validator = () => {
    if (
      teacher.name === "" ||
      teacher.email === "" ||
      teacher.speciality === ""
    ) {
      setSaveButtonDisabled(true);
    } else if (!ValidateEmail(teacher.email)) {
      setSaveButtonDisabled(true);
    } else {
      setSaveButtonDisabled(false);
    }
  };

  function ValidateEmail(mail: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }

    return false;
  }

  useEffect(() => {
    validator();
  }, [teacher]);

  //email validator regx

  const handleOnSubmit = () => {
    props.id
      ? dispatch(
          updateTeacherRequest(
            props.id,
            { name: teacher.name, speciality: teacher.speciality },
            props.closePopup
          )
        )
      : dispatch(createTeacherRequest(teacher, props.closePopup));
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
              disabled={props.id ? true : false}
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
              disabled={isSaveButtonDisabled}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
