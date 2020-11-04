import React, {useState} from 'react';

//REDUX -
import { addTodo } from '../../Redux/Actions/actions.js';
import {getTasks} from '../../Redux/Actions/actions.js';
import { useDispatch} from 'react-redux';

import { Input } from 'antd';

const AddTodo = () => {

    const [addTask, setAddTask] = useState({
        text:'',
        completed: false
    })

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setAddTask({...addTask, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(addTask))
        dispatch(getTasks())
        setAddTask({ 
            text: '',
            completed: false
        });

    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div id="addTaskContaier">
                    <p>Add Task</p>
                    
                <div>
                    <Input 
                    
                    id='add-T'
                    placeholder="Add Task" 
                    type="text" 
                    value={addTask.text}
                    name="text"
                    onChange={handleChange}
                    style={{width: 240}}
                    />

                    <button>Add</button>
                </div>
              
                </div>
            </form>
        </>
    
    )
}

export default AddTodo;