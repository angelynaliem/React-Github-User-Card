import React from 'react';


const Followers3 = (props) => {

    return (

             <div>
        <img src={props.followers3.avatar_url} alt="Angelyn's pic"/>
        <p>{props.followers3.bio}</p>
        <p>Location: {props.followers3.location}</p>
        </div>
      
    );
}

export default Followers3;