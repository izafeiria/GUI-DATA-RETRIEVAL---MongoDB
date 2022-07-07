import React, {useState, useEffect}  from 'react'
import Service from '../services/Service'
import {useLocation} from 'react-router-dom';
import ButtonForFirstPage from './ButtonForFirstPage';
import Save from './Save';
import Highlighter from "react-highlight-words";

function CharsResults ({navigation}) {
    const [results, setResults] = useState([])
    const location = useLocation();

    useEffect(() => {
        getChars()
    }, [])
    
    const getChars = () => {
        console.log(location.state.service)
        if (location.state.service === "phase"){
            document.getElementById("phase").hidden=false
            Service.getPhaseMaps(location.state).then((response) => {
                setResults(response.data)
        });
            }
        else {
            document.getElementById("chars").hidden=false
            Service.getCharacteristics(location.state).then((response) => {
                setResults(response.data)
            
            });
        }
        
    };

    return (
    <div className=' first-page '>
        <div className="d-inline-flex flex-row" >
            <ButtonForFirstPage />
            <div className='d-inline-flex justify-content-center '>
            <h2 className="text-center " style ={{color: '#242b2f', margin:"50px" , marginLeft: "400px",padding: "0px"}}>Appliance's Characteristics List</h2>
            </div>
            <div id = "phase"  hidden>
            <Save data={results} filename={"phaseMaps.csv"}/>
            </div>
            <div id = "chars" hidden>
            <Save  data={results} filename={"characteristics.csv"}/>
            </div>
            </div>
            <pre><Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={["installationId", "_id"]}
            autoEscape={true}
            textToHighlight={JSON.stringify(results, null, 10) } /></pre>
    </div>

    )
    
}

export default CharsResults