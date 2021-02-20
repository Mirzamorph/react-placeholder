import {useEffect, useState} from 'react'
import {fetchCommentsByPostId, fetchPosts, fetchUserById} from '../services/fetchData'

export default function useUserPosts(userId = null) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const plainPosts = await fetchPosts(userId)
            const user = await fetchUserById(userId)

            const posts = await Promise.all(plainPosts.map(async (post) => {
                post.comments = await fetchCommentsByPostId(post.id)
                post.user = user
                return post
            }))
            setPosts(posts)
        }
        fetchData()
    }, [])

    return posts
}
