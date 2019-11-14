import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import './TextField.css'

require('react-datepicker/dist/react-datepicker.css')

const DateField = (props) => {
  const {label, required, form, field} = props
  return (
    <div className='input-field'>
      <div className='field-label'>{label}:</div>
      {required && <div className='required-star'>*</div>}
      <div className='space' />
      <div>
        <DatePicker selected={new Date()} onChange={date => form.setFieldValue(field.name, date)} />
        {form.errors[field.name] && form.touched[field.name] ? <div className='error-message'>{form.errors[field.name]}</div> : null}
      </div>
    </div>
  )
}

DateField.propTypes = {
  label: PropTypes.string
}

export default DateField