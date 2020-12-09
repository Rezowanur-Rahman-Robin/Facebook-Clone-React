import React from 'react';
import "./Widget.css";

function Widget() {
    return (
        <div className="widgets">
            <iframe src="https://samakal.com/"
             width="340"
             height="100%"
             style={{border:"none",overflow:"hidden"}}
             scrolling="yes"
             allowTransparency="true"
             allow="encrypted-media"
             frameborder="0">

             </iframe>
            
        </div>
    )
}

export default Widget;
