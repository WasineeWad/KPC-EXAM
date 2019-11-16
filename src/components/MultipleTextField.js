import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'

const MultipleTextField = (props) => {
  const {label, required, inputBoxs, fieldArrayHelper} = props
  return (
    <div className='input-field'>
      <div className='field-label'>{label}:</div>
      {required && <div className='required-star'>*</div>}
      <div className='space5' />
      <div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          {inputBoxs.length > 0 && inputBoxs.map((input, index) => {
            switch (input.type) {
              case 'normal':
                return (
                  <div key={index}>
                    <Field
                      name={`${fieldArrayHelper.name}.${index}`}
                      className='input-box'
                      style={input.style}
                      type='text'
                      maxLength={input.maxlength}
                      onChange={(event) => {
                        fieldArrayHelper.form.setFieldTouched(`${fieldArrayHelper.name}.${index}`)
                        fieldArrayHelper.form.setFieldValue(`${fieldArrayHelper.name}.${index}`, event.target.value)
                      }}
                    />
                    {index !== inputBoxs.length - 1 && <span style={{padding: 5}}>-</span>}
                  </div>
                )
              case 'dropdown':
                return (
                  <div key={index}>
                    <Field name={`${fieldArrayHelper.name}.${index}`}>
                    {
                      (formikProps) => (
                        <select
                          name={`${fieldArrayHelper.name}.${index}`}
                          className='dropdown-box'
                          id='national-select'
                          style={input.style}
                          value={formikProps.field.value}
                          onChange={(event) => {
                            fieldArrayHelper.form.setFieldTouched(`${fieldArrayHelper.name}.${index}`)
                            fieldArrayHelper.form.setFieldValue(`${fieldArrayHelper.name}.${index}`, event.target.value)
                          }}
                        >
                          {input.options.map(optionItem => <option key={optionItem.value} value={optionItem.value}>{optionItem.display}</option>)}
                        </select>
                      )
                    }
                    </Field>
                    {index !== inputBoxs.length - 1 && <span style={{padding: 5}}>-</span>}
                  </div>
                )
              default:
                return null
            }
          })}
        </div>
        {fieldArrayHelper.form.errors[fieldArrayHelper.name] && fieldArrayHelper.form.touched[fieldArrayHelper.name] ? <div className='error-message'>{fieldArrayHelper.form.errors[fieldArrayHelper.name]}</div> : null}
      </div>
    </div>
  )
}

MultipleTextField.propTypes = {
  label: PropTypes.string,
}

MultipleTextField.defaultProps  = {
  label: ''
}


export default MultipleTextField

