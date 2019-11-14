import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import './TextField.css'

require('react-datepicker/dist/react-datepicker.css')

const DateField = (props) => {
  return (
    <div className='input-field'>
      <div className='field-label'>{props.label}:</div>
      {props.required && <div className='required-star'>*</div>}
      <div className='space' />
      <DatePicker selected={new Date()} onChange={date => console.log('date', date)} />
    </div>
  )
}

DateField.propTypes = {
  label: PropTypes.string
}

export default DateField