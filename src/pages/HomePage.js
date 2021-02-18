import React from 'react'
import {CircularProgress, Container, makeStyles} from '@material-ui/core'
import PostsList from '../components/posts/PostsList'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4)
    }
}))

export default function HomePage() {
    const classes = useStyles()

    return (
        <Container className={classes.root}>
            <PostsList />
        </Container>
    )
}
