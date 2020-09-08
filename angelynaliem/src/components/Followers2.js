import React from 'react';


const Followers2 = (props) => {

    return (

             <div>
        <img src={props.followers2.avatar_url} alt="Angelyn's pic"/>
        <p>{props.followers2.bio}</p>
        <p>Location: {props.followers2.location}</p>
        </div>
      
    );
}

export default Followers2;