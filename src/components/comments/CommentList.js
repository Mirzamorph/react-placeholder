import React from 'react'
import CommentItem from './CommentItem'


export default function CommentList({comments}) {
    return (
        <>
            {comments.map(comment => (
                <CommentItem comment={comment} key={comment.id}/>
            ))}
        </>
    )
}
