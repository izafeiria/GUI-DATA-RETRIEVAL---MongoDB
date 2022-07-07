import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import ButtonForFirstPage from "./ButtonForFirstPage.jsx";

const Characteristics = (props) => {
    const [appliance, setValue] = useState("default");
    const [id, setId] = useState("");
    const [onlyid, setonlyId] = useState('false');
    const [size, setSize] = useState('');
    const [comp, setComp] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
      if (e.target.value!=="solar" && e.target.value !== "phaseMaps"){
        document.getElementById("models").style.display = "block"
      }
      else{
       
      document.getElementById("models").style.display = "none"}
      setValue(e.target.value);
      if (e.target.value ==="phaseMaps"){
        document.getElementById("onlyID").disabled = true
      }
      else{
        document.getElementById("onlyID").disabled = false
      }

      
        
      };

    const handleChangeText = (e) => {
        setId(e.target.value);
        if (e.target.value=== ""){        
          document.getElementById("onlyID").disabled=false
          if(e.target.value=== "" && appliance!=="solar"){
              document.getElementById("models").style.display = "block"}}
        else {document.getElementById("onlyID").disabled=true
        document.getElementById("models").style.display = "none"}
      };

    const handleId = (e) => {
      if (e.target.checked && id === ""){
          setonlyId(true)}
      else  {
        setonlyId(false)}
    };

    const handleCompare = (e) => {
      setComp(e.target.value)
    };

    const handleSize = (e) =>{
      if(e.target.value===""){
        document.getElementById("comp").disabled = true
        document.getElementById("comp1").disabled = true
        document.getElementById("comp2").disabled = true
      }
      else{document.getElementById("comp").disabled = false
      document.getElementById("comp1").disabled = false
      document.getElementById("comp2").disabled = false}
      setSize(e.target.value)
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(appliance);
        console.log(id);
        console.log(onlyid, size, comp)
        if (appliance === "phaseMaps"){
          navigate('/models/characteristics/results', {state: {appliance: appliance , id: id, name : 'phaseMaps', service : "phase"}})
        }
        else{
          navigate('/models/characteristics/results', {state: {appliance: appliance , id: id,  onlyId: onlyid, size: size, comp: comp, name : 'chars', service : "other"}})

        }
        

      };

    return (

        <div className="first-page">
           <div><ButtonForFirstPage /> </div>
              <div className="d-flex justify-content-center">
                 <form className="col-sm-4" style={{marginTop: "0px", marginBottom: "200px", padding: "25px", borderRadius: "10px",backgroundColor: "rgb(27, 110, 148, 0.3)"}}  onSubmit={handleSubmit}>
                        
                        <h4 className="text-center" style={{marginBottom: "20px"}} >Appliance's Characteristics</h4>
                        <select className='form-select' defaultValue={appliance} onChange={handleChange}>
                        <option value="default" disabled > Choose Appliance</option>
                        <option value="solar">Solar</option>
                        <option value="resistiveApplianceModels.oven">Oven</option>
                        <option value="resistiveApplianceModels.dryer">Dryer</option>
                        <option value="heatPumpsAppliances">Heat Pumps</option>
                        <option value="heatPumpDryerAppliances">Heat Pump Dryer</option>
                        <option value="washingMachineAppliances">Washing Machine</option>
                        <option value="dishwasherAppliances">Dishwasher Machine</option>
                        <option value="waterBoilerAppliances">Water Boiler</option>
                        <option value="electricVehicleAppliance">Electric Vehicle</option>
                        <option value="phaseMaps">Models per Phase Map</option>
                        </select>
                       
                        <input type="text" className="form-control" placeholder="Type Installation ID or let it blank for all models" value={id} style={{marginTop: "20px"}} onChange={handleChangeText}></input> <br></br>
                        <br></br>

                        <div id="models" className="numberOfModels" style={{display: "none", backgroundColor:"rgb(27, 110, 148, 0.4)", borderRadius: "10px",  padding: "25px"}} >
                        <h6 className="text-center" style={{marginBottom: "20px"}}>Number of Models</h6>
                        <input type="number" className="form-control" placeholder="Give the size" value={size} style={{marginTop: "20px"}} onChange={handleSize}></input> 
                        <div onChange={handleCompare} defaultValue={comp}>
                            <p style={{marginTop: "40px"}}>Choose your preference</p>
                            <input id ="comp" type="radio"  name="comp" value="="disabled/>
                            <label style={{marginLeft: "20px"}}  htmlFor="before">Equals</label>

                            <input id ="comp1" style={{marginLeft: "40px"}} type="radio" name="comp" value=">" disabled/>
                            <label style={{marginLeft: "20px"}} htmlFor="after">Greater</label>

                            <input id ="comp2" style={{marginLeft: "40px"}} type="radio" name="comp" value="<" disabled/>
                            <label style={{marginLeft: "20px"}} htmlFor="after">Less</label>
                        </div>
                        </div>
                        <br></br>
                        <input  type="checkbox" name="ids" id="onlyID" value={onlyid} style={{marginTop: "50px", marginBottom: "20px"}} on onClick={handleId}/> 
                        <label style={{marginLeft: "20px"}}>  Show me just Installations IDs</label> <br></br>
                      
                        <button type="submit" className="button buttons" style={{margin: "0px", padding: "10px", marginTop: "40px"}}>Click to see results</button>
                
            </form>
        </div>
      </div>
    )
    
}

export default Characteristics