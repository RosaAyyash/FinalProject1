import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoursesRequest } from "../../store/thunks/CoursesThunk";
import "./CoursesManagement.css";

import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, IconButton } from "@mui/material";

function CoursesManagement() {
  const dispatch = useDispatch<any>();
  const courses = useSelector((state: any) => state.CoursesReducer);

  useEffect(() => {
    dispatch(getAllCoursesRequest());
  }, [dispatch]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "name",
      headerName: "Course Name",
      flex: 1,
      editable: true,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      editable: true,
    },
    {
      field: "creditNumber",
      headerName: "Credit Number",
      type: "number",
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
            <IconButton size="large" title="Edit course" onClick={() => {}}>
              <EditIcon />
            </IconButton>
            <IconButton size="large" title="Edit course" onClick={() => {}}>
              <DeleteIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div>
        <h1 className="titles">Courses Management</h1>
        <Button color="primary" variant="contained" onClick={() => {}}>
          Create Course
        </Button>
      </div>

      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={courses}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
}

export default CoursesManagement;
