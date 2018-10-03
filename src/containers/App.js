import React, { cloneElement, Component, Children } from 'react'
import { connect } from 'react-redux'

const screens = {
    xs: 480,
    sm: 600,
    md: 960,
    xl: 1280,
    xxl: 1140
}


class App extends Component {
    render() {
        const { props } = this
        return(
            <div className="main">
                {Children.map(this.props.children, (child) => {
                    return cloneElement(child, { ...props, screens })
                })}
            </div>
        )
    }
}


export default connect(state => state)(App)
