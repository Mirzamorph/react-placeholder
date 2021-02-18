import React from 'react'
import {Box, CircularProgress, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    box: {
        textAlign: 'center'
    }
})

export default function Loader() {
    const classes = useStyles()

    return (
        <Box className={classes.box}>
            <CircularProgress/>
        </Box>
    )
}
