import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Cancel from "@material-ui/icons/Cancel";
import Save from "@material-ui/icons/Save";
import { TodosContext } from "./contexts/todos.context";

function EditTodoForm({ id, task, toggleEditForm }) {
  const { editTodo } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(task);
  const handleSave = e => {
    e.preventDefault();
    editTodo(id, value);
    reset();
    toggleEditForm();
  };
  return (
    <form onSubmit={handleSave} style={{ marginLeft: "1rem", width: "50%" }}>
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
      <ListItemSecondaryAction>
        <IconButton aria-label="Cancel" onClick={() => toggleEditForm()}>
          <Cancel />
        </IconButton>
        <IconButton aria-label="Save" onClick={handleSave}>
          <Save />
        </IconButton>
      </ListItemSecondaryAction>
    </form>
  );
}

export default EditTodoForm;
