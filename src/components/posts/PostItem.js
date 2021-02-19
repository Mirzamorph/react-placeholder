import React from 'react'
import {
    Avatar,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader, IconButton,
    makeStyles,
    Typography
} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
})

export default function PostItem({post}) {
    const classes = useStyles()
    const {title, body} = post

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                title="Shrimp and Chorizo Paella"
            />
            <CardActionArea>
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
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}
