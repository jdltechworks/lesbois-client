import React, { Component } from 'react'

class Modal extends Component {

    handleClose(e) {
        e.preventDefault()
        this.props.onClose()
    }

    render() {
        const { props } = this
        return(
            <div className="modal-container">
                <div className="modal-header">
                    <button className="btn btn-clear float-right" onClick={this.handleClose.bind(this)}></button>
                    <div className="modal-title h5">{props.title}</div>
                </div>

                {props.children}
            </div>
        )
    }
}

export default Modal
