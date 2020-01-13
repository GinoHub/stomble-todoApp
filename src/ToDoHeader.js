import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    TextField
} from "@material-ui/core";

const style = {
    AppBar: {
        position: "relative",
        textAlign: "center",
        alignItems: "flex"
    },
    Toolbar: {
        textAlign: "center",
        position: "relative"
    },
    Typography: {
        textAlign: "center",
        position: "relative"
    },
    TextField: {
        margin: "auto",
        background: "white",
        opacity: 0.5,
        align: "right"

    }
}
const ToDoHeader = (props) => {

    return (
        <AppBar style={style.AppBar}>
            <Toolbar>
                <Typography variant="h5" style={style.Typography}>
                    To Do
                </Typography>
                <TextField variant="outlined"
                    style={style.TextField}
                    label="Search..."
                    onChange={(e) => props.handleSearch(e)} />
            </Toolbar>
        </AppBar>
    )
}

export default ToDoHeader;