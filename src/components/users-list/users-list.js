import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { object, func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { userActions } from "../../actions";
import { ThemContext } from "../../utils/theme-context";
import CircularProgress from '@material-ui/core/CircularProgress';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from '@material-ui/core/TextField';
import ClearIcon from '@material-ui/icons/Clear';


const styles = {
    root: {
        width: '100%'
    },
    orangeAvatar: {
        color: '#fff',
        backgroundColor: '#ff5722 !important',
    },
    purpleAvatar: {
        color: '#fff',
        backgroundColor: '#673ab7 !important',
    },
    noResultContainer: {
        margin: 'auto',
        display: 'flex'
    },
    noResultText: {
        marginTop: -3,
        marginLeft: 10
    },
    search: {
        marginBottom: 16,
        width: '100%'
    },
    clear: {
        cursor: 'pointer'
    }
}


function UsersLists(props) {
    const { classes, setId } = props;
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [searchText, setSearchText] = useState("");
    let { users, isLoading } = useSelector(state => state);
    const dispatch = useDispatch();
    const theme = useContext(ThemContext);

    function handleDialogOpen(id) {
        return function () {
            setIsDialogOpen(true);
            id && setSelectedId(id);
        }
    }

    function handleDialogClose() {
        return function () {
            setIsDialogOpen(false);
            setSelectedId(null)
        }
    }

    function handleDeleteContact() {
        return function () {
            if (selectedId) {
                dispatch(userActions.deleteUser(selectedId))
            }
            setIsDialogOpen(false);
            setSelectedId(null)
        }
    }

    function handleInputChange(event) {
        setSearchText(event.target.value);
    }

    function resetSearch() {
        setSearchText("");
    }

    function getSearch() {
        return (
            <ListItem key={"search-user-key"}>
                <TextField
                    onChange={handleInputChange}
                    value={searchText}
                    label="Search contacts"
                    className={classes.search}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                {searchText.trim() === ""
                                    ? <SearchIcon color={theme.themeColor} />
                                    : <ClearIcon className={classes.clear} onClick={resetSearch} color={theme.themeColor} />
                                }
                            </InputAdornment>)
                    }} />
            </ListItem>
        )
    }

    if (searchText.trim() !== "") {
        users = users.filter(function (user) {
            const name = user.name.trim().toLowerCase();
            return name.includes(searchText.trim().toLocaleLowerCase())
        })
    }

    if (isLoading) {
        return (
            <div className={classes.noResultContainer}>
                <CircularProgress />
            </div>
        )
    }

    if (!users || users.length === 0) {
        return (
            <React.Fragment>
                {getSearch()}
                <div className={classes.noResultContainer}>
                    <InfoIcon color={theme.themeColor} />
                    <Typography color={theme.themeColor} className={classes.noResultText} variant="h6">
                        No contacts found
                </Typography>
                </div>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <List className={classes.root}>
                {getSearch()}
                {users.map((user, index) => {
                    const labelId = `list-secondary-label-${user.id}`;
                    return (
                        <ListItem key={user.id} button onClick={() => setId(user.id)}>
                            <ListItemAvatar>
                                <Avatar className={index % 2 === 0 ? classes.orangeAvatar : classes.purpleAvatar}>{user.name && user.name[0].toUpperCase()}</Avatar>
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={user.name && user.name.toUpperCase()} secondary={'(+1) ' + user.contact} />

                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={handleDialogOpen(user.id)}>
                                    <DeleteIcon color={theme.themeColor} />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
            <Dialog open={isDialogOpen} onClose={handleDialogClose()} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"Delete Contact?"}</DialogTitle>
                <DialogContent><DialogContentText id="alert-dialog-description">Are you sure you want to delete contact.</DialogContentText>
                </DialogContent>
                <DialogActions><Button onClick={handleDialogClose()} color={theme.themeColor}>Cancel</Button>
                    <Button onClick={handleDeleteContact()} color={theme.themeColor} autoFocus> Ok</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}


UsersLists.propTypes = {
    classes: object.isRequired,
    setId: func.isRequired
};


export default withRouter(withStyles(styles)(UsersLists));