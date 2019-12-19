import React, { useState, useContext } from 'react';
import { object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import EditUser from "../edit-user";
import { ThemContext } from "../../utils/theme-context";

const styles = {
    root: {
        flexGrow: 1,
        padding: 25
    },
    flexContainer: {
        marginTop: 5,
        display: 'flex'
    },
    noResultText: {
        marginTop: -3,
        marginLeft: 10
    },
    margin: {
        marginTop: 20,
        marginBottom: 10
    },
    textIcon: {
        marginRight: 5
    },
    image:{
        marginTop: 50,
        marginBottom: 10,
        height:200, 
        width:200
    }
};


function UserDetails(props) {
    const { classes, user } = props;
    const [isEdit, setIsEdit] = useState(false);
    const theme = useContext(ThemContext);;
    const { name, date, email, contact, address } = (user || {});

    function toggleEdit() {
        setIsEdit(!isEdit);
    }

    if (!user) {
        return (
            <div className={classes.flexContainer}>
                <InfoIcon color={theme.themeColor} />
                <Typography color={theme.themeColor} className={classes.noResultText} variant="h6">
                    Select contact to view
                </Typography>
            </div>
        )
    }

    if (isEdit) {
        return <EditUser user={user} toggleEdit={toggleEdit} />
    }

    return (
        <React.Fragment>
           <Grid container direction="column" justify="center" alignItems="center" spacing={0} className={classes.root}>

                <Grid item md={12} xs={12} sm={12}> 
                        <Typography variant="h5">
                            <b>{name && name.toUpperCase()}</b>
                        </Typography>
                </Grid>
            </Grid>

            <Grid container direction="row" justify="space-between"alignItems="center">
                <Grid item>
                            <Typography variant="h6" className={classes.margin}>
                                Basics Information
                            </Typography>
                            <Typography variant="subtitle1" className={classes.flexContainer}>
                                <EmailIcon className={classes.textIcon} color={theme.themeColor} /><b>Email</b>
                            </Typography>
                            <Typography variant="subtitle1">
                                {email}
                            </Typography>
                            <Typography variant="subtitle1" className={classes.flexContainer}>
                                <PhoneIcon className={classes.textIcon} color={theme.themeColor} /><b>Phone</b>
                            </Typography>
                            <Typography variant="subtitle1">
                                {contact}
                            </Typography>
                            <Typography variant="subtitle1" className={classes.flexContainer}>
                                <HomeIcon className={classes.textIcon} color={theme.themeColor} /><b>Address</b>
                            </Typography>
                            <Typography variant="subtitle1">
                                {address}
                            </Typography>
                            <Button variant="outlined" className={classes.margin} color={theme.themeColor} onClick={toggleEdit}>
                                Edit user
                            </Button>
                    </Grid>
                    <Grid item>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-mXuETtV9PelHdVOYG7yMwKVZpW1NGNpFwND484eFIxU8IBe&s" className={classes.image} alt="user"/>
                    </Grid>
                </Grid>
        </React.Fragment>
    );
}

UserDetails.propTypes = {
    classes: object.isRequired,
    user: object
};

export default withStyles(styles)(UserDetails);