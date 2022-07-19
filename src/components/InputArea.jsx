import React from "react";

function InputArea(props) {

    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");

    function handleChange1(event){
        // It is going to receive an event when it gets triggered.
        const value = event.target.value;
        setTitle(value);
        console.log(title)

    //     setTitle(prevNote => {
    //         return {
    //             ...prevNote, value
    //         };
    //     });
     }

    function handleChange2(event){
        // It is going to receive an event when it gets triggered.
        const value = event.target.value;
        setContent(value);
        console.log(content)

    //     setContent(prevNote => {
    //         return {
    //             ...prevNote, value
    //         };
    //     });
     }

    function finalSubmit(event){
        // When we click on the add button it refreshes the page that's why we will
        // use prevent.Default() which will prevent it from being refreshed.
        event.preventDefault();
        props.onAdd(title, content);
        // This will call onAdd in the App.jsx. Then the onAdd contains addNote with 
        // it so it will call addNote function. 
    }

    return (
        <div>
            <form>
                <input name="title" value={title} onChange={handleChange1} placeholder="Title" />
                <textarea name="content" value={content} onChange={handleChange2} placeholder="Start Typing..."/>
                <button onClick={finalSubmit}> Add </button>
            </form>
        </div>
    )
}

export default InputArea;