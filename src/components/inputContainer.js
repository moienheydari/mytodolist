import React from 'react';
import InputField from './inputField';
import '../css/inputCont.css'

export default function InputContainer ({handleUpdate}) {
    return (
        <div className='input-cont'>
            <InputField handleUpdate={handleUpdate}/>
        </div>
    )
}