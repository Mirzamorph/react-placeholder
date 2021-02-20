import React from 'react'
import {useParams} from 'react-router-dom'
import MainContainer from '../components/partials/MainContainer'
import UserPosts from '../components/users/UserPosts'

export default function UserPostsPage() {
    const {userId} = useParams()
    return (
        <MainContainer>
            <UserPosts id={userId}/>
        </MainContainer>
    )
}
