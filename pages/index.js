import React, { Component } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import GetCatInfo from '../components/GetCatInfo'
import { observer } from 'mobx-react'
import DataStorage from '../store'
import TheForm from '../components/TheForm'
import ListCatPersons from '../components/ListCatPersons'


class Index extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }
    }
    
    addCatPerson() {


        let value = this.state.name
        DataStorage.catPersons.push(value);
        this.setState({name: ''})

    }
    

    render() {
        
        return (

            <div>
                <Head>
                    <title>The Cat Person App!</title>
                </Head>
                <Navbar></Navbar>
                <h1>The Cat Person App!</h1>

                <TheForm></TheForm>
                <ListCatPersons></ListCatPersons>
                    
            </div>
        )

    }

}

export default observer(Index)