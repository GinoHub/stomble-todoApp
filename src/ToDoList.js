import React from 'react';
import ToDoItem from "./toDoItem";
import {
    List,
    ListItem,
    IconButton,
    ListItemSecondaryAction,
    Container
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons"

const style = {
    Container: {
        maxWidth: "xs"
    }
}

const ToDoList = (props) => {

    let handleEdit = (task, e) => {
        if (task.edit) {
            console.log("good")
        }
    }

    let handleDelete = (task) => {
        props.deleteTask(task)
    }

    let handleEditClick = (task) => {
        if (task.edit) {
            //submit form
        }
        props.editTask({ ...task, edit: !task.edit });
    }

    return (
        <Container style={style.Container}>
            {props.tasks.map((task) => {
                return (
                    <List key={task.id}>
                        <ListItem>
                            <ToDoItem task={task} handleEdit={handleEdit} />
                            <ListItemSecondaryAction>
                                <IconButton onClick={() => handleDelete(task)} >
                                    <Delete />
                                </IconButton>
                                <IconButton type="submit" form="editForm"
                                 onClick={() => handleEditClick(task)}>
                                    <Edit />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                )
            })}
        </Container>
    );
}

export default ToDoList;