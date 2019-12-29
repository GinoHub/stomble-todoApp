import React, { Component } from "react";
import ToDoItems from "./ToDoItems";
import ToDoHeader from "./ToDoHeader";
// import ToDoSearchBar from "./toDoSearchBar";
import ToDoBody from "./toDoBody";
import { Paper, Container, Divider } from "@material-ui/core"

const style = {
    Container: {
        position: "absolute",
        maxWidth: "xs"
    },
    Paper: {
        margin: 10
    },
    Divider: {
        margin: 15
    }
}

class ToDo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [{
                value: "Hello",
                id: Date.now()
            }],
            filteredTasks: []
        };
    }

    addTask = (task) => this.setState((prevState) => {
        return {
            tasks: [...prevState.tasks, task]
        }
    });

    deleteTask = (taskID) => this.setState((prevState) => {
        return {
            tasks: [...prevState.tasks].filter((task) => task.id !== taskID)
        }
    });

    editTask = (task) => {
        // console.log(task)
    }

    /**
     * filters the results of the search bar to be displayed on the list,
     * if the search bar is empty, will display return all tasks.
     */
    filteredTasksFunc = (e) => {
        let tasks;
        if (e.target.value !== "") {
            tasks = this.state.tasks.filter((task) =>
                task.value.toLowerCase().includes(e.target.value.toLowerCase())
            );
        } else {
            tasks = [];
        }

        this.setState(() => {
            return {
                filteredTasks: tasks
            }
        });
    }

    //TODO: find a better way to handle props.

    render() {
        return (
            <Container style={style.Container}>
                <ToDoHeader handleSearch={this.filteredTasksFunc} />
                <Paper style={style.Paper}>
                    <ToDoBody addTask={this.addTask} />
                    <Divider style={style.Divider} />
                    <ToDoItems tasks={this.state.filteredTasks.length === 0 ? this.state.tasks : this.state.filteredTasks}
                        deleteTask={this.deleteTask}
                        editTask={this.editTask}
                    />
                </Paper>
            </Container>
        );
    }
}

export default ToDo;