import React from 'react'
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ButtonForFirstPage = (props) => {
    const navigate = useNavigate();

    const ButtonClick = () => {
        navigate('/');
    }
    const style = {

    }

    
        return (
            <button className="button buttons"   onClick={ButtonClick}>Go to the main page</button>
        );
    
}
 
export default ButtonForFirstPage;