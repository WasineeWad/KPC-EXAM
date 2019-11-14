import React from 'react'
import PropTypes from 'prop-types'
import './TextField.css'

const NormalTextField = (props) => {
  return (
    <div className='input-field'>
      <div className='field-label'>{props.label}:</div>
      {props.required && <div className='required-star'>*</div>}
      <div className='space' />
      <input type='text' name='Name' value=''></input>
    </div>
  )
}

NormalTextField.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired
}

export default NormalTextField