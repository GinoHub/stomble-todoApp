import React from "react";
import { TextField, ListItemText } from "@material-ui/core";

const ToDoItem = (props) => {

    let handleChange = (e) => {
        console.log(e.target.value)
    }

    if (props.task.edit) {
        return (
            <TextField variant="outlined"
                label={props.task.value}
                onChange={handleChange} />
        );
    }
    return (<ListItemText primary={props.task.value} />);
}

export default ToDoItem;