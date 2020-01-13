import React, { Component } from "react";
import {
    TextField,
    IconButton,
    Container
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";

const style = {
    Container: {
        position: "relative"
    },
    form: {
        margin: "auto"
    }
}

class ToDoBody extends Component {

    newTask = {
        value: "",
        id: 0,
        edit: false
    };

    constructor(props) {
        super(props);
        this.state = { task: this.newTask }
    }

    submitTasks = (e) => {
        e.preventDefault();

        if (this.state.task !== this.newTask) {
            this.props.addTask(this.state.task);
            this.setState({ task: this.newTask });
        }
    }

    inputUpdate = (e) => {
        this.setState({
            task: {
                value: e.target.value,
                id: Date.now(),
                edit: false
            }
        });
    }

    render() {
        return (
            <Container style={style.Paper}>
                <form onSubmit={this.submitTasks} autoComplete="off" style={style.form}>
                    <TextField id="TaskInput"
                        label="Add a new Task!"
                        value={this.state.task.value}
                        onChange={this.inputUpdate}
                    />
                    <IconButton type="submit">
                        <AddCircle />
                    </IconButton>
                </form>
            </Container>
        );
    }
}

export default ToDoBody;