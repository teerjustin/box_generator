import React, { useState } from  'react';


const Boxes = ({box, idx, deleteBox}) => {

    console.log(box);
    console.log(idx);


    return(
        <div style={{'backgroundColor': box.color,
                        height: "100px",
                        width: "100px",
                        display: "inline-block",
                        verticalAlign: "top"}}>
            {box.color}
            <button onClick={(e)=>deleteBox(idx)}>delete</button>
        </div>
    );
}
export default Boxes;