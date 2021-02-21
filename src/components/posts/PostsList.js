import React, {useEffect} from 'react'
import usePosts from '../../hooks/usePosts'
import {Grid} from '@material-ui/core'
import PostItem from './PostItem'
import Loader from '../loader/Loader'
import {useDispatch, useSelector} from 'react-redux'
import {setPostsAsync} from '../../redux/actions/postActions'

export default function PostsList() {
    // const posts = usePosts()
    const {posts} = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPostsAsync())
    }, [])

    if (!posts.length) {
        return <Loader/>
    }

    return (
        <Grid container spacing={3}>
            {
                posts.map(post => (
                    <Grid item xs={6} sm={4} key={post.id}>
                        <PostItem post={post} withHeader/>
                    </Grid>
                ))
            }
        </Grid>
    )
}
