import Head from 'next/head'
import Navbar from '../components/Navbar'
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import DataStorage from '../store'
import GetCatInfo from '../components/GetCatInfo'


class CatPerson extends Component {




    render() {
        
        return (

            <div>
                <Head>
                    <title>The Cat</title>
                </Head>
                <Navbar></Navbar>
                <h1>The Caten</h1>
                <div> { DataStorage.name} </div>
                <GetCatInfo name= {DataStorage.name}></GetCatInfo>

           
            </div>
        )
    } 
}




export default observer(CatPerson)