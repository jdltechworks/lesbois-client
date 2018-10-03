import React from 'react'
import { render } from 'react-dom'
import reduce from 'lodash/reduce'
import ClientProvider from './providers/ClientProvider'
import './assets/app.scss'


const target = 'app'

const app = document.getElementById(target)

const toProps = (result, value, index) => {
    result[index] = value
    return result
}

const props = reduce(app.dataset, toProps, {})


const clearDataSet = (dataset) => {
    //clear dataset
    for(var i in dataset) {
        delete dataset[i]
    }
}

clearDataSet(app.dataset)





render(<ClientProvider {...props} />, app)
