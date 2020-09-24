import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getTasks } from '../../Redux/Actions/actions.js'

import TodoCard from './Todo';
import {Spin } from 'antd';

import { deleteTask } from '../../Redux/Actions/actions.js'

import { Link } from 'react-router-dom';

const TodoList = () => {

    const dispatch = useDispatch();

    const taskList = useSelector(state => state.taskList)
    

    const isLoading = useSelector(state => state.isLoading)

    
    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);

    
    return (
        <div className="taskContainer">
            
        {isLoading ? (<Spin />) : (
            <div className="taskList">
                 
                {taskList.map(task => (
                <div key={task.id}>

                    <TodoCard   text={task.text} /> 

                    <button id='delBtn' onClick={() => {dispatch(deleteTask(task.id));}}>X</button>

                    <Link to={`/edittask/${task.id}`}>
                        <button>Edit</button>
                    </Link> 
                </div>
                ))}
            </div>
        ) } 


        </div>
    )
}

export default TodoList;