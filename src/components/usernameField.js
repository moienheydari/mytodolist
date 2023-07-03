import React, { useState } from 'react';
import '../css/usernameCont.css';

export default function UsernameField () {
    const [name, setName] = useState('');

    return (
        <div className='username-Field'>
            <button className='username-butt username-cont-butt'>Change Username</button>
            <div className='usernameinput-cont'>
                <input value={name}
                    type='text'
                    name='username-input'
                    className='input-username'
                    placeholder='Your new username...'
                    onChange={({ target }) => { setName(target.value) }}
                ></input>
                <button className='username-cont-butt'>OK</button>
            </div>
        </div>
    )
}