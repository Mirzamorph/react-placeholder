import React from 'react'
import usePost from '../../hooks/usePost'
import Loader from '../loader/Loader'

export default function PostDetail({id}) {
    const post = usePost(id)

    if (!post) {
        return <Loader/>
    }

    return (
        <div>
            {post.id}
        </div>
    )
}
