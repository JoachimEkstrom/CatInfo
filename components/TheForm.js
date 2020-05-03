import React, { Component, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import DataStorage from '../store.js' 
import {Formik, useField, Form} from 'formik'   
import * as Yup from 'yup'

    
const TheForm = () => {

    // const formik = useFormik({
    //   initialValues: {
    //     name: '',
    //     color: '',
    //     numberOfFacts: 1,
    //   },
    //   onSubmit: values => {
    //     alert(JSON.stringify(values, null, 2));
    //     let newCatPerson = {}

    //     newCatPerson.name = values.name
    //     newCatPerson.color = values.color
    //     newCatPerson.number = values.numberOfFacts
    //     newCatPerson.id = DataStorage.catPersonId

    //     DataStorage.catPersons.push(newCatPerson)
    //     DataStorage.catPersonId = DataStorage.catPersonId + 1
    //     formik.resetForm()
    //   },
    // })

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
          <select {...field}{...props}></select>
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
            console.log(newCatPerson)
            resetForm()
            setSubmitting(false)

          }, 1000)
        }
      }  
      >
        {props => (
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
        )}
      </Formik>

      // <form onSubmit={formik.handleSubmit}>
      //     <section>
      //       <label htmlFor="name">Name </label>
      //       <input
      //       id="name"
      //       name="name"
      //       type="text"
      //       onChange={formik.handleChange}
      //       value={formik.values.name}
      //       />
      //       <br></br>
      //       <br></br>
      //       <label htmlFor="color">Choose a color </label>
      //       <input
      //       id="color"
      //       name="color"
      //       type="text"
      //       onChange={formik.handleChange}
      //       value={formik.values.color}
      //       />
      //       <br></br>
      //       <br></br>
      //       <label htmlFor="numberOfFacts">How many facts do you want? </label>
      //       <input
      //       id="numberOfFacts"
      //       name="numberOfFacts"
      //       type="number"
      //       onChange={formik.handleChange}
      //       value={formik.values.numberOfFacts}
      //       />
      //       <button type="submit">Submit</button>
      //     </section>
      // </form>
    )
  }
export default observer(TheForm)