import React from 'react';


function UserCard (props) {

 return (
     <>
    { props.followerData.map(cards => {
        return (
           <div className="user-card">
           <img src={cards.avatar_url}  alt={cards.name}/>
            <h2>Location: {cards.location}</h2> 
            <h2>Profile:  {cards.html_url}</h2>
            <h2>Followers:{cards.followers_url}</h2>
            <h2>Following: {cards.following_url}</h2>
            <h2>Bio: {cards.bio}</h2>
            </div> 
        )
    })}
    </>
 )
 
}

export default UserCard;