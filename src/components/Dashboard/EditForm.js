import React, { useState, useEffect } from 'react';

// REDUX //
import { useDispatch, useSelector } from 'react-redux';

// REDUX ACTIONS // 
import { editTaskId } from '../../Redux/Actions/actions.js'

// REACT-ROUTER //
import {  Link, useParams } from 'react-router-dom';



const EditTask = () => {


    const tasks = useSelector(state => state.taskList)
    
    const dispatch = useDispatch();


   const {id} =useParams()

    const [task, setTask ] = useState({
        text: '',
        user_id: ''
    })

    // USE EFFECT // //
    useEffect(() => {
        setTask({...tasks.filter(editTask => editTask.id == id)[0]})},[setTask.id, id, tasks]
        
    )

    const onChange = (e) => {
        e.preventDefault();
        setTask({ 
            ...task, [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editTaskId(task));
        console.log('submitted', task);
    }

    return (
        <form onSubmit={handleSubmit}>

            <input type="text" name='text' value={task.text} onChange={onChange} required/>

            <button>Save</button>
            <Link to={`/dashboard/${id}`}>
                <button>Cancel</button>
            </Link>
         

        </form>
    )
}

export default EditTask;