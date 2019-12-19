import React,{useContext} from 'react';
import { object, func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import { addUserSchema } from "../../utils/validation";
import { useDispatch } from 'react-redux'
import { userActions } from "../../actions";
import { ThemContext } from "../../utils/theme-context";


const styles = {
    root: {
        flexGrow: 1,
        marginTop: 10,
        maxWidth: 400,
        overflowX: 'hidden'
    },
    textField: {
        width: '100%',
        marginBottom: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    button: {
        margin: '10px 20px 10px 0px'
    }
};


function EditUser(props) {
    const { classes, toggleEdit, user } = props;
    const dispatch = useDispatch();
    const theme = useContext(ThemContext);
    const { name = '', email = '', contact = '', address = '', id = '' } = (user || {});

    return (
        <div className={classes.root}>
            <Typography color={theme.themeColor} className={classes.title}>
                UserEdit Form
            </Typography>

            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Formik
                        initialValues={{ email: email, name: name, contact: contact, address: address }}
                        onSubmit={(values) => {
                            const userValues = { id: id, ...values, date: new Date().toDateString() }
                            dispatch(userActions.editUser(userValues));
                            toggleEdit();
                        }}
                        validationSchema={addUserSchema}>
                        {({ values, touched, errors, handleChange, handleBlur, handleSubmit }) => {
                            return (
                                <form onSubmit={handleSubmit}>
                                    <Grid item xs={12} align="center">
                                        <TextField
                                            error={errors.name && touched.name}
                                            label="Name *"
                                            name="name"
                                            className={classes.textField}
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={(errors.name && touched.name) && errors.name}
                                        />
                                    </Grid>
                                    <Grid item xs={12} align="center">
                                        <TextField
                                            error={errors.email && touched.email}
                                            label="Email *"
                                            name="email"
                                            className={classes.textField}
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={(errors.email && touched.email) && errors.email}
                                        />
                                    </Grid>
                                    <Grid item xs={12} align="center">
                                        <TextField
                                            error={errors.contact && touched.contact}
                                            label="10 Digit contact without pincode *"
                                            name="contact"
                                            className={classes.textField}
                                            value={values.contact}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={(errors.contact && touched.contact) && errors.contact}
                                        />
                                    </Grid>
                                    <Grid item xs={12} align="center">
                                        <TextField
                                            error={errors.address && touched.address}
                                            label="Address *"
                                            name="address"
                                            className={classes.textField}
                                            value={values.address}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            multiline
                                            rowsMax="4"
                                            helperText={(errors.address && touched.address) && errors.address}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button type="submit" variant="outlined" color={theme.themeColor} className={classes.button}>
                                            Submit
                                         </Button>

                                        <Button variant="outlined" color={theme.themeColor} onClick={toggleEdit}>
                                            Cancel
                                        </Button>
                                    </Grid>
                                </form>
                            );
                        }}
                    </Formik>
                </Grid>
            </Grid>
        </div>
    );
}

EditUser.propTypes = {
    classes: object.isRequired,
    user: object.isRequired,
    toggleEdit: func.isRequired,
};

export default withStyles(styles)(EditUser);