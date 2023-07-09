import React from 'react';
import ListField from './listField';
import data from '../data/data';
import '../css/listCont.min.css';

export default function ListContainer({ handleUpdate, pressed, setEditphase, editphase }) {
    return (
        <>
            <div id='list-cont' className={`list-cont ${pressed ? 'hide' : 'show'}`}>
                {
                    data.tasks.map((e) => {
                        return <ListField editphase={editphase} setEditphase={setEditphase} pressed={pressed} key={`1000${e.task}`} task={e.task} subtask={e.subTask} done={e.done} id={e.id} handleUpdate={handleUpdate} />;
                    })
                }
            </div>
        </>
    )
}