import React from 'react'
import PropTypes from 'prop-types'
import './TextField.css'

const RadioField = (props) => {
  const {label, options, required, form, field} = props
  return (
    <div>
      <div className='input-field'>
        <div className='field-label'>{label}:</div>
        {required && <div className='required-star'>*</div>}
        <div className='space5' />
        {options.map((optionItem, index) => (
          <div key={index}>
            <input
              type='radio'
              key={optionItem}
              name={field.name}
              value={optionItem}
              checked={optionItem === field.value}
              onChange={(event) => form.setFieldValue(field.name, event.target.value)}
            />
            <span style={{paddingRight: 15}}>{optionItem}</span>
          </div>
        ))}
      </div>
      {form.errors[field.name] && form.touched[field.name] ? <div>{form.errors[field.name]}</div> : null}
    </div>
  )
}

RadioField.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  required: PropTypes.bool,
  defaultValue: PropTypes.string
}

RadioField.defaultProps  = {
  label: '',
  options: [],
  required: false
}

export default RadioField

