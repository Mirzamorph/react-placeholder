import {req} from './fetch'

export default async function fetchPosts(limit = 10) {
    return await req.get(`/posts?_limit=${limit}`)
}
