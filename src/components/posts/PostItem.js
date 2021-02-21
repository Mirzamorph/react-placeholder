import React from 'react'
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    makeStyles,
    Typography
} from '@material-ui/core'
import {Link} from 'react-router-dom'
import PostHeader from './PostHeader'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
})

export default function PostItem({post, withHeader = false}) {
    const classes = useStyles()
    const {title, body, user, comments} = post
    const commentsCount = comments.length

    return (
        <Card className={classes.root}>
            {withHeader && <PostHeader user={user}/>}
            <CardActionArea component={Link} to={`/posts/${post.id}`}>
                <CardContent className={classes.media}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" component={Link} to={`/posts/${post.id}#comments`}>
                    {commentsCount} комментариев
                </Button>
            </CardActions>
        </Card>
    )
}
