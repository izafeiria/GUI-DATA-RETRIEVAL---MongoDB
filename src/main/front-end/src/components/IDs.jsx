import React, {useState, useEffect}  from 'react'
import Service from '../services/Service'
import ButtonForFirstPage from './ButtonForFirstPage'
import Save from './Save'


function IDs () {
    const [IDs, setID] = useState([])

    useEffect(() => { getID() }, [])

    const getID = () => {

        Service.getIDs().then((response) => {
            setID(response.data)
            console.log(response.data);
        });
    };
    

    return (
    <div className='first-page'>
        <div className="d-inline-flex flex-row" >
            <ButtonForFirstPage />
            <div className="justify-content-center">
            <h2 className="text-center" style ={{color: '#242b2f', margin:"50px" , marginLeft: "450px",padding: "0px"}}>Installation Models List</h2>
            </div>
            <Save  data={IDs} filename="modelsIds.csv"/>
        </div>
        <pre style ={{color: '#242b2f'}}>{JSON.stringify(IDs, null, 2) }</pre>
       
    </div>

    )
    
}

export default IDs