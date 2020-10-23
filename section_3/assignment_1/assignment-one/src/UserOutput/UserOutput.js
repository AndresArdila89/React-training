import React, { Component } from 'react';

const userOutput = (props) => {

    return(
        <div>
            <h4>User Output</h4>
            <p>{props.userName}</p>
    <p>{props.uName} </p>
        </div>
    )
}

export default userOutput;