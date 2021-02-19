import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    card: {
        marginTop: theme.spacing(3)
    }
}))

export default function CommentItem({comment}) {
    const classes = useStyles()
    const {name, email, body} = comment

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        {name[0]}
                    </Avatar>
                }
                title={name}
                subheader={email}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {body}
                </Typography>
            </CardContent>
        </Card>
    )
}
