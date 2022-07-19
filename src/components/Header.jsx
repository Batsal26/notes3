import React from "react";
import NotesIcon from '@material-ui/icons/Notes';
import PersonIcon from '@material-ui/icons/Person';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
{/* <FontAwesomeIcon className="faCircleQuestion fa-beat" icon={faCircleQuestion}/> */}

function Header() {

    return (
    <header>
        <h1>Notes <NotesIcon /></h1>
        <h1><a href="https://batsal26.github.io/Portfolio-Website-2/"><PersonIcon fontSize="large"/></a></h1>
    </header>
    )
}

export default Header;