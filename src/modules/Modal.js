import createActionTypes, { createReducer } from '@jdltechworks/redux-utils'

export const types = new createActionTypes(
    'OPEN',
    'CLOSE',
).prefix('modal').all(true)

export const initialState = {
    isOpen: false,
    component: null
}

export const actions = {
    open(component) {
        return (dispatch, getState) => {
            dispatch({type: types.OPEN, component})
        }
    },
    close() {
        return (dispatch, getState) => {
            dispatch({type: types.CLOSE})
        }
    }
}

export const reducer = createReducer({
    [types.OPEN]: (state, {component}) => {
        return {
            ...state,
            component,
            isOpen: true
        }
    },
    [types.CLOSE]: (state) => {
        return {
            ...state,
            component: null,
            isOpen: false
        }
    }
})
