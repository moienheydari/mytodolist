import React, { useState } from 'react';
import '../css/usernameCont.css';

export default function UsernameField({handleUpdate, pressed, setPressed}) {
    const [name, setName] = useState('');

    function handleChangePress () {
        setPressed((prev) => { return !prev});
        handleUpdate();
    }

    return (
        <div className='username-Field'>
            <button className={`username-butt username-cont-butt ${pressed ? 'hide' : 'show'}`} onClick={handleChangePress}>Change Username</button>
            <div className={`usernameinput-cont show ${pressed ? 'show' : 'hide'}`}>
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