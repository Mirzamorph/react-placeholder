import React from 'react'
import {Grid} from '@material-ui/core'
import PhotoList from '../photos/PhotoList'

export default function AlbumList({albums}) {
    const firstAlbum = albums[0]
    return (
        <>
            {albums.map(album => (
                <PhotoList photos={album.photos} key={album.id}/>
            ))}
        </>
    )
}
