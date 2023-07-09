import React from 'react';
import InputField from './inputField';
import '../css/inputCont.min.css'

export default function InputContainer ({handleUpdate, pressed, editphase}) {
    return (
        <div className={`input-cont ${(pressed||editphase) ? 'hide' : 'show'}`}>
            <InputField handleUpdate={handleUpdate} pressed={pressed} editphase={editphase}/>
        </div>
    )
}