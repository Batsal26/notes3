import React from "react";

// Delete Note Item starts in this component

import DeleteIcon from '@material-ui/icons/Delete';

function Note(props){
    
    function handleClick(){
        props.onDelete(props.id)
        // Here we'll pass the id of the item on which the Delete button is pressed.
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}><DeleteIcon/></button>
        </div>
    )
}

export default Note;