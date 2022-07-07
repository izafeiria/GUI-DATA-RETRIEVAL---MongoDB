import React, {useState, useEffect}  from 'react'
import Service from '../services/Service'
import ButtonForFirstPage from './ButtonForFirstPage'
import Save from './Save'
import Highlighter from "react-highlight-words";

function AllModels () {
    const [models, setModels] = useState([])
      useEffect(() => { getModels() },  [])

    const getModels= () => {

        Service.getModels().then((response) => {
            setModels(response.data)
            console.log(response);
        
        });
        
    };


    return (
    <div className='first-page'>
        <div className="d-inline-flex flex-row" >
            <ButtonForFirstPage />
            <div className="justify-content-center">
            <h2 className="text-center" style ={{color: '#242b2f', margin:"50px" , marginLeft: "450px",padding: "0px"}}>Installation Models List</h2>
            </div>
            <Save  data={models} filename={"models.csv"}  />
        </div>
        <pre><Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={["installationId", "_id"]}
            autoEscape={true}
            textToHighlight={JSON.stringify(models, null, 10) } 
        /></pre>
        
       
    </div>

    )
    
}

export default AllModels

//<pre style ={{color: '#242b2f'}}>{JSON.stringify(models, null, 2) }</pre>
//<pre style ={{color: '#242b2f'}}>{JSON.stringify(models, null, 2) }</pre>
