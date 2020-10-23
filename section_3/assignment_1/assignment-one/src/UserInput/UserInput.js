import React, { Component } from 'react';

const userInput = (props) => {

    return (
        <div>
            <h4>User Input</h4>
            <input type="text" onChange={props.changed} />
        </div>
    )
};

export default userInput;