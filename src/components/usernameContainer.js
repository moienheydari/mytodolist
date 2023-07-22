import React from 'react';
import UsernameField from './usernameField';
import '../css/usernameCont.min.css';

export default function UsernameContainer ({data, handleUpdate, pressed, setPressed, editphase}) {
    return (
        <div className='username-Cont'>
            <UsernameField data={data} editphase={editphase} handleUpdate={handleUpdate} pressed={pressed} setPressed={setPressed}/>
        </div>
    )
}