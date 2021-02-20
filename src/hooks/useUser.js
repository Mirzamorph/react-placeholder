import {useEffect, useState} from 'react'
import {fetchUserById} from '../services/fetchData'

export default function useUser(id) {
    const [user, setUser] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const user = await fetchUserById(id)
            setUser(user)
        }
        fetchData()
    }, [])

    console.log(user)
    return user
}

