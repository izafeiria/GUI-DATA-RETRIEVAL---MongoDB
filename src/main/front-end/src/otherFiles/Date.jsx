import React from 'react'
import { Form } from 'react-bootstrap';
 
class Date extends React.Component{
 
    render(){
 
        return(
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Form.Group controlId="dfc">
                            <Form.Label>Give the Date</Form.Label>
                            <Form.Control type="date" name="dfc" placeholder="Date for compare" />
                        </Form.Group>
                    </div>
                </div>
            </div>
        )
    }
     
}
 
export default Date;