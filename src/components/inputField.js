import React from 'react';
import data from '../data/data';
import '../css/inputCont.css'

export default function InputField({ handleUpdate }) {
    const [task, setTask] = React.useState('');
    const [subtask, setSubTask] = React.useState('');
    const [written, setWritten] = React.useState(false);

    React.useEffect(() => {
        setWritten((task !== ""));
        setSubTask((prev) => { setSubTask(written ? prev : '') });
    }, [task, written]);

    function handleClick() {
        if (task === 'reset') {
            localStorage.removeItem('myData');
            data.tasks = [];
            handleUpdate();
            return;
        }
        if (task && data.tasks.length < 7) {
            data.tasks.push({
                task: task,
                subTask: subtask,
                id: Date.now(),
                done: false
            });
            setTask('');
            localStorage.setItem('myData', JSON.stringify(data));
            handleUpdate();
        } else if (data.tasks.length > 6) {
            setTask('');
            alert('No more tasks, delete some');
        } else {
            alert('PLease enter a task');
        }
    }

    return (
        <div className='input-field'>
            <div className='two-inputs'>
                <input value={task}
                    type='text'
                    name='main-input'
                    className='input-task'
                    placeholder='Task name'
                    onChange={({ target }) => { setTask(target.value) }}
                />
                <br />
                <textarea value={subtask}
                    name='extra-input'
                    placeholder='Task details'
                    className={`textarea ${written ? 'show' : 'hide'}`}
                    onChange={({ target }) => { setSubTask(target.value) }}
                ></textarea>
            </div>
            <button className='addButt' onClick={handleClick}>Add</button>
        </div>
    )

}