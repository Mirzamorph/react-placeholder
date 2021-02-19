import React from 'react'
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    makeStyles,
    Typography
} from '@material-ui/core'

const useStyles = makeStyles({
    root: {},
    media: {
        height: 140,
    },
})

export default function PhotoItem({photo}) {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={photo.thumbnailUrl}
                    title={photo.title}
                />
            </CardActionArea>
        </Card>
    )
}
