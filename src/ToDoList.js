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
        //find event value and save to task
        props.editTask({ ...task, edit: !task.edit });
    }

    let handleDelete = (task) => {
        props.deleteTask(task)
    }

    return (
        <Container style={style.Container}>
            {props.tasks.map((task) => {
                return (
                    <List key={task.id}>
                        <ListItem>
                            <ToDoItem task={task} />
                            <ListItemSecondaryAction>
                                <IconButton onClick={() => handleDelete(task)} >
                                    <Delete />
                                </IconButton>
                                <IconButton onClick={(e) => handleEdit(task, e)}>
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