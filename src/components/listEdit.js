import React, { useEffect, useState } from 'react';
import data from '../data/data';

export default function ListEdit({ id, handleUpdate, setEditmode, setEditphase }) {
    let myData;
    data.tasks.forEach(e => {
        if (e.id === id) {
            myData = e;
        }
    });
    const [task, setTask] = useState(myData.task);
    const [subtask, setSubTask] = React.useState(myData.subTask);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        if (edit) {
            data.tasks = data.tasks.map(e => {
                if (e.id === id) {
                    return {
                        ...e,
                        task: task,
                        subTask: subtask
                    }
                } else {
                    return e;
                }
            })
            localStorage.setItem('myData', JSON.stringify(data));
            handleUpdate();
            setEditphase((prev) => { return !prev });
            setEdit(false);
            setEditmode(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [edit]);

    function handleClick() {
        if (task) {
            setEdit(true);
        } else {
            alert('Can not leave empty!');
        }
    }

    function handleKeyDown({ key }) {
        if (key === 'Enter') {
            handleClick();
        }
    }


    return (
        <div className='list-edit'>
            <div className='two-inputs'>
                <input
                    value={task}
                    type='text'
                    name='edit-input'
                    className='input-task'
                    placeholder='Task name'
                    onChange={({ target }) => { setTask(target.value) }}
                    onKeyDown={handleKeyDown}
                />
                <br />
                <textarea
                    value={subtask}
                    name='extra-edit-input'
                    placeholder='Task details'
                    className={`textarea show`}
                    onChange={({ target }) => { setSubTask(target.value) }}
                ></textarea>
            </div>
            <button className={`addButt`} onClick={handleClick}>Done</button>
        </div>
    )
}