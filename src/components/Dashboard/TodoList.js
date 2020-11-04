import React from 'react';
import { useSelector} from 'react-redux';


import TodoCard from './Todo';
import {Spin } from 'antd';


const TodoList = ({ items }) => {

    const isLoading = useSelector(state => state.isLoading)

    return (
       <>
            
        {isLoading ? (<Spin />) : (
            <div className="taskContainer">
           
                {items.map((task, index) => (
                    
                    <div className="t-Card" key={index}>
                        <TodoCard  id={task.id} task={task} text={task.text} /> 
                    </div>
                ))}
              
            </div>
        ) } 


        </>
    )
}

export default TodoList;