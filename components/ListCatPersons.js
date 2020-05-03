import React, { Component, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import DataStorage from '../store.js'
import Link from 'next/link'


const ListCatPersons = () => {

    return (
        <div>
            {DataStorage.catPersons.map((Persons, index) => (
            
                <div key={index}>
                    <Link href='/[CatPerson]' as={`/${Persons.id}`}>
                        <a>{Persons.name}</a>    
                    </Link>   
                </div>   
                )
            )}
        </div>
    )

}


export default observer(ListCatPersons)