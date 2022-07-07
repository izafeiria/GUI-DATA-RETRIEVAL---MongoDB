import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import ButtonForFirstPage from "./ButtonForFirstPage.jsx";

const Appliances = (props) => {

    // State with list of all checked item
    const [checked, setChecked] = useState(["","","","","","","","",""]);
    const checkList = ["resistiveApplianceModels.oven", "resistiveApplianceModels.dryer","electricVehicleAppliance","solar","waterBoilerAppliances","dishwasherAppliances","washingMachineAppliances", "heatPumpDryerAppliances","heatPumpsAppliances","chairDryerAppliance"];
    const List = ["Oven Appliance", "Dryer Appliance","Electric Vehicle Appliance","Solar","Water Boiler Appliance","Dishwasher Appliance","Washing Machine Appliance", "Heat Pump Dryer Appliance","Heat Pumps Appliance","Chair Dryer Appliance"];

    const [exists, setExists] = useState(["","","","","","","","",""] )

    const [id, setId] = useState('false');

    const navigate = useNavigate();

    const handleId = (e) => {
      if (e.target.checked){
          setId(true)}
      else  {
        setId(false)}
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const exist =  exists.filter(e =>  e);
        const checkData = checked.filter(e =>e);

        console.log(exist, checkData)
        navigate('/models/appliances/results', {state: {appliance : checkData, exist : exist, id: id, name : 'existense'}})
      };
   
    const handleCheck = (event) => {
      const id = event.target.value;

      const key = event.target.id;
      var existence = [...exists]
      var updatedList = [...checked];

      if (event.target.checked) {
        existence[key] = "false"
        updatedList[key] = event.target.value;
        document.getElementById(id).hidden = false;
      } else {
        existence[key] = ""
        updatedList[key] = ""
        document.getElementById(id).hidden = true;
      }

      setChecked(updatedList);
      setExists(existence)
      
    };

    const handleButton = (e) =>{
     const key = e.target.id;
     var existence = [...exists]
     console.log(key)
     if (e.target.checked){
        existence[key] = e.target.value;
        console.log(existence)
    }
    else {existence[key] = "false"
      console.log(existence)}
    setExists(existence)
  }

    // Return classes based on whether item is checked
    var isChecked = (item) =>
      checked.includes(item) ? "checked-item" : "not-checked-item";



    return (

        <div className="first-page ">
               <div><ButtonForFirstPage /></div>
               <div className="d-flex justify-content-center">
                <form className="col-sm-3.5" style={{marginTop: "0px", marginBottom: "200px", padding: "25px", borderRadius: "10px",backgroundColor: "rgb(27, 110, 148, 0.3)"}}  onSubmit={handleSubmit}>
                        <h4 className="text-center" style={{marginBottom: "20px"}} >Appliance's Existence </h4>
                        <div className="checkList">
                            <div className="title">Select appliances you prefer to include in installation models:</div>
                              <div className="list-container">
                                {checkList.map((item, index) => (
                                  
                                <div key={index}>
                                  <input id = {index} value={item} type="checkbox"  onChange={handleCheck} />
                                  <span  className={isChecked(item)}>{List[index]}</span> 

                                    <div id = {item} hidden >
                                    <label style={{margin: "10px"}}  htmlFor="exists"> Check for existence ! </label>
                                    <input id = {index} type="checkbox" name="ids" value="true" style={{margin: "10px"}} onClick={handleButton}/> 
                                    <label style={{margin: "10px" }}  > (uncheck for non-existence, default)</label>
                                    </div>
                                </div>
                              ))}
                            </div>
                          </div>

                        <input type="checkbox" name="ids" value={id} style={{marginTop: "50px", marginBottom: "20px"}} onClick={handleId}/> 
                        <label style={{marginLeft: "20px"}}>  Show me just Installations IDs</label> <br></br>
                        <button type="submit" className="button buttons" style={{margin: "0px", padding: "10px"}}>Click to see results</button>
                </form>
            </div>
            </div>
    )

}

export default Appliances
