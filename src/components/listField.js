import React, { useState } from 'react';

export default function ListField ({task, subtask}) {
    const [clicked, setClicked] = useState(false);
    return (
        <div className='list-field'>
            <div className='task-name' 
                onClick={()=>{setClicked((prev)=>{return !prev})}}>
                {task} 
            </div>
            <div className={`subtask-detail ${clicked? 'show' : 'hide'}`}>
                {subtask}
            </div>
        </div>
    )
}