import React, {useState, useEffect}  from 'react'
import Service from '../services/Service'
import {useLocation} from 'react-router-dom';
import ButtonForFirstPage from  './ButtonForFirstPage';
import Save from './Save';
import Highlighter from "react-highlight-words";

function ApplianceResults ({navigation}) {
    const [results, setResults] = useState([])
    const location = useLocation();

    useEffect(() => {
        getAppliances()
    }, [])
    
    const getAppliances = () => {
        console.log(location.state)
        Service.getAppliances(location.state).then((response) => {
            setResults(response.data)
            console.log(response.data);
        });
    };

    return (
        <div className='first-page'>
            <div className="d-inline-flex flex-row" >
            <ButtonForFirstPage />
             <div className="justify-content-center">
                <h2 className="text-center" style ={{color: '#242b2f', margin:"50px" , marginLeft: "500px", padding: "0px"}}>Installations List</h2>
            </div>
            <Save  data={results} filename={"AppliancesExistence.csv"}/>
            </div>
            <pre><Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={["installationId", "_id"]}
            autoEscape={true}
            textToHighlight={JSON.stringify(results, null, 10)} /></pre>
        </div>

    )
    
}

export default ApplianceResults