import React, { Component, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import DataStorage from '../store.js' 
import {useFormik} from 'formik'   

    
const Form = () => {

    const formik = useFormik({
      initialValues: {
        name: '',
        color: '',
        numberOfFacts: 1,
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        let newCatPerson = {}

        newCatPerson.name = values.name
        newCatPerson.color = values.color
        newCatPerson.number = values.number

        DataStorage.catPersons.push(newCatPerson)

      },
    })


    return (
      <form onSubmit={formik.handleSubmit}>
          <section>
            <label htmlFor="name">Name </label>
            <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            />
            <br></br>
            <br></br>
            <label htmlFor="color">Choose a color </label>
            <input
            id="color"
            name="color"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.color}
            />
            <br></br>
            <br></br>
            <label htmlFor="numberOfFacts">How many facts do you want? </label>
            <input
            id="numberOfFacts"
            name="numberOfFacts"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.numberOfFacts}
            />
            <button type="submit">Submit</button>
          </section>
      </form>
    )
  }
export default observer(Form)