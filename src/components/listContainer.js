import React, { useContext } from 'react';
import ListField from './listField';
import '../css/listCont.min.css';
import { DataContx } from '../App';

export default function ListContainer({ pressed, setEditphase, editphase }) {
    const data = useContext(DataContx).data;
    return (
        <>
            <div id='list-cont' className={`list-cont ${pressed ? 'hide' : 'show'}`}>
                {
                    data.tasks.map((e) => {
                        return <ListField editphase={editphase} setEditphase={setEditphase} pressed={pressed} key={`1000${e.id}`} task={e.task} subtask={e.subTask} done={e.done} id={e.id} />;
                    })
                }
            </div>
        </>
    )
}