import React from 'react'
import { Field } from 'redux-form'

/**
 * Must be binded inside a react render / component
 * @param  {object} fieldConfig configuration of the field that you declared in a react/redux form
 * @param  {string} field       name of the field
 * @return {react component}             return an html that is generated from react
 */


export const renderField = function(fieldConfig, field) {
    return(
        <Field key={field}
            type={fieldConfig.type}
            name={field} config={fieldConfig}
            component={FieldSetter}
            label={fieldConfig.label} />
    )
}

const textAreaConfig = (type) => {
    if(type === 'textarea') return ''
    return 'input-lg'
}

export const FieldSetter = function(_field) {

  let { meta, input, label, config } = _field
  const { rows, type } = config
  const setClass = textAreaConfig(type)
  console.log(meta);

  const isFail = (meta.error && !meta.pristine) ||
                (meta.submitFailed && meta.pristine)

  return (
    <div  className={`form-group ${isFail ? 'has-error' : ''}`}>
      <config.tag
            {...input}
            rows={rows}
            type={type}
            className={`form-input ${setClass}`}
            placeholder={label} />
      {meta.touched && meta.error ? <small>{meta.error}</small> : null}
    </div>
  )
}
