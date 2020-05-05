import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'



const GetCatInfo = (props) => {

    const [catInfo, setCatInfo] = useState([])
    useEffect(() => {
        let array = []
        fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=${props.number}`) 
            .then((response) => response.json())
            .then((result) => {
            
                if (result.length == undefined){

                    array.push(result.text)

                } else {

                    for( let i = 0; i < result.length; i++ ){
                        array.push(result[i].text)
                    }
                }

                setCatInfo(array)
                
            })

    }, [props.number])


    return (
        <div>
            { catInfo.map(cat => <p key={cat}>{cat}</p>) }
        </div>
    )

}


export default observer(GetCatInfo)