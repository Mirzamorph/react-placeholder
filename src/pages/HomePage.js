import React from 'react'
import {Container, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4)
    }
}))

export default function HomePage() {
    const classes = useStyles()

    return (
        <Container className={classes.root}>

        </Container>
    )
}
