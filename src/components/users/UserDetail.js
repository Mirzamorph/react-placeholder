import React from 'react'
import useUser from '../../hooks/useUser'
import Loader from '../loader/Loader'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    section: {
        marginTop: theme.spacing(3),
    }
}))

export default function UserDetail({id}) {
    const user = useUser(id)
    const classes = useStyles()

    if (!user) {
        return <Loader/>
    }

    return (
        <div>
            <Typography variant="h2">
                {user.name}
            </Typography>
            <Typography variant="body1">
                {user.phone}
            </Typography>
            <Typography variant="body1">
                {user.email}
            </Typography>
            <Typography variant="body1">
                {user.username}
            </Typography>
            <Typography variant="h5" className={classes.section}>
                Адрес
            </Typography>
            <Typography variant="body1">
                Город: {user.address.city}
            </Typography>
            <Typography variant="body1">
                Улица: {user.address.street}
            </Typography>
            <Typography variant="h5" className={classes.section}>
                Работа
            </Typography>
            <Typography variant="body1">
                Название компании: {user.company.name}
            </Typography>
            <Typography variant="body1">
                Область: {user.company.bs}
            </Typography>
        </div>
    )
}
