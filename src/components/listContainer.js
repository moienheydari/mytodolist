import React from 'react';
import ListField from './listField';
import { data } from '../data/data';

export default function ListContainer () {
    return (
        <>
            <div className='list-cont'>
                {
                data.tasks.map(e => {
                    return <ListField task={e.task} subtask={e.subTask}/>;
                })
                }
            </div>
        </>
    )
}