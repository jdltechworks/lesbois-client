import { combineReducers } from 'redux'
import { createModules } from '@jdltechworks/redux-utils'
import { reducer as form } from 'redux-form'
import * as Modal from './Modal'
import * as Mail from './Mail'

/**
 * You can register your module here
 * @type {Object}
 */
const modules = {
    Modal,
    Mail
}
/**
 * You can add reducers from external npm modules
 * @type {Object}
 */
const initialReducers = {
    form
}

const initialState = {}

/**
 *
 * @type {object}
 */
const bundled = createModules(modules, {
    initialInitialState: initialState,
    initialReducers
})

const reducers = combineReducers(bundled.reducers)

/**
 * Function to activate the generated bundle
 * @return {object} reducers, actions, inititalState
 */
export default () => {
    const { initialState } = bundled
    return {
        reducers,
        initialState
    }
}
