import React, { Component } from "react";
import ToDoList from "./ToDoList";
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
                id: Date.now(),
                edit: false
            }],
            filteredTasks: []
        };
    }

    addTask = (newTask) => this.setState((prevState) => {
        return {
            tasks: [...prevState.tasks, newTask]
        }
    });

    deleteTask = (taskDelete) => this.setState((prevState) => {
        return {
            tasks: [...prevState.tasks].filter((task) => task.id !== taskDelete.id)
        }
    });

    editTask = (newTask) => {
        
        this.setState((prevState) => {
            const index = prevState.tasks.findIndex((task) => {
                return task.id === newTask.id
            });

            return {
                tasks: [...prevState.tasks.slice(0, index), newTask, ...prevState.tasks.slice(index + 1)]
            }

        })
    }

    /**
     * filters the results of the search bar to be displayed on the list,
     * if the search bar is empty, will display return all tasks.
     */
    searchTasks = (e) => {
        let tasks = e.target.value !== "" ? this.state.tasks.filter((task) => {
            return task.value.toLowerCase().includes(e.target.value.toLowerCase());
        }) : []

        this.setState(() => {
            return {
                filteredTasks: tasks
            }
        });
    }

    render() {
        return (
            <Container style={style.Container}>
                <ToDoHeader handleSearch={this.searchTasks} />
                <Paper style={style.Paper}>
                    <ToDoBody addTask={this.addTask} />
                    <Divider style={style.Divider} />
                    <ToDoList tasks={this.state.filteredTasks.length === 0 ? this.state.tasks : this.state.filteredTasks}
                        deleteTask={this.deleteTask}
                        editTask={this.editTask}
                    />
                </Paper>
            </Container>
        );
    }
}

export default ToDo;