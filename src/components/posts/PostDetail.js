import React, {useEffect, useRef} from 'react'
import Loader from '../loader/Loader'
import {makeStyles, Typography} from '@material-ui/core'
import AlbumList from '../albums/AlbumList'
import CommentList from '../comments/CommentList'
import {useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {setPostAsync} from '../../redux/actions/postActions'

const useStyles = makeStyles(theme => ({
    sectionTitle: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(5),
        textAlign: 'center'
    }
}))

export default function PostDetail({id}) {
    const {currentPost: post} = useSelector(state => state.posts)
    const dispatch = useDispatch()
    const classes = useStyles()
    const commentTitle = useRef(null)
    const location = useLocation()

    console.log(post)

    useEffect(() => {
        dispatch(setPostAsync(id))
    }, [dispatch, id])

    useEffect(() => {
        if (post && location.hash) {
            commentTitle.current.scrollIntoView()
        }
    }, [post, location.hash])

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
            <Typography variant="h4" className={classes.sectionTitle} ref={commentTitle}>
                Комментарии
            </Typography>
            <CommentList comments={post.comments}/>
        </div>
    )
}
