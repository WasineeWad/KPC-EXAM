import React from 'react'
import PropTypes from 'prop-types'
import './TextField.css'

const RadioField = (props) => {
  return (
    <div className='input-field'>
      <div className='field-label'>{props.label}:</div>
      {props.required && <div className='required-star'>*</div>}
      <div className='space' />
      {props.options.map(optionItem => (
        <div>
          <input type='radio' key={optionItem} name='Gender' value={optionItem} />
          <span style={{paddingRight: 15}}>{optionItem}</span>
        </div>
      ))}
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

