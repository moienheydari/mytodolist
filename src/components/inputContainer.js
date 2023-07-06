import React from 'react';
import InputField from './inputField';
import '../css/inputCont.min.css'

export default function InputContainer ({handleUpdate, pressed}) {
    return (
        <div className={`input-cont ${pressed ? 'hide' : 'show'}`}>
            <InputField handleUpdate={handleUpdate} pressed={pressed}/>
        </div>
    )
}