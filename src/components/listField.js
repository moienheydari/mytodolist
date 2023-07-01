import React, { useState } from 'react';
import '../css/listCont.css';

export default function ListField({ task, subtask, done }) {
    const [clicked, setClicked] = useState(false);
    const [strike, setStrike] = useState(done)

    function handleDoneClick() {
        setStrike((prev) => { return !prev });
    }

    function handleTaskClick({ target }) {
        if (target.className !== 'taskButt') {
            setClicked((prev) => { return !prev });
        }
    }

    return (
        <div className='list-field'>
            <div className='task-name' onClick={handleTaskClick}>
                <span className={strike ? 'strikethrough' : ''}>{task}</span>
                <button className='taskButt' onClick={handleDoneClick}>Done</button>
                <button className='taskButt'>Del.</button>
            </div>
            <div className={`subtask-detail ${clicked ? 'show' : 'hide'} ${strike ? 'strikethrough' : ''}`}>
                {subtask}
            </div>
        </div>
    )
}