import React from 'react';

export default function InputField () {
    const [task, setTask] = React.useState('');
    const [subtask, setSubTask] = React.useState('');
    const [written, setWritten] = React.useState(false);

    React.useEffect(() => {
        setWritten((task !== ""));
        setSubTask((prev) => {setSubTask(written? prev : '')});
    }, [task]);

    function handleClick() {
        
    }

    return (
        <div className='input-field'>
            <div className='two-inputs'>
                <input value={task} 
                    type='text' 
                    name='main-input'
                    onChange={({target}) => {setTask(target.value)}} 
                />
                <br/>
                <textarea value={subtask}
                    name='extra-input' 
                    className={`textarea ${written? 'show' : 'hide'}`}
                    onChange={({target}) => {setSubTask(target.value)}}
                ></textarea>
            </div>
            <button onClick={handleClick}>Add</button>
        </div>
    )

}