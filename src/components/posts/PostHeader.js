import React, {useState} from 'react'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import {IconButton, Menu, MenuItem} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {Link} from 'react-router-dom'

export default function PostHeader({user}) {
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <CardHeader
            avatar={
                <Avatar aria-label="recipe">
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
                        <MenuItem onClick={handleClose} component={Link} to={`/users/${user.id}/posts`}>Посты
                            от {user.name}</MenuItem>
                    </Menu>
                </>
            }
            title={user.name}
        />
    )
}
