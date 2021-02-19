import {useEffect, useState} from 'react'
import {fetchCommentsById, fetchPost, fetchUserById} from '../services/fetchData'

export default function usePost(id) {
    const [post, setPost] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const post = await fetchPost(id)
            post.comments = await fetchCommentsById(post.id)
            post.user = await fetchUserById(post.id)
            setPost(post)
        }
        fetchData()
    }, [])

    return post
}
