import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getTasks, deleteTask } from '../../Redux/Actions/actions.js'
import EditForm from './EditForm'


import TodoCard from './Todo';
import {Spin } from 'antd';

const TodoList = () => {

    const dispatch = useDispatch();
    
    const taskList = useSelector(state => state.taskList)
    const isLoading = useSelector(state => state.isLoading)

    const [edit, setEdit ] = useState(false);

    const [editText, setEditText ] = useState({
        text: '',
    
    })

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);



    
    return (
        <div className="taskContainer">
            
        {isLoading ? (<Spin />) : (
            <div className="taskList">
                {taskList.map((item, index) => (
                    <div key={index}>
                    <TodoCard id={item.id} text={item.text} /> 
            
                    </div>
                    
                ))}
                
            </div>
        ) } 


        </div>
    )
}

export default TodoList;