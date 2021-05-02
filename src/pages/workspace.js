import React, { Component } from 'react';
import FirstComponent from './../components/firstComponent';

class Workspace extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div>
               <p>Workspace Page</p>
               <FirstComponent title="Guest" />
               <FirstComponent title="User" />
            </div>
        );
    }


}

export default Workspace;
