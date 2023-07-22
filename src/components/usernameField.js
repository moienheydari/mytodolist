import React, { useState } from 'react';
import '../css/usernameCont.min.css';

export default function UsernameField({ data, handleUpdate, pressed, setPressed, editphase }) {
    const [name, setName] = useState('');

    function handleChangePress() {
        setPressed((prev) => { return !prev });
        handleUpdate();
    }

    function handleOk() {
        if (name) {
            data.username = name;
            setName('');
            handleUpdate();
        }
        setPressed((prev) => { return !prev });
    }

    function handleKeyDown({key}) {
        if (key === 'Enter') {
            handleOk();
        }
    }

    return (
        <div className='username-Field'>
            <button disabled={(pressed||editphase)} className={`username-butt username-cont-butt ${editphase ? 'hide' : 'show'}`} onClick={handleChangePress}>Change Username</button>
            <div className={`usernameinput-cont show ${pressed ? 'show' : 'hide'}`}>
                <input value={name}
                    type='text'
                    name='username-input'
                    className='input-username'
                    placeholder='Your new username...'
                    onChange={({ target }) => { setName(target.value) }}
                    onKeyDown={handleKeyDown}
                ></input>
                <button className='username-cont-butt' onClick={handleOk}>OK</button>
            </div>
        </div>
    )
}