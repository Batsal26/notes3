import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return <footer>
    {/* <p>Copyright © {currentYear}</p> */}
    <a href="">Designed and Built By Batsal</a>
    </footer>
}

export default Footer;