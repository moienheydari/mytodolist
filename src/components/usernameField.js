import React, { useState } from 'react';
import '../css/usernameCont.min.css';
import data from '../data/data';

export default function UsernameField({ handleUpdate, pressed, setPressed }) {
    const [name, setName] = useState('');

    function handleChangePress() {
        setPressed((prev) => { return !prev });
        handleUpdate();
    }

    function handleOk() {
        if (name) {
            data.username = name;
            localStorage.setItem('myData', JSON.stringify(data));
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
            <button disabled={pressed} className={`username-butt username-cont-butt ${pressed ? 'hide' : 'show'}`} onClick={handleChangePress}>Change Username</button>
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