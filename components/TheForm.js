import { observer } from 'mobx-react'
import styled from 'styled-components'
import DataStorage from '../store.js' 
import {Formik, useField, Form} from 'formik'   
import * as Yup from 'yup'


const StyleForm = styled.form`
  form {
      display: flex;
      flex-direction: column;
      width: 400px;
      margin: 50px auto;
      h1 {
        text-align: center;
      }

      div {
        width: 400px;
        position: relative;
      }
      div label {
        padding-top: 2px;
        display:inline-block;
        font-size: 22px;
        height: 30px;
        width: 160px;
        margin: 5px;
      }
      div input{
        float:right;
        font-size: 22px;
        width: 200px;
        border: 6px;
        height: 30px;
        margin: 5px;
        
      }
      div select {
        float:right;
        font-size: 22px;
        width: 203px;
        height: 30px;
        margin: 5px;
      }
      .error {
        color: red;
        font-size: 12px;
      }
  }
  button {
    background: #1997BF;
    padding: 10px;
    color: white;
    margin-top: 20px;
    border-radius: 5px;
    font-size: 16px;
  }
  button:hover {
    background: #FF97BF;
  }
`



const TheForm = () => {

  const NameInput = ({ label, ...props}) => {
    const [field, meta] = useField(props)

    return (
      <div>
        <label htmlFor= {props.id || props.name}>{label}</label>
        <input className="text-input" {...field}{...props}></input>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null }
      </div>
    )
  }

  const ColorInput = ({ label, ...props}) => {
    const [field, meta] = useField(props)

    return (
      <div>
        <label htmlFor= {props.id || props.color}>{label}</label>
        <select className="select-input"{...field}{...props}></select>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null }
      </div>
    )
  }

  const NumberInput = ({ label, ...props}) => {
    const [field, meta] = useField(props)

    return (
      <div>
        <label htmlFor= {props.id || props.number}>{label}</label>
        <input className="number-input" {...field}{...props}></input>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null }
      </div>
    )
  }

  return (

    <Formik
      initialValues={{
        name: '',
        color: '',
        numberOfFacts : 1
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, 'Need 3 chars or more!')
          .required(),
        color: Yup.string()
          .min(3, 'Need 3 chars or more!')
          .required(),
        numberOfFacts: Yup.number()
          .min(1, 'Need atleast one fact...')
          .max(10, 'No more than ten')
          .positive('Must be a positive number!')
          .required()

      })}
      onSubmit = {( values, { setSubmitting, resetForm }) => {

        setTimeout(() => {

          alert(JSON.stringify(values, null, 2))
          let newCatPerson = {}
  
          newCatPerson.name = values.name
          newCatPerson.color = values.color
          newCatPerson.number = values.numberOfFacts
          newCatPerson.id = DataStorage.catPersonId
  
          DataStorage.catPersons.push(newCatPerson)
          DataStorage.catPersonId = DataStorage.catPersonId + 1
          resetForm()
          setSubmitting(false)

        }, 1000)
      }
    }  
    >
      {props => (
        <StyleForm>
          <Form>
            <h1>Add CatPerson!</h1>
            <NameInput label="Name" name="name" type="text" placeholder="Enter name here"/>
            <ColorInput label="Color" name="color">
              <option value="">Select a color</option>
              <option value="red">Red</option>
              <option value="yellow">Yellow</option>
              <option value="pink">Pink</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </ColorInput>
            <NumberInput label="Number of facts?" name="numberOfFacts" type="number"/>
            <button type="submit">{props.isSubmitting ? 'Saving...' : 'Submit'} </button>
          </Form>
        </StyleForm>
      )}
    </Formik>

  )
}
export default observer(TheForm)