import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import axios from 'axios'
import Store from './Store/index'
import './index.css'
import App from './container/App'
import colors from './theme/main'
import * as serviceWorker from './serviceWorker'
import { handleGetAdminDetailOnRefresh, handleGetAllUsersCardInfo, handleGetAllJobs, handleGetAllTransactions, handleFetchUserChatHistory } from './Store/Actions'


const token = localStorage.getItem('token')
if (token) {
    Store.dispatch(handleGetAdminDetailOnRefresh())
    Store.dispatch(handleGetAllTransactions())
    Store.dispatch(handleGetAllUsersCardInfo())
    Store.dispatch(handleGetAllJobs())
    Store.dispatch(handleFetchUserChatHistory())

}
ReactDOM.render( < Provider store = { Store } >
    <
    ThemeProvider theme = { colors } >
    <
    App / >
    <
    /ThemeProvider> </Provider > ,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()