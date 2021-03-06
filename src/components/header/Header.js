import React from 'react'
import {AppBar, Button, IconButton, makeStyles, Toolbar, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

export default function Header() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Button color="inherit" component={Link} to="/">Главная</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
