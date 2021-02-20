import React, {useState} from 'react'
import {
    Avatar,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader, IconButton,
    makeStyles, Menu, MenuItem,
    Typography
} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {Link} from 'react-router-dom'

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
    const {title, body, user, comments} = post
    const commentsCount = comments.length

    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {user.name[0]}
                    </Avatar>
                }
                action={
                    <>
                        <IconButton aria-label="settings" onClick={handleClick}>
                            <MoreVertIcon/>
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose} component={Link} to={`/users/${user.id}`}>Профиль</MenuItem>
                            <MenuItem onClick={handleClose} component={Link} to={`/users/${user.id}/posts`}>Посты от {user.name}</MenuItem>
                        </Menu>
                    </>
                }
                title={user.name}
            />
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
