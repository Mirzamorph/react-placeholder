import {req} from './fetch'

export default async function fetchFullPosts(limit = 10) {
    const posts = await fetchPosts(limit)
    return await Promise.all(posts.map(async (post) => {
        post.comments = await fetchCommentsById(post.id)
        post.user = await fetchUserById(post.id)
        return post
    }))
}

export async function fetchPosts(limit = 10) {
    return await req.get(`/posts?_limit=${limit}`)
}

export async function fetchCommentsById(id) {
    return await req.get(`/comments/?postId=${id}`)
}

export async function fetchUserById(id) {
    return await req.get(`/users/${id}`)
}
