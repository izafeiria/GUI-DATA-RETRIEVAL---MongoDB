import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div style={{textAlign:"center", backgroundColor: "#f8e3a3"}}>
                <footer style={{ padding: "20px"}}>
                    <span className="text-muted">Mongo Database Queries Retrieval @Net2Grid</span>
                </footer>
            </div>
        )
    }
}

export default Footer