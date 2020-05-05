import { observer } from 'mobx-react'
import DataStorage from '../store.js'
import Link from 'next/link'
import styled from 'styled-components'


const StyleDiv = styled.div`
    div a {
        margin: 10px;
        font-size: 30px;
        display: flex;
        justify-content: center;
        width: 500px;
        height: 30px;
        padding-bottom: 10px;
    }
    label {
        display: block;
        font-size: 22px;
        text-align: center;
    }

`


const ListCatPersons = () => {

    return (
        <div>
            <StyleDiv>
            {DataStorage.catPersons.length > 0 && <label>Click on catPerson below to checkout facts!</label>}
            {DataStorage.catPersons.map((Persons, index) => (
            
                <div key={index}>
                    <Link href='/[CatPerson]' as={`/${Persons.id}`}>
                        <a onClick={() => {
                            DataStorage.selectedCatPerson = `${Persons.id}`
                         }}>{Persons.name}</a>    
                    </Link>   
                </div>   
                )
            )}
            </StyleDiv>
        </div>
    )

}


export default observer(ListCatPersons)