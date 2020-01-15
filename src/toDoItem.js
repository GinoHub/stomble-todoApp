import React, {useState} from "react";
import { TextField, ListItemText } from "@material-ui/core";

const ToDoItem = (props) => {
    const [editTask, setEditTask] = useState(props.task);

    let handleChange = (e) => {
        setEditTask(e.target.value)
        // console.log(editTask, e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(editTask)
        props.handleEdit(editTask, e);
    }

    return props.task.edit ? (
        <form id="editForm" onSubmit={handleSubmit}>
            <TextField variant="outlined"
                label={props.task.value}
                onChange={handleChange} />
        </form>
    )
        : (<ListItemText primary={props.task.value} />)
}

export default ToDoItem;