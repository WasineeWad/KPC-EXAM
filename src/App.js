import React, {Component} from 'react'
import { Formik, Field, FieldArray } from 'formik'
import * as Yup from 'yup'
import './App.css'
import NormalTextField from './components/NormalTextField'
import DropdownTextFileld from './components/DropdownTextFileld'
import DateField from './components/DateField'
import RadioField from './components/RadioField'
import MultipleTextField from './components/MultipleTextField'

const nationalOptionsList = ['Thai', 'American', 'Japanese']
const titleOptionsList = ['Mr', 'Mrs', 'Miss', 'Ms']
const radioOptions = ['Male', 'Female', 'Unisex']
const citizenIDFieldList = [
  {type: 'normal', maxlength: 1, style: {width: 25}},
  {type: 'normal', maxlength: 4, style: {width: 60}},
  {type: 'normal', maxlength: 5, style: {width: 60}},
  {type: 'normal', maxlength: 2, style: {width: 45}},
  {type: 'normal', maxlength: 1, style: {width: 25}},
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

const FormValidateSchema = Yup.object().shape({
  titleName: Yup.string()
    .required('Please select name title.'),
  firstName: Yup.string()
    .required('Please fill your firstname.'),
  lastName: Yup.string()
    .required('Please fill your lastname.'),
  birthday: Yup.string()
    .required('Please select your birth date.'),
  mobilePhone: Yup.array()
    .of(Yup.string().required('Please fill your mobile phone.')),
  expectSalary: Yup.string()
    .required('Please fill your expect salary.')
});

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <Formik
          initialValues={{
            titleName: 'Mr',
            firstName: '',
            lastName: '',
            birthday: new Date(),
            nationality: '',
            citizenID: '',
            gender: 'Male',
            mobilePhone: ['TH'],
            passportNo: '',
            expectSalary: ''
          }}
          validationSchema={FormValidateSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              localStorage.setItem(`${values.citizenID}`, JSON.stringify(values))
              setSubmitting(false);
            }, 400);
          }}
        >
          {
            (formikProps) => (
              <form onSubmit={formikProps.handleSubmit}>
                <div className='form-section'>
                  <div className='form-row'>
                    <Field
                      name={'titleName'}
                      component={DropdownTextFileld}
                      label='Title'
                      options={titleOptionsList}
                      required={true}
                    />
                    <Field name={'firstName'} component={NormalTextField} label='First name' required={true} />
                    <Field name={'lastName'} component={NormalTextField} label='Last name' required={true} />
                  </div>
                  <div className='form-row'>
                    <Field name={'birthday'} component={DateField} label='Birthday' required={true} />
                    <Field name={'nationality'} component={DropdownTextFileld} label='Nationality' options={nationalOptionsList} />
                  </div>
                  <div className='form-row'>
                    <FieldArray name={'citizenID'} render={(arrayHelpers) => <MultipleTextField label='CitizenID' inputBoxs={citizenIDFieldList} fieldArrayHelper={arrayHelpers} />} />
                  </div>
                  <div className='form-row'>
                    <Field name={'gender'} component={RadioField} label='Gender' options={radioOptions}/>
                  </div>
                  <div className='form-row'>
                    <FieldArray name={'mobilePhone'} render={(arrayHelpers) => <MultipleTextField label='Mobile Phone' inputBoxs={mobilePhoneFieldList} fieldArrayHelper={arrayHelpers} required={true}/>} />
                  </div>
                  <div className='form-row'>
                    <Field name={'passportNo'} component={NormalTextField} label='Passport No' />
                  </div>
                  <div className='form-row'>
                    <Field name={'expectSalary'} component={NormalTextField} label='Expect salary' required={true} />
                    <span>THB</span>
                  </div>
                  <div className='button-row'>
                    <button type="submit">SUBMIT</button>
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
