import React from 'react';
import ListField from './listField';
import data from '../data/data';
import '../css/listCont.css';

export default function ListContainer({ handleUpdate }) {
    return (
        <>
            <div className='list-cont'>
                {
                    data.tasks.map((e) => {
                        return <ListField key={`1000${e.task}`} task={e.task} subtask={e.subTask} done={e.done} id={e.task} handleUpdate={handleUpdate} />;
                    })
                }
            </div>
        </>
    )
}