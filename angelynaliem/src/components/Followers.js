import React from 'react';


const Followers = (props) => {

    return (

             <div>
        <img src={props.followers.avatar_url} alt="Angelyn's pic"/>
        <p>{props.followers.bio}</p>
        <p>Location: {props.followers.location}</p>
        </div>
      
    );
}

export default Followers;