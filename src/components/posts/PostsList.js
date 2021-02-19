import React from 'react'
import usePosts from '../../hooks/usePosts'
import {Grid} from '@material-ui/core'
import PostItem from './PostItem'
import Loader from '../loader/Loader'




export default function PostsList() {
    const posts = usePosts()
    console.log(posts)
    if (!posts.length) {
        return <Loader/>
    }

    return (
        <Grid container spacing={3}>
            {
                posts.map(post => (
                    <Grid item xs={6} sm={4} key={post.id}>
                        <PostItem post={post}/>
                    </Grid>
                ))
            }
        </Grid>
    )
}
