import { useEffect } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import DataStorage from '../store.js'
import TheForm from '../components/TheForm'
import ListCatPersons from '../components/ListCatPersons'


const Body = styled.body`
  background-color: rgba(0, 0, 0, 0.2);
  margin: 70px auto;
  width: 500px;
  height: auto;
`     

const TitleText = styled.h1`
  text-align: center;
  background-color: rgba(0, 0, 0, 0.4);
  margin: 50px auto;
  width: 500px;
  height: auto;
`     


const Index = () => {

    useEffect(() => {
        DataStorage.selectedCatPerson = 0
    },[])

   
    return (

        <div>
            <Body>

                <Head>
                    <title>The Cat Person App!</title>
                </Head>

                <TitleText>The Cat Information App!</TitleText>

                <TheForm></TheForm>
                <ListCatPersons></ListCatPersons>
                            
            </Body>
                
        </div>
    )


}

export default observer(Index)