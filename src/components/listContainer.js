import React from 'react';
import ListField from './listField';
import data from '../data/data';
import '../css/listCont.css';

export default function ListContainer({ handleUpdate, pressed }) {
    return (
        <>
            <div className={`list-cont ${pressed ? 'hide' : 'show'}`}>
                {
                    data.tasks.map((e) => {
                        return <ListField pressed={pressed} key={`1000${e.task}`} task={e.task} subtask={e.subTask} done={e.done} id={e.task} handleUpdate={handleUpdate} />;
                    })
                }
            </div>
        </>
    )
}