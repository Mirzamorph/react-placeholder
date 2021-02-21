import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CssBaseline from '@material-ui/core/CssBaseline'
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline/>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
