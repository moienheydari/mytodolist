import React from 'react';
import ListField from './listField';
import '../css/listCont.min.css';

export default function ListContainer({ data, handleUpdate, pressed, setEditphase, editphase }) {
    return (
        <>
            <div id='list-cont' className={`list-cont ${pressed ? 'hide' : 'show'}`}>
                {
                    data.tasks.map((e) => {
                        return <ListField data={data} editphase={editphase} setEditphase={setEditphase} pressed={pressed} key={`1000${e.id}`} task={e.task} subtask={e.subTask} done={e.done} id={e.id} handleUpdate={handleUpdate} />;
                    })
                }
            </div>
        </>
    )
}