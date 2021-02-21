import {SET_CURRENT_POST, SET_POSTS} from '../types'

const initialState = {
    posts: [],
    currentPost: null
}
/**
 * title
 * body
 * user {}
 * comments count
 */

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case SET_CURRENT_POST:
            return {
                ...state,
                currentPost: action.payload
            }
        default:
            return state
    }
}
