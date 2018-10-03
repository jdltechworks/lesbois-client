import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import composeStore from '../store'
import Routes from '../routes'

const { store } = composeStore(
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
)

class ClientProvider extends Component {
    render() {
        return(
            <Provider store={store}>
                <Router>
                  <Routes />
                </Router>
            </Provider>
        )
    }
}

export default ClientProvider
