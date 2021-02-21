import {useEffect, useState} from 'react'
import {
    fetchAlbumsByUserId,
    fetchCommentsByPostId,
    fetchPhotosByAlbumId,
    fetchPost,
    fetchUserById
} from '../services/fetchData'

export default function usePost(id) {
    const [post, setPost] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const post = await fetchPost(id)
            post.comments = await fetchCommentsByPostId(post.id)
            post.user = await fetchUserById(post.userId)

            const albums = await fetchAlbumsByUserId(post.user.id)
            post.albums = await Promise.all(albums.map(async (album) => {
                album.photos = await fetchPhotosByAlbumId(album.id)
                return album
            }))

            setPost(post)
        }
        fetchData()
    }, [])

    console.log(post)
    return post
}
