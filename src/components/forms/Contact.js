import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { validator } from './validator'
import { CONTACT } from './models/Contact'
import { renderField } from './fields'
import Modal from '../modal'
import ModalFooter from '../modal/footer'
import ModalBody from '../modal/body'
import map from 'lodash/map'

class Contact extends Component {
    submitForm(values) {
        this.props.sendMail(values, this.props.token)
    }

    render() {
        const {props} = this
        const title = "Contact Us"
        const { handleSubmit } = props
        return (
            <Modal title={title} onClose={this.props.close}>
                <form onSubmit={handleSubmit((values) => {this.submitForm(values)})}>
                    <ModalBody>
                        {map(CONTACT, renderField.bind(this))}
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-primary">Submit</button>
                        <button className="btn" onClick={this.props.close}>Cancel</button>
                    </ModalFooter>
                </form>
            </Modal>
        )
    }
}

export default reduxForm({
    form: 'contact-form',
    validate: validator(CONTACT)
})(Contact)
