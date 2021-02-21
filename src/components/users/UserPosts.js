import React from 'react'
import {Grid, makeStyles} from '@material-ui/core'
import Loader from '../loader/Loader'
import PostItem from '../posts/PostItem'
import useUserPosts from '../../hooks/useUserPosts'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    title: {
        marginBottom: theme.spacing(5),
        textAlign: 'center'
    }
}))

export default function UserPosts({id}) {
    const {user, posts} = useUserPosts(id)
    const classes = useStyles()

    if (!posts.length) {
        return <Loader/>
    }

    return (
        <>
            <Typography variant="h2" className={classes.title}>
                {user.name}
            </Typography>
            <Grid container spacing={3}>
                {
                    posts.map(post => (
                        <Grid item xs={6} sm={4} key={post.id}>
                            <PostItem post={post}/>
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}
