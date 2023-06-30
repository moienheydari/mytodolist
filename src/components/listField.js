import React, { useState } from 'react';

export default function ListField () {
    const [clicked, setClicked] = useState(false);
    return (
        <div className='list-field'>
            <div className='task-name' 
                onClick={()=>{setClicked((prev)=>{return !prev})}}>

                Task Name
            </div>
            <div className={`subtask-detail ${clicked? 'show' : 'hide'}`}>
                <p>Blah Blah</p>
            </div>
        </div>
    )
}