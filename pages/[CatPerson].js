import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router'
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import DataStorage from '../store'
import GetCatInfo from '../components/GetCatInfo'





const CatPerson = () => {

   
    let router = useRouter()
    const { CatPerson } = router.query
    const personId = Number(CatPerson)
    console.log(personId)
    console.log(DataStorage.catPersons[personId].number)
    
    return (

        <div>
            <Head>
                <title>The Cat</title>
            </Head>
            <Navbar></Navbar>
            <h1>The Bazinga!</h1>
            <div> { DataStorage.catPersons[personId].name} </div>
            <GetCatInfo number= { DataStorage.catPersons[personId].number }></GetCatInfo>

        
        </div>
    )
   
}




export default observer(CatPerson)