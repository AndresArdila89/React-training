import React, { Component } from 'react';
import './UserOutput.css';

const userOutput = (props) => {

    return (
        <div className="UserOutput">
            <h4>User Output</h4>
            <p>{props.userName}</p>
            <p>{props.uName} </p>
        </div>
    )
}

export default userOutput;