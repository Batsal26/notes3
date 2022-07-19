import React from "react";
import Header from "./Header";
import InputArea from "./InputArea2";
// import { styled } from "@material-ui/core/styles";
// import { green, purple, red } from "@material-ui/core/colors";
import Note from "./Note";
// import { theme } from "./stlyles";
import '../../src/styles.css'
 
function App() {
    let localStorageData = JSON.parse(localStorage.getItem('todo'))
    const [array, setArray] = React.useState(localStorageData ? [...localStorageData]:[]);

    function addNote(newNote){
        setArray(prevNotes =>([
            ...prevNotes, newNote
        ]) 
            // Here we are holding the value of previous notes or calling the previous 
            // notes then we'll add it with new notes.
        );
        
    }
    const [todos, setTodos] = React.useState([])
    React.useEffect(() => {   
        localStorage.setItem('todo', JSON.stringify(array))
        setTodos([...JSON.parse(localStorage.getItem('todo'))])
    }, [array])

    function deleteNote(id){
        setArray(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index!==id;
            })
        })
    }

    // const Responsive = styled("div")(({ theme }) => ({
    //     [theme.breakpoints.up("mobile")]: {
    //         Color: green[500]
    //     }, 
    //     [theme.breakpoints.up("tablet")]: {
    //         Color: purple[500]
    //     }, 
    //     [theme.breakpoints.up("desktop")]: {
    //         Color: red[500]
    //     }
    // }))


    return (
        <div>
        {/* <Responsive>
        <h1>Hello</h1>
        </Responsive> */}
        <Header />
        <InputArea onAdd={addNote}/>
        {todos && todos.map((noteItem, index) => {
            return( 
                <Note 
                key={index}
                id={index}
                title={noteItem.title} 
                content={noteItem.content} 
                onDelete={deleteNote} /> )
        })}
        </div>
    )
}

export default App;
