import React, { Component } from 'react';
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
    Paper: {
        position: "relative"
    },
    Container: {
        maxWidth: "xs"
    }
}

class ToDoItems extends Component {

    handleEdit = (e) => {   

    }

    render() {
        let tasks = this.props.tasks;

        return (
            <Container style={style.Container}>
                {
                    tasks.map((task) => {
                        return (
                            <List key={task.id}>
                                <ListItem>
                                    <ToDoItem task={task} editing={true} />
                                    <ListItemSecondaryAction>
                                        <IconButton onClick={() => this.props.deleteTask(task.id)} >
                                            <Delete />
                                        </IconButton>
                                        <IconButton onClick={(e) => this.handleEdit(task)}>
                                            <Edit />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            </List>
                        )
                    })
                }
            </Container>
        );
    }
};

export default ToDoItems;