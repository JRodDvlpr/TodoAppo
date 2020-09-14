import React, {useState} from 'react';

import { useDispatch } from 'react-redux'

import { addTodo } from '../../Redux/Actions/actions.js'

const InputForm = () => { 

    const dispatch = useDispatch();

    const [task, setTask ] = useState({
        text: '',
        completed: false
    });


    const handleChange = (e) => {
        e.preventDefault();
        setTask({[e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(task))
        setTask({ 
            text: '',
            completed: false
        });

    }
    return(

        <>
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div id="addTaskContaier">
                        <div>
                            <p>Add Task</p>
                            <input 
                            placeholder="Add a Task"
                            type="text" 
                            value={task.text}
                            onChange={handleChange}
                            name="name"
                            >
                            </input>
                            <button>Add</button>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default InputForm;