import React from 'react'
import PropTypes from 'prop-types'
import './TextField.css'

const DropdownTextFileld = (props) => {
  const {label, required, options, form, field} = props
  return (
    <div className='input-field'>
      <div className='field-label'>{label}:</div>
      {required && <div className='required-star'>*</div>}
      <div className='space' />
      <div>
        <select
          name='national'
          id='national-select'
          value={field.value}
          onChange={(event) => {
            form.setFieldTouched(field.name)
            form.setFieldValue(field.name, event.target.value)
          }}
        >
          <option value=''>--Please choose an option--</option>
          {options.map(optionItem => <option key={optionItem} value={optionItem}>{optionItem}</option>)}
        </select>
        {form.errors[field.name] && form.touched[field.name] ? <div className='error-message'>{form.errors[field.name]}</div> : null}
      </div>
    </div>
  )
}

DropdownTextFileld.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  required: PropTypes.bool,
  defaultValue: PropTypes.string
}

DropdownTextFileld.defaultProps  = {
  label: '',
  options: [],
  defaultValue: '',
  required: false
}

export default DropdownTextFileld

