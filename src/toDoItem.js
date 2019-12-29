import React, { Component } from "react";
import { TextField, ListItemText } from "@material-ui/core";

class ToDoItem extends Component {
    constructor() {
        super();

        this.state = {
            editing: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        if (this.state.editing) {
            return (
                <form onSubmit={this.handleSubmit}>
                    <TextField variant="outlined" label={this.props.task.value} />
                </form>
            );
        }
        return (<ListItemText primary={this.props.task.value} />);
    }

}

export default ToDoItem;