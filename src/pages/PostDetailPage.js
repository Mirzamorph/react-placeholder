import React from 'react'
import MainContainer from '../components/partials/MainContainer'
import {useParams} from 'react-router-dom'
import PostDetail from '../components/posts/PostDetail'

export default function PostDetailPage() {
    const {postId} = useParams()

    return (
        <MainContainer>
            <PostDetail id={postId} />
        </MainContainer>
    )
}
