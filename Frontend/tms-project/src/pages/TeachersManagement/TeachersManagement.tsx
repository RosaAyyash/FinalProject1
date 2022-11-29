import "./TeachersManagement.css";
import { useEffect, useState } from "react";
import TeachersService from "../../services/TeachersService";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllTeachersRequest,
  deleteTeacherRequest,
} from "../../store/thunks/TeachersThunk";

//components
import TeacherPopup from "./TeacherPopup/TeacherPopup";
import DeletePopup from "../../components/DeletePopup/DeletePopup";

//MUI modules
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Button, Grid, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function TeachersManagement() {
  const dispatch = useDispatch<any>();

  //local state
  const [isTeacherPopup, setIsTeacherPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState({
    isDeletePopup: false,
    id: "",
    name: "",
  });

  //redux state
  const teachers = useSelector((state: any) => state.TeachersReducer);
  console.log("teachers: ", teachers);
  useEffect(() => {
    dispatch(getAllTeachersRequest());
  }, [dispatch]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      editable: true,
    },
    {
      field: "speciality",
      headerName: "Speciality",
      flex: 1,
      editable: true,
    },
    {
      field: "Actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (row: any) => {
        return (
          <>
            <IconButton size="large" title="Edit Teacher" onClick={() => {}}>
              <EditIcon />
            </IconButton>
            <IconButton
              size="large"
              title="Edit Teacher"
              onClick={() => {
                setDeletePopup({
                  isDeletePopup: true,
                  id: row.row.id,
                  name: row.row.name,
                });
              }}
            >
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
    },
  ];
  //to close the popup turn the TeacherPopup state to Flase
  const closePopup = () => {
    setIsTeacherPopup(false);
    setDeletePopup({ isDeletePopup: false, id: "", name: "" });
  };

  return (
    <>
      {isTeacherPopup ? <TeacherPopup closePopup={closePopup} /> : null}
      {deletePopup.isDeletePopup ? (
        <DeletePopup
          closePopup={closePopup}
          id={deletePopup.id}
          name={deletePopup.name}
        />
      ) : null}
      <div>
        <h1 className="titles">Teachers Management</h1>
        <div className="button-container">
          <Button
            onClick={() => setIsTeacherPopup(true)}
            className="create-button"
            color="primary"
            variant="contained"
          >
            {" "}
            Create Teacher
          </Button>
        </div>

        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={teachers}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </div>
    </>
  );
}

export default TeachersManagement;
