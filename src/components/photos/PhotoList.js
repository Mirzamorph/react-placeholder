import React from 'react'
import {Grid, makeStyles} from '@material-ui/core'
import PhotoItem from './PhotoItem'

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(4)
    }
}))

export default function PhotoList({photos}) {
    const classes = useStyles()

    return (
        <Grid container spacing={3} className={classes.container}>
            {photos.map(photo => (
                <Grid item xs={6} sm={3} key={photo.id}>
                    <PhotoItem photo={photo}/>
                </Grid>
            ))}
        </Grid>
    )

}
