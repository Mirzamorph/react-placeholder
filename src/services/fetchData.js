import {req} from './fetch'

export async function fetchPosts(limit = 9) {
    return await req.get(`/posts?_limit=${limit}`)
}

export async function fetchPost(id) {
    return await req.get(`/posts/${id}`)
}

export async function fetchCommentsByPostId(id) {
    return await req.get(`/comments/?postId=${id}`)
}

export async function fetchAlbumsByUserId(id) {
    return await req.get(`/albums/?userId=${id}`)
}

export async function fetchPhotosByAlbumId(id, limit = 4) {
    return await req.get(`/albums/${id}/photos?_limit=${limit}`)
}

export async function fetchUserById(id) {
    return await req.get(`/users/${id}`)
}
