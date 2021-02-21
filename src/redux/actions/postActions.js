import {SET_POSTS} from '../types'
import {fetchCommentsByPostId, fetchPosts, fetchUserById} from '../../services/fetchData'

export const setPosts = posts => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

export const setPostsAsync = () => {
    return async dispatch => {
        const plainPosts = await fetchPosts()
        const posts = await Promise.all(plainPosts.map(async (post) => {
            post.comments = await fetchCommentsByPostId(post.id)
            post.user = await fetchUserById(post.id)
            return post
        }))
        dispatch(setPosts(posts))
    }
}
