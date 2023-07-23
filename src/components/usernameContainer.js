import React from 'react';
import UsernameField from './usernameField';
import '../css/usernameCont.min.css';

export default function UsernameContainer({ pressed, setPressed, editphase }) {
    return (
        <div className='username-Cont'>
            <UsernameField editphase={editphase} pressed={pressed} setPressed={setPressed} />
        </div>
    )
}