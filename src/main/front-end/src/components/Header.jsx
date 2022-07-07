import React, { Component } from 'react'


class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className='outer-div'>
                <header>
                    <br></br>
                    <br></br>
                    <nav >
                    <div className='inner-div'><h1>Installation Models Retrieval</h1></div>
                    </nav>
                    <br></br>
                    <br></br>
                </header>
            </div>
        )
    }
}

export default Header