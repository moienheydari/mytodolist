import React, { useContext, useEffect, useState } from 'react';
import '../css/listCont.min.css';
import ListEdit from './listEdit';
import { DataContx } from '../App';

export default function ListField({ task, subtask, done, id, pressed, setEditphase, editphase }) {
    const [clicked, setClicked] = useState(false);
    const [strike, setStrike] = useState(done);
    const [del, setDel] = useState(false);
    const [editmode, setEditmode] = useState(false);
    const data = useContext(DataContx).data;
    const setData = useContext(DataContx).setData;

    useEffect(() => {
        data.tasks = data.tasks.map(e => {
            if (e.id === id) {
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
                if (e.id === id) {
                    return false;
                } else {
                    return true;
                }
            })
        }
        setData({...data});
    }, [del, strike, id, data, setData]);

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

    function handleEditClick() {
        setEditphase((prev) => { return !prev });
        setEditmode(true);
    }

    return (
        <>
            <div className={`list-field ${(pressed||editphase) ? 'hide' : 'show'}`}>
                <div className={`task-field ${strike ? 'trans' : ''}`}>
                    <span className={`task-name ${strike ? 'strikethrough' : ''} ${(pressed||editphase) ? 'hide' : 'show'}`} onClick={(pressed||editphase) ? null : handleTaskClick}>{task}</span>
                    <button disabled={(pressed||editphase)} className={`taskButt done ${strike ? 'strikethrough' : ''}  ${strike ? 'trans' : ''} ${(pressed||editphase) ? 'hide' : 'show'}`} onClick={handleDoneClick}>Done</button>
                    <button disabled={(pressed||editphase||strike)} className={`taskButt edit ${strike ? 'strikethrough' : ''}  ${strike ? 'trans' : ''} ${(pressed||editphase||strike) ? 'hide' : 'show'}`} onClick={handleEditClick}>Edit</button>
                    <button disabled={(pressed||editphase)} className={`taskButt del ${(pressed||editphase) ? 'hide' : 'show'}`} onClick={handleDelClick}>Del.</button>
                </div>
                <div className={`subtask-detail ${clicked ? 'show' : 'hide'} ${strike ? 'trans' : ''}`}>
                    <span className={`subtask-text ${strike ? 'strikethrough' : ''}`}>{subtask}</span>
                </div>
            </div>
            {
                (editmode) ?
                    (
                        <div className='listedit-cont'>
                            <ListEdit setEditphase={setEditphase} id={id} pressed={pressed} setEditmode={setEditmode}/>
                        </div>
                    )
                    : <></>
            }
        </>
    )
}