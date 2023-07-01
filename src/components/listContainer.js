import React from 'react';
import ListField from './listField';
import data from '../data/data';
import '../css/listCont.css';

export default function ListContainer () {
    return (
        <>
            <div className='list-cont'>
                {
                data.tasks.map(e => {
                    return <ListField task={e.task} subtask={e.subTask} done={e.done}/>;
                })
                }
            </div>
        </>
    )
}