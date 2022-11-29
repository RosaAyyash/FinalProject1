import { Button } from "@mui/material";
import "./DeletePopup.css";

import { deleteTeacherRequest } from "../../store/thunks/TeachersThunk";
import { useDispatch } from "react-redux";

type DeletePopupProp = {
  id: string;
  name: string;
  closePopup: any;
};

function DeletePopup(props: DeletePopupProp) {
  const dispatch = useDispatch<any>();
  return (
    <div>
      <div onClick={props.closePopup} className="delete-popup-overlay"></div>
      <div className="delete-popup-content">
        <h2>Are you sure you want to {props.name}delete?</h2>

        <div>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            onClick={() =>
              dispatch(deleteTeacherRequest(props.id, props.closePopup))
            }
          >
            Delete
          </Button>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            onClick={props.closePopup}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DeletePopup;
