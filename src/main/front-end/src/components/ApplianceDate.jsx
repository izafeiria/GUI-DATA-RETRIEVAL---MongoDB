import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from 'react-bootstrap';
import ButtonForFirstPage from "./ButtonForFirstPage.jsx";


const ApplianceDate = (props) => {
    const [appliance, setValue] = useState("default");
    const [date, setDate] = useState("");
    const [compare, setCompare] = useState();
    const [id, setId] = useState('false');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setValue(e.target.value);
      };

    const handleDate = (e) => {
        setDate(e.target.value);
    };

    const handleCompare = (e) => {
        setCompare(e.target.value);
    };

    const handleId = (e) => {
        if (e.target.checked){
            setId(true)}
        else  {
          setId(false)}
      };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(appliance, date, compare,appliance,id);
        navigate('/models/applianceDate/results', {state: {appliance: appliance , date : date, when: compare, id: id, name: 'app'}})
      };
  

    return (
        <div className="first-page "  >
                <div><ButtonForFirstPage /></div>
            <div className="d-flex justify-content-center">
            <form className="col-sm-3.5" style={{marginTop: "0px", marginBottom: "100px", padding: "25px", borderRadius: "10px",backgroundColor: "rgb(27, 110, 148, 0.3)"}}  onSubmit={handleSubmit}>
               
                <h4 className="text-center" style={{marginBottom: "20px"}} >Data Retrieval Depending on Appliance's Date </h4><br></br>
                        <select className='form-select' defaultValue={appliance} onChange={handleChange}>
                        <option value="default" disabled > Choose Appliance</option>
                        <option value="resistiveApplianceModels.oven.date">Oven</option>
                        <option value="resistiveApplianceModels.dryer.date">Dryer</option>
                        <option value="heatPumpsAppliances.date">Heat Pumps</option>
                        <option value="heatPumpDryerAppliances.date">Heat Pump Dryer</option>
                        <option value="washingMachineAppliances.date">Washing Machine</option>
                        <option value="chairDryerAppliance.date">Chair Dryer Machine</option>
                        <option value="dishwasherAppliances.date">Dishwasher Machine</option>
                        <option value="waterBoilerAppliances.date">Water Boiler</option>
                        <option value="electricVehicleAppliance.date">Electric Vehicle</option>
                        </select><br></br>

                        <div>
                            <div className="row">
                                <div className="col-md-6">
                                <Form.Group controlId="dfc">
                                        <Form.Label>Give the Date</Form.Label>
                                        <Form.Control type="date" value={date} name="dfc" onChange={handleDate} placeholder="Date for compare" />
                                </Form.Group>
                                </div>
                            </div>
                        </div>

                        <div onChange={handleCompare} defaultValue={compare}>
                            <p style={{marginTop: "40px"}}>Do you want installations before or after the given date ?</p>
                            <input type="radio"  name="when" value="before"/>
                            <label style={{marginLeft: "20px"}}  htmlFor="before"> Before (exclusive)</label>

                            <input style={{marginLeft: "40px"}} type="radio" name="when" value="after"/>
                            <label style={{marginLeft: "20px"}} htmlFor="after">After (inclusive)</label>
                        </div>

                        <input type="checkbox" name="ids" value={id} style={{marginTop: "50px"}} onChange={handleId}/> 
                        <label style={{marginLeft: "20px"}}>  Show me just Installations IDs</label> <br></br>
                        <button type="submit" className="button buttons" style={{margin: "0px", padding: "10px", marginTop: "25px"}}>Click to see results</button>
                
            </form>
        </div>
    </div>
    )
    
}

export default ApplianceDate
