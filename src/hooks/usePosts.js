import {useEffect, useState} from 'react'
import fetchPosts from '../services/fetchPosts'

export default function usePosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetchPosts()
            setPosts(res)
        }
        fetchData()
    }, [])

    return posts
}
