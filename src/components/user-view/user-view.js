import React, { useContext, useState } from 'react';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Header from "../app-header";
import AddUser from "../add-user";
import UserDetails from "../user-details";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { ThemContext } from "../../utils/theme-context";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: { flexGrow: 1, padding: theme.spacing(3) },
    fabButton: {
        position: 'fixed',
        zIndex: 1,
        bottom: 20,
        right: 20
    },
    icon: {
        fontSize: 100
    }
}));


export function UserView() {
    const classes = useStyles();
    const [isAddView, setIsAddView] = useState(false);
    const [id, setId] = useState(null);
    const users = useSelector(state => state.users);
    const theme = useContext(ThemContext);

    function toggleAddView() {
        setIsAddView(!isAddView)
    }

    const user = users.find(user => user.id === id);

    return (
        <div className={classes.root}>
            <Header setId={setId} />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <React.Fragment>
                    {isAddView ? <AddUser toggleAddView={toggleAddView} /> : <UserDetails user={user} />}
                    {!isAddView && <Fab color={theme.themeColor} aria-label="add" className={classes.fabButton} onClick={toggleAddView}><AddIcon /></Fab>}
                </React.Fragment>
            </main>
        </div>
    );
}