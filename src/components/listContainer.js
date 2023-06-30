import React from 'react';
import ListField from './listField';

export default function ListContainer () {
    return (
        <>
        <div className='list-cont'>
            <ListField />
        </div>
        <div className='list-cont'>
            <ListField />
        </div>
        </>
    )
}