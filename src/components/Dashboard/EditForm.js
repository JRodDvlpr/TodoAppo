import React, { useState, useEffect } from 'react';

// REDUX //
import { useDispatch, useSelector } from 'react-redux';

// REDUX ACTIONS // 
import { editTaskId } from '../../Redux/Actions/actions.js'

// REACT-ROUTER //
import {  Link, useParams, useHistory } from 'react-router-dom';

import Nav from '../Navigation/NavBar';

import { Input, Card } from 'antd';



const EditTask = () => {


    const tasks = useSelector(state => state.taskList)
    
    const dispatch = useDispatch();
    const history = useHistory();

   const {id} =useParams()

    const [task, setTask ] = useState({
        text: '',
        user_id: ''
    })

    // USE EFFECT // //
   
    useEffect(() => {
        // eslint-disable-next-line
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
        history.push(`/dashboard/${localStorage.getItem('userId')}`)
    }

    return (

        <>

        <Nav />
        
        <header className="dash-Title">
            <p>Todo</p>
        </header>
        <div className="taskContainer">
        <div className="t-Card">
        <Card>
            <form onSubmit={handleSubmit}>

            <Input type="text" name='text' value={task.text} onChange={onChange} required/>

            <div className="e-d-btns">
                <div className="btn-space">
                    <button>Accept</button>
                </div>


                <div className="btn-space">
                    <Link to={`/dashboard/${localStorage.getItem('userId')}`}>
                        <p>Cancel</p>
                    </Link>
                </div>
            </div>
            
            
         

        </form>
        </Card>
        </div>
        </div>
        </>
    )
}

export default EditTask;