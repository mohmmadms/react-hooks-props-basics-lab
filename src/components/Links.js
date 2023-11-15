import React from "react";
import About from "./About";
function Links(links){
    return(
        <div>
            <h3>Links</h3>
            <a herf={links.github} >https://github.com/liza</a>
            <br/>
            <a herf={links.linkedin} >https://www.linkedin.com/in/liza/</a>
        </div>
    )
}
export default Links