import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const FirstPage = (props) => {
    const navigate = useNavigate();

    const ModelsClick = () => {
        navigate('/models');
    }

    const IDsClick = () => {
        navigate('/models/ids');
    }

    const ExistenceClick = () => {
        navigate('/models/appliances');
    }

    const CharsClick = () => {
        navigate('/models/characteristics');
    }

    const DateClick = () => {
        navigate('/models/date-value');
    }

    const DateAppClick = () => {
        navigate('/models/applianceDate');
    }

    return (
        <div className='first-page'>

                <div className = "container" style={{textAlign:"center"}}>
                <button  className="btn btn-secondary" style = {{margin: "20px", padding: "15px", borderRadius: "20px"}} onClick={ModelsClick}>All Installation Models</button>
                <button  className="btn btn-secondary" style = {{margin: "20px", padding: "15px", borderRadius: "20px"}} onClick={IDsClick}>Only Installation IDs</button>
                <h4 style={{color:"#23779f"}}>For specific Data Requests select from below options..</h4>
                
                <br></br>
                <br></br>

                <div className="container">
                <h1 style={{margin:"30px" , color:"#23779f", marginTop: "100px"}}> What are you looking for ? </h1>
                
                <br></br>
                
                <button className="button buttons" style={{marginLeft: "90px"}} onClick={ExistenceClick}>Appliance's Existence</button>
                <button className="button buttons" style={{marginLeft: "90px"}}  onClick={CharsClick}>Appliance's Characteristics</button>
                <button className="button buttons"  style={{marginLeft: "90px"}} onClick={DateClick}>Installations Depending on a Date</button>
                <button className="button buttons"  style={{marginLeft: "20px"}} onClick={DateAppClick}>Installations Depending on Appliance's Date</button>
                
                </div>
                </div>  
        </div>
    )
    
}

export default FirstPage
