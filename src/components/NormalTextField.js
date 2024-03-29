import React from 'react'
import PropTypes from 'prop-types'
import './TextField.css'

const NormalTextField = (props) => {
  const {label, required, form, field} = props
  return (
    <div>
      <div className='input-field'>
        <div className='field-label'>{label}:</div>
        {required && <div className='required-star'>*</div>}
        <div className='space5' />
        <div>
          <input
            type='text'
            className='input-box'
            name='Name'
            value={field.value}
            onChange={(event) => {
              form.setFieldTouched(field.name)
              form.setFieldValue(field.name, event.target.value)
            }}
          />
          {form.errors[field.name] && form.touched[field.name] ? <div className='error-message'>{form.errors[field.name]}</div> : null}
        </div>
      </div>
    </div>
  )
}

NormalTextField.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool
}

NormalTextField.defaultProps  = {
  label: '',
  required: false
}

export default NormalTextField