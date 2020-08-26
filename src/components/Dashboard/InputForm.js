import React, {useState} from 'react';

import { useDispatch } from 'react-redux'

import { addTodo } from '../../Redux/Actions/actions.js'

const InputForm = () => { 

    const dispatch = useDispatch();

    const [todo, setTodo ] = useState({
        name: '',
        description: '',
        completed: false
    });


    const handleChange = (e) => {
        e.preventDefault();
        setTodo({[e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(todo))
        setTodo({ 
            name: '',
            description: '',
            completed: false
        });

    }
    return(

        <>
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <p>Add Task</p>
                            <input 
                            placeholder="Add Task"
                            type="text" 
                            value={todo.name}
                            onChange={handleChange}
                            name="name"
                            >
                            </input>
                        </div>
                        <div>
                            <p>Description</p>
                            <input 
                            type="text" 
                            value={todo.description}
                            onChange={handleChange}
                            name="description"
                            >
                            </input>
                        </div>
                        
                    </div>
                    <button>Add</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default InputForm;