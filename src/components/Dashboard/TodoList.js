import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getTasks } from '../../Redux/Actions/actions.js'

import {Checkbox} from 'antd';

import toggleTodo from '../../Redux/Actions/actions.js'

const TodoList = () => {

    const dispatch = useDispatch();

    const taskList = useSelector(state => state.taskList)

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);


    // Checkbox ANTD //
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }


    return (
        <div className="taskContainer">
            
        {taskList.length > 0 ? (
            <div className="taskList">
                {taskList.map((item, index) => (
                    <div key={index}>
                    <div className="taskTodo" onClick={() => {dispatch(toggleTodo());}}>
                        <Checkbox onChange={onChange}> </Checkbox>

                        {item.text}
                        
                    </div>

                    
                    
                </div>
                ))}
            </div>
        ) : (
            <p>No task has been added as of yet</p>
        )}


        </div>
    )
}

export default TodoList;