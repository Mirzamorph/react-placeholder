import {useEffect, useState} from 'react'
import {fetchCommentsById, fetchPosts, fetchUserById} from '../services/fetchData'

export default function usePosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const plainPosts = await fetchPosts()
            const posts = await Promise.all(plainPosts.map(async (post) => {
                post.comments = await fetchCommentsById(post.id)
                post.user = await fetchUserById(post.id)
                return post
            }))
            setPosts(posts)
        }
        fetchData()
    }, [])

    return posts
}
