import React, {Component} from 'react'
import { Formik, Field } from 'formik'
import './App.css'
import NormalTextField from './components/NormalTextField'
import DropdownTextFileld from './components/DropdownTextFileld'
import DateField from './components/DateField'
import RadioField from './components/RadioField'
import MultipleTextField from './components/MultipleTextField'

export class App extends Component {
  static propTypes = {

  }

  render() {
    const nationalOptionsList = ['Thai', 'American', 'Japanese']
    const titleOptionsList = ['Mr', 'Mrs', 'Miss', 'Ms']
    const radioOptions = ['Male', 'Female', 'Unisex']
    const citizenIDFieldList = [
      {type: 'normal', style: {width: 25}},
      {type: 'normal', style: {width: 60}},
      {type: 'normal', style: {width: 60}},
      {type: 'normal', style: {width: 60}},
      {type: 'normal', style: {width: 25}},
    ]
    const mobilePhoneFieldList = [
      {
        type: 'dropdown',
        defaultValue: 'TH',
        style: {width: 55},
        options: [
          {value: 'TH', display: '+66'},
          {value: 'EN', display: '+00'}
        ]},
      {
        type: 'normal',
        style: {width: 150}
      }
    ]
    return (
      <div className='App'>
        <Formik>
          {
            (formikProps) => (
              <form>
                <div className='form-section'>
                  <div className='form-row'>
                    <Field component={DropdownTextFileld} label='Title' options={titleOptionsList} defaultValue={'Mr'} required={true} />
                    <Field component={NormalTextField} label='First name' required={true} />
                    <Field component={NormalTextField} label='Last name' required={true} />
                  </div>
                  <div className='form-row'>
                    <Field component={DateField} label='Birthday' required={true} />
                    <Field component={DropdownTextFileld} label='Nationality' options={nationalOptionsList} />
                  </div>
                  <div className='form-row'>
                    <MultipleTextField label='CitizenID' inputBoxs={citizenIDFieldList}/>
                  </div>
                  <div className='form-row'>
                    <RadioField label='Gender' options={radioOptions}/>
                  </div>
                  <div className='form-row'>
                    <MultipleTextField label='Mobile Phone' inputBoxs={mobilePhoneFieldList} required={true}/>
                  </div>
                  <div className='form-row'>
                    <NormalTextField label='Passport No' />
                  </div>
                  <div className='form-row'>
                    <NormalTextField label='Expect salary' required={true} />
                    <span>THB</span>
                  </div>
                  <div className='button-row'>
                    <button type="button">SUBMIT</button>
                  </div>
                </div>
              </form>
            )
          }
        </Formik>
      </div>
    )
  }
}

export default App
