import React from 'react';

const Followers = (props) => {
    return (
        <div>
        <p>{props.followers.name}</p>
        <img src={props.followers.avatar_url} alt="Eric's pic"/>
        <p>{props.followers.location}</p>
        </div>
    );
}

export default Followers;