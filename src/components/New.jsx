import React, {useState} from 'react';

const New = ({createBox}) => {

    const [newColor, setNewColor] = useState("");


    const submitColor = (e) => {
        e.preventDefault();
        createBox({color: newColor});
        console.log("submitted")
    }

    return (
        <div>
            <form onSubmit={submitColor}>

                enter color:<input type="text" onChange={(e)=>setNewColor(e.target.value)} value={newColor}/>
                <input type="submit" value="add color"></input>

            </form>
        </div>
    )
}

export default New;