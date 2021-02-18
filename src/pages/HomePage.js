import React from 'react'
import {Container, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4)
    }
}))

export default function HomePage() {
    const classes = useStyles()

    return (
        <Container className={classes.root}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa officiis, quaerat quam sunt vel veniam. Animi commodi distinctio earum, eligendi ex facilis nemo nisi nobis pariatur sint unde vitae! Dolor, molestiae, quidem? Accusamus aut doloremque ea iure omnis, porro quam qui quo voluptas voluptatum. Expedita, reiciendis, ullam! Blanditiis fugit odio quaerat. Accusantium aliquam cumque dolorum eum ipsum nihil nostrum odit quae quam veritatis! Maiores reprehenderit repudiandae similique vitae! Alias architecto blanditiis consectetur dolor dolore dolorem ipsum minima, nobis nostrum obcaecati odio pariatur placeat, porro praesentium quibusdam repellat vitae? Ab eligendi ex itaque neque, nulla omnis sunt. Commodi iste quam voluptas?
        </Container>
    )
}
