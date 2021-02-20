import React from 'react'
import {Grid} from '@material-ui/core'
import Loader from '../loader/Loader'
import PostItem from '../posts/PostItem'
import useUserPosts from '../../hooks/useUserPosts'

export default function UserPosts({id}) {
    const posts = useUserPosts(id)

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
