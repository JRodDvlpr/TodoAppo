import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTask } from '../../Redux/Actions/actions.js'

import { Card } from 'antd';

import Trash from '../../img/icons8-delete-bin-96.png';

const Todo = ({ text, task }) => {

    const dispatch = useDispatch();


    return (
        <>

            <Card bordered={false}>

                <p>{text}</p>

                <div className="e-d-btns">

                <div className="btn-space">
                    <button id='deleteBtn' onClick={() => {dispatch(deleteTask(task.id));}}>
                        <img className='delIcon' src={Trash} alt="Delete"></img>
                    </button>
                </div>

                <div className="btn-space">

                    <Link to={`/edit/${task.id}`}>
                        <p>Edit</p>
                    </Link> </div>     
                
                </div>
            </Card>
 
        </>
            


    )
}

export default Todo;