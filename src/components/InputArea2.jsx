import React from "react";

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function InputArea(props) {

    const [isExpanded, setExpanded] = React.useState(false);

    const [note, setNote] = React.useState({
        title: "",
        content: ""
    })

    // function active(){
    //     isExpanded ? note.title!=0 : null;
    // }
    
    function handleChange(event){
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
                // This will behave as key and value of an object
            };
        });
    }

    function finalSubmit(event){
        props.onAdd(note);
        // This will call onAdd in the App.jsx. Then the onAdd contains addNote with 
        // it so it will call addNote function. 
        // Here we are passing the new note back to the app.
        setNote({
            title: "",
            content: "",
        });
        // When we click on the add button it refreshes the page that's why we will
        // use prevent.Default() which will prevent it from being refreshed.
        event.preventDefault();
    }

    function expand(){
        setExpanded(true);
    }
    // What happens is by default the isExpand is false so the input title and the button will not show up
    // but when we click on the text area there is a onClick function which calls the expand() function 
    // and the isExpand gets true by which the input title gets true and shows up and the button also
    // gets true and shows up. 

    return (
        <div>
            <form className="create-note">

            { isExpanded ? 
                <input
                name="title"
                value={note.title} 
                onChange={handleChange} 
                placeholder="Title" 
                /> : null }
        {/* It means if isExpanded is true the input will show else it'll not show up */}


                <textarea 
                name="content" 
                value={note.content} 
                onClick={expand}
                onChange={handleChange} 
                placeholder={isExpanded ? "Start Typing" : "Take A Note"} 
                rows={isExpanded ? 3 : 1}
                // It means if the isExpanded is true it'll show 3 rows and if false it'll show only 1 row.
                />

                <Zoom in={isExpanded ? note.content!=0 : null}>
                {/* It means if isExpanded is true the Add button will show. */}
                <Fab onClick={finalSubmit}><AddIcon /></Fab>
                </Zoom>

            </form>
        </div>
    )
}

export default InputArea;