import {SET_CURRENT_POST, SET_POSTS} from '../types'
import {
    fetchAlbumsByUserId,
    fetchCommentsByPostId, fetchPhotosByAlbumId,
    fetchPost,
    fetchPosts,
    fetchUserById
} from '../../services/fetchData'

const setPosts = posts => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

const setPost = post => {
    return {
        type: SET_CURRENT_POST,
        payload: post
    }
}

export const setPostsAsync = () => {
    return async dispatch => {
        dispatch(setPosts([]))
        const plainPosts = await fetchPosts()
        const posts = await Promise.all(plainPosts.map(async (post) => {
            post.comments = await fetchCommentsByPostId(post.id)
            post.user = await fetchUserById(post.id)
            return post
        }))
        dispatch(setPosts(posts))
    }
}

export const setPostAsync = (id) => {
    return async dispatch => {
        dispatch(setPost(null))
        const post = await fetchPost(id)
        post.comments = await fetchCommentsByPostId(post.id)
        post.user = await fetchUserById(post.userId)

        const albums = await fetchAlbumsByUserId(post.user.id)
        post.albums = await Promise.all(albums.map(async (album) => {
            album.photos = await fetchPhotosByAlbumId(album.id)
            return album
        }))

        dispatch(setPost(post))
    }
}
