import modules from '../modules'
import createSagaMiddleware from 'redux-saga'
import { createStore, compose, applyMiddleware } from 'redux'

const sagaMiddleware = createSagaMiddleware()

const { reducers, initialState } = modules()

let middlewares = [
    sagaMiddleware
]


const setComposer = (composer) => {

  if(composer) return composer

  return compose

}

export default (composer, request) => {
    const create = setComposer(composer)

    let composeStore = create(
        applyMiddleware(...middlewares),
    )(createStore)

    const store = composeStore(reducers, initialState)

    return {
        store
    }
}
