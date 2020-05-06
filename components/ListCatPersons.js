import { observer } from 'mobx-react'
import DataStorage from '../store/index.js'
import Link from 'next/link'
import styled from 'styled-components'


const Styleda = styled.a`
    margin: 10px;
    font-size: 30px;
    width:200px;
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
const StyledLabel = styled.label`
    display: block;
    font-size: 22px;
    text-align: center;
`

const ListCatPersons = () => {

    return (
        <div>
            <div>
                {DataStorage.catPersons.length > 0 && <StyledLabel>Click on catPerson below to checkout facts!</StyledLabel>}
                
                {DataStorage.catPersons.map((Persons, index) => (
                
                    <div key={index}>
                        <Link href='/[CatPerson]' as={`/${Persons.id}`}>
                            <Styleda onClick={() => {
                                DataStorage.selectedCatPerson = `${Persons.id}`
                            }}>{Persons.name}</Styleda>    
                        </Link>   
                    </div>   
                    )
                )}
            </div>
        </div>
    )

}


export default observer(ListCatPersons)