import React, { useContext, useState } from 'react';
import { func } from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import UserList from "../users-list";
import PaletteIcon from '@material-ui/icons/Palette';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { ThemContext } from "../../utils/theme-context";

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth
        },
    },
    title: {
        flexGrow: 1,
    },
    drawerHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingBottom: 15
    },
    listtitle: {
        marginLeft: 15
    },
    close: {
        marginRight: 5
    }
}));

export function Header(props) {
    const { setId } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { themeColor, changeTheme } = useContext(ThemContext);
    const classes = useStyles();

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    };

    function closeDrawer() {
        setMobileOpen(false);
    }

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    };

    function handleClose() {
        setAnchorEl(null);
    };

    function chageThemColor(color) {
        return function () {
            changeTheme(color);
            handleClose();
        }
    }

    function setSelectedId(id) {
        setMobileOpen(false);
        setId(id)
    }

    const drawer = (
        <React.Fragment>
            <Divider />
            <UserList setId={setSelectedId} />
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar} color={themeColor}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Contact App
                    </Typography>

                    <IconButton edge="end" color={"inherit"} aria-label="chose theme" aria-haspopup="true" onClick={handleClick}>
                        <PaletteIcon />
                    </IconButton>
                    <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                        {['Primary', 'Secondary', 'Inherit'].map((_theme, index) => (
                            <MenuItem key={index} onClick={chageThemColor(_theme.toLowerCase())}>
                                <ListItemIcon>
                                    <PaletteIcon color={_theme.toLowerCase()} className={classes.submenu} />
                                </ListItemIcon>
                                <Typography variant="inherit">{_theme}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="contacts">
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{ paper: classes.drawerPaper }}
                        ModalProps={{ keepMounted: true }}>
                        <div className={classes.drawerHeader}>
                            <Typography color={themeColor} className={classes.listtitle} variant="h6">
                                Contacts
                            </Typography>
                            <Button className={classes.close} onClick={closeDrawer} color={themeColor}>Close</Button>
                        </div>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
                        <div className={classes.drawerHeader}>
                            <Typography className={classes.listtitle} variant="h6">
                                Contacts
                            </Typography>
                        </div>
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </React.Fragment>
    );
}

Header.propTypes = {
    setId: func.isRequired
};