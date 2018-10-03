import createActionTypes, { createReducer } from '@jdltechworks/redux-utils'
import map from 'lodash/map'

export const types = new createActionTypes(
    'SENDING',
    'SENT',
    'ERROR'
).prefix('mail').all(true)

export const initialState = {
    isSending: false,
    isSent: false,
    values: null
}

export const actions = {
    sendMail(values, token) {
        return (dispatch, getState) => {
            const body = new FormData()
            dispatch({type: types.SENDING})
            map(values, (value, key) => body.append(key, value))

            return fetch('/api/contact/', {
                method: 'POST',
                body,
                headers: new Headers({'X-CSRFToken': token}),
                credentials: 'same-origin',
            })
            .then((response) => response.json())
            .then((message) => {
                dispatch({type: types.SENT, message})
                alert("NA SEND NA IMONG EMAIL DONG! BALIK LANG UGMA!")
            })
            .catch(err => dispatch({type: types.ERROR, err}))
        }
    }
}

export const reducer = createReducer({
    [types.SENDING]: (state) => {
        return {
            ...state,
            isSending: true
        }
    },
    [types.SENT]: (state) => {
        return {
            ...state,
            isSending: false
        }
    }
})
