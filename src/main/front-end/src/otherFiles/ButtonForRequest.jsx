import React from 'react'
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ButtonForRequest = (props) => {
    const navigate = useNavigate();

    const ButtonClick = () => {
        navigate('/');
    }
    const style = {

    }

        return (
            <button className="button buttons" onClick={ButtonClick}>Go back to request</button>
        );
    
}
 
export default ButtonForRequest;