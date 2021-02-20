import React from 'react'
import {useParams} from 'react-router-dom'
import MainContainer from '../components/partials/MainContainer'
import UserDetail from '../components/users/UserDetail'

export default function UserDetailPage() {
    const {userId} = useParams()
    return (
        <MainContainer>
            <UserDetail id={userId}/>
        </MainContainer>
    )
}
