import React from 'react'
import PropTypes from 'prop-types'
import './TextField.css'

const DropdownTextFileld = (props) => {
  return (
    <div className='input-field'>
      <div className='field-label'>{props.label}:</div>
      {props.required && <div className='required-star'>*</div>}
      <div className='space' />
      <select name='national' id='national-select' defaultValue={props.defaultValue}>
        <option value=''>--Please choose an option--</option>
        {props.options.map(optionItem => <option key={optionItem} value={optionItem}>{optionItem}</option>)}
      </select>
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

