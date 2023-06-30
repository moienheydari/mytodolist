import React from 'react';
import InputField from './inputField';

export default function InputContainer ({handleUpdate}) {
    return (
        <div className='input-cont'>
            <InputField handleUpdate={handleUpdate}/>
        </div>
    )
}