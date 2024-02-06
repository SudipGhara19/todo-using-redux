import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addNote } from "../../redux/actions/noteActions";
import "./NoteForm.css";
import {action} from "../../redux/reducers/noteReducer";
import { notificationSelector, notificationReset } from "../../redux/reducers/notificationReducer";

function NoteForm() {
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector);

  //reset messege to empty again after 3 seconds
  if(message){
    setTimeout(()=>{
      dispatch(notificationReset());
    }, 3000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(action.add(noteText));
    setNoteText("");
  };

  return (
    <div className="container">

      {/* for push the notification in the form container */}
      { message && <div class="alert alert-success" role="alert">
      {message}
        </div>}
      
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        className="form-control mb-3"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Note</button>
    </form>
    </div>
  );
}

export default NoteForm;
