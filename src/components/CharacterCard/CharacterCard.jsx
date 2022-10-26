import React from 'react';

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
const CharacterCard = ({id,fullName,title,family,imageUrl}) => {
    
    return (
        <div>
            <img src={imageUrl}></img>
            <p>ID: {id}</p>
            <p>Name: {fullName}</p>
            <p>Title: {title}</p>
            <p>Family: {family}</p>

        </div>
    );
};

export default CharacterCard;
