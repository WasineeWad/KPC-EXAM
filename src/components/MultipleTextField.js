import React from 'react'
import PropTypes from 'prop-types'

const MultipleTextField = (props) => {
  return (
    <div className='input-field'>
      <div className='field-label'>{props.label}:</div>
      {props.required && <div className='required-star'>*</div>}
      <div className='space' />
      {props.inputBoxs.map((input, index) => {
        switch (input.type) {
          case 'normal':
            return (
              <div>
                <input type='text' value='' style={input.style} onChange={() => console.log('change')} />
                {index !== props.inputBoxs.length - 1 && <span>-</span>}
              </div>
            )
            // break;
          case 'dropdown':
            return (
              <div>
                <select name='national' id='national-select' defaultValue={input.defaultValue} style={input.style}>
                  {input.options.map(optionItem => <option key={optionItem.value} value={optionItem.value}>{optionItem.display}</option>)}
                </select>
                {index !== props.inputBoxs.length - 1 && <span>-</span>}
              </div>
            )
          default:
            return <input type='text' value='' onChange={() => console.log('change')} />
        }
      })}
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

