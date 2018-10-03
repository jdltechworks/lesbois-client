import React, { Component } from 'react'

class ModalBody extends Component {

    render() {
        return(
            <div className="modal-body">
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ModalBody
