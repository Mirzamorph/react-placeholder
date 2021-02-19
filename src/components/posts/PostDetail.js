import React from 'react'
import usePost from '../../hooks/usePost'
import Loader from '../loader/Loader'
import {makeStyles, Typography} from '@material-ui/core'
import AlbumList from '../albums/AlbumList'

const useStyles = makeStyles(theme => ({
    sectionTitle: {
        marginTop: theme.spacing(5),
        textAlign: 'center'
    }
}))

export default function PostDetail({id}) {
    const post = usePost(id)
    const classes = useStyles()

    if (!post) {
        return <Loader/>
    }

    return (
        <div>
            <Typography variant="h2">
                {post.title}
            </Typography>
            <Typography variant="body1">
                {post.body}
            </Typography>
            <Typography variant="h4" className={classes.sectionTitle}>
                Альбомы
            </Typography>
            <AlbumList albums={post.albums}/>
        </div>
    )
}
