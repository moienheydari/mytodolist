import React, { useEffect, useState } from 'react';
import '../css/listCont.css';
import data from '../data/data';

export default function ListField({ task, subtask, done, id, handleUpdate, pressed }) {
    const [clicked, setClicked] = useState(false);
    const [strike, setStrike] = useState(done);
    const [del, setDel] = useState(false);

    useEffect(() => {
        data.tasks = data.tasks.map(e => {
            if (e.task === id) {
                return {
                    ...e,
                    done: strike,
                }
            } else {
                return e;
            }
        });
        if (del) {
            setDel(false);
            data.tasks = data.tasks.filter(e => {
                if (e.task === id) {
                    return false;
                } else {
                    return true;
                }
            })
        }
        localStorage.setItem('myData', JSON.stringify(data));
        handleUpdate();
    }, [del, strike, handleUpdate, id]);

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
        setDel(true);
    }

    return (
        <div className={`list-field`}>
            <div className={`task-field ${strike ? 'trans' : ''}`}>
                <span className={`task-name ${strike ? 'strikethrough' : ''} ${pressed ? 'hide' : 'show'}`} onClick={(pressed) ? null : handleTaskClick}>{task}</span>
                <button disabled={pressed} className={`taskButt done ${strike ? 'strikethrough' : ''}  ${strike ? 'trans' : ''} ${pressed ? 'hide' : 'show'}`} onClick={handleDoneClick}>Done</button>
                <button disabled={pressed} className={`taskButt del ${pressed ? 'hide' : 'show'}`} onClick={handleDelClick}>Del.</button>
            </div>
            <div className={`subtask-detail ${clicked ? 'show' : 'hide'} ${strike ? 'trans' : ''}`}>
                <span className={`subtask-text ${strike ? 'strikethrough' : ''}`}>{subtask}</span>
            </div>
        </div>
    )
}