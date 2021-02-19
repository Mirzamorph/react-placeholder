import {useEffect, useState} from 'react'
import fetchFullPosts from '../services/fetchData'

export default function usePosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetchFullPosts()
            setPosts(res)
        }
        fetchData()
    }, [])

    return posts
}
