import "./StudentsManagement.css";

//from MUI
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllStudentsRequest } from "../../store/thunks/StudentsThunk";
import { Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import StudentPopup from "./StudentPopup/StudentPopup";
import DeletePopup from "../../components/DeletePopup/DeletePopup";

function StudentsManagement() {
  const dispatch = useDispatch<any>();

  const students = useSelector((state: any) => state.StudentsReducer);
  console.log("students", students);

  useEffect(() => {
    students.length <= 0 && dispatch(getAllStudentsRequest());
  }, [dispatch]);

  const [studentPopup, setStudentPopup] = useState({
    isStudentPopup: false,
    id: "",
  });

  const [deletePopup, setDeletePopup] = useState({
    isDeletePopup: false,
    id: "",
    name: "",
  });

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
      field: "major",
      headerName: "Major",
      flex: 1,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (row: any) => {
        return (
          <>
            <IconButton
              size="large"
              title="Edit Student"
              onClick={() => {
                setStudentPopup({
                  isStudentPopup: true,
                  id: row.row.id,
                });
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              size="large"
              title="Delete Student"
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

  const closePopup = () => {
    setStudentPopup({ isStudentPopup: false, id: "" });
    setDeletePopup({ isDeletePopup: false, id: "", name: "" });
  };

  return (
    <>
      {studentPopup.isStudentPopup ? (
        <StudentPopup closePopup={closePopup} id={studentPopup.id} />
      ) : null}
      {deletePopup.isDeletePopup ? (
        <DeletePopup
          closePopup={closePopup}
          id={deletePopup.id}
          name={deletePopup.name}
        />
      ) : null}
      <div>
        <h1 className="titles">Students Management</h1>
        <div>
          <Button
            color="primary"
            variant="contained"
            className="create-buttons"
            onClick={() => {
              setStudentPopup({
                ...studentPopup,
                isStudentPopup: true,
              });
            }}
          >
            Create Teacher
          </Button>

          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={students}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>
        </div>
      </div>
    </>
  );
}

export default StudentsManagement;
