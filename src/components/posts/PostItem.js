import React from 'react'
import {Button, Card, CardActionArea, CardActions, CardContent, makeStyles, Typography} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        // height: 250,
    },
})

export default function PostItem({post}) {
    const classes = useStyles()
    const {title, body} = post

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
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
