import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './components/header/Header'

import './App.css'
import PostDetailPage from './pages/PostDetailPage'
import UserDetailPage from './pages/UserDetailPage'
import UserPostsPage from './pages/UserPostsPage'

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact>
                    <HomePage/>
                </Route>
                <Route path="/posts/:postId" exact>
                    <PostDetailPage/>
                </Route>
                <Route path="/users/:userId" exact>
                    <UserDetailPage/>
                </Route>
                <Route path="/users/:userId/posts" exact>
                    <UserPostsPage/>
                </Route>
                <Route>
                    not found
                </Route>
            </Switch>
        </Router>
    )
}

export default App
