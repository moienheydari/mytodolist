import React, { useEffect, useState } from 'react';
import '../css/listCont.css';
import data from '../data/data';

export default function ListField({ task, subtask, done, taskIndex, handleUpdate }) {
    const [clicked, setClicked] = useState(false);
    const [strike, setStrike] = useState(done);
    const [del, setDEl] = useState(false);

    useEffect(() => {
        if (data.tasks[taskIndex]) {
            data.tasks[taskIndex].done = strike;
            localStorage.setItem('myData', JSON.stringify(data));
        }
        if (del) {
            data.tasks.splice(taskIndex, 1);
            localStorage.setItem('myData', JSON.stringify(data));
            setDEl(false);
        }
        handleUpdate();
    }, [del, strike, taskIndex, handleUpdate]);

    function handleDoneClick() {
        setStrike((prev) => { return !prev });
    }

    function handleTaskClick({ target }) {
        const theClass = JSON.stringify(target.className);
        if (!theClass.includes('taskButt')) {
            setClicked((prev) => { return !prev });
        }
    }

    function handleDelClick() {
        setDEl(true);
    }

    return (
        <div className='list-field'>
            <div className='task-field' onClick={handleTaskClick}>
                <span className={`task-name ${strike ? 'strikethrough' : ''}`}>{task}</span>
                <button className={`taskButt ${strike ? 'strikethrough' : ''}`} onClick={handleDoneClick}>Done</button>
                <button className='taskButt' onClick={handleDelClick}>Del.</button>
            </div>
            <div className={`subtask-detail ${clicked ? 'show' : 'hide'}`}>
                <span className={`subtask-text ${strike ? 'strikethrough' : ''}`}>{subtask}</span>
            </div>
        </div>
    )
}