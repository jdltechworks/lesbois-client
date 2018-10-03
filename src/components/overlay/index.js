import React, { Component } from 'react'

class Overlay extends Component {
    render() {
        const { props } = this
        if (props.modal.isOpen) {
            return(
                <div className="modal active">
                    <div className="modal-overlay"></div>
                    {props.children}
                    {props.modal.component}
                </div>
            )
        } else {
            return null
        }
    }
}

export default Overlay
