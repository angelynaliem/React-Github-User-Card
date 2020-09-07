import React from 'react';

function Angelyn(props) {
    console.log("al: Angelyn.js: Angelyn render called");
    return (
        <div>
        <img src={props.angelyn.avatar_url} alt="Angelyn's pic"/>
        <p>{props.angelyn.bio}</p>
        <p>Location: {props.angelyn.location}</p>
        </div>
    )
}

export default Angelyn;