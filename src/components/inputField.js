import React from 'react';
import '../css/inputCont.min.css'

export default function InputField({ data, handleUpdate, pressed, editphase }) {
    const [task, setTask] = React.useState('');
    const [subtask, setSubTask] = React.useState('');
    const [written, setWritten] = React.useState(false);

    React.useEffect(() => {
        setWritten((task !== ""));
        setSubTask((prev) => { setSubTask(written ? prev : '') });
    }, [task, written]);

    function handleClick() {
        if (task === 'reset') {
            data.tasks = [];
            handleUpdate();
            return;
        }
        if (task) {
            data.tasks.push({
                task: task,
                subTask: subtask,
                id: Date.now(),
                done: false
            });
            setTask('');
            handleUpdate();
        } else {
            alert('PLease enter a task');
        }
    }

    function handleKeyDown({key}) {
        if (key === 'Enter') {
            handleClick();
        }
    }

    return (
        <div className='input-field'>
            <div className='two-inputs'>
                <input value={task}
                    type='text'
                    name='main-input'
                    className={`input-task ${(pressed||editphase) ? 'hide' : 'show'}`}
                    placeholder='Task name'
                    onChange={({ target }) => { setTask(target.value) }}
                    onKeyDown={handleKeyDown}
                    disabled={pressed||editphase}
                />
                <br />
                <textarea value={subtask}
                    name='extra-input'
                    placeholder='Task details'
                    className={`textarea ${written ? 'show' : 'hide'}`}
                    onChange={({ target }) => { setSubTask(target.value) }}
                    disabled={pressed||editphase}
                ></textarea>
            </div>
            <button className={`addButt ${pressed||editphase ? 'hide' : 'show'}`} onClick={handleClick} disabled={pressed||editphase}>Add</button>
        </div>
    )

}