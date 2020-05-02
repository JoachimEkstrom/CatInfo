import React, { Component, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import DataStorage from '../store.js'
import Link from 'next/link'


const ListCatPersons = () => {

    return (
        <div>
            {DataStorage.catPersons.map(Persons => (

                <Link href="/[CatPerson]">

                  <a key={Persons.name}>{Persons.name}</a>

                </Link>   
                  
            )
            )}
        </div>
    )

}


export default observer(ListCatPersons)