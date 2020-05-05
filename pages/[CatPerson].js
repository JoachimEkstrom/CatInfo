import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { observer } from 'mobx-react'
import DataStorage from '../store'
import GetCatInfo from '../components/GetCatInfo'





const CatPerson = () => {

   
    let router = useRouter()
    const { CatPerson } = router.query
    const personId = Number(CatPerson)
    
    return (

        <div>
            <Head>
                <title>The Cat</title>
            </Head>
            <h1>The Bazinga!</h1>
            <div> { DataStorage.catPersons[personId].name} </div>
            <GetCatInfo number= { DataStorage.catPersons[personId].number }></GetCatInfo>

            <Link href='/index'><a>Back to startpage</a></Link>
        
        </div>
    )
   
}




export default observer(CatPerson)