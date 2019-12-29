import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from "./toDoApp"

var destination = document.querySelector('#root');

ReactDOM.render(
    <Fragment>
        <ToDoApp />
    </Fragment>,
    destination
);