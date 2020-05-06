import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { observer } from 'mobx-react'
import DataStorage from '../store/index'
import GetCatInfo from '../components/GetCatInfo'
import styled from 'styled-components'


const Div = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    margin: 70px auto;
    width: 500px;
    height: auto;
`     
const TitleText = styled.h1`
    text-align: center;
    background-color: rgba(0, 0, 0, 0.1);
    margin: 50px auto;
    width: 500px;
    height: auto;
`     

const Styleda = styled.a`
    margin: 10px;
    font-size: 20px;
    width:300px;
    align-content: center;
    text-align: center;
    display: block;
    margin-right: auto;
    margin-left: auto;
    height: 30px;
    padding-bottom: 10px;
    text-decoration: underline;
    :hover {
        cursor: pointer;
    }
`


const CatPerson = () => {

   
    let router = useRouter()
    const { CatPerson } = router.query
    const personId = Number(CatPerson)
    


    return (
        <div>
            <Div>
            <Head>
                <title>{ DataStorage.catPersons[personId].name}'s Cat infos!</title>
            </Head>
            <TitleText style={{color:`${DataStorage.catPersons[personId].color}`}}>{ DataStorage.catPersons[personId].name}'s Cat infos!</TitleText>
            
            <GetCatInfo number= { DataStorage.catPersons[personId].number }></GetCatInfo>

            <Link href='/index'><Styleda>Back to startpage</Styleda></Link>

            </Div>
        </div>

    ) 
}




export default observer(CatPerson)