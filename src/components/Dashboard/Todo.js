import React from 'react';

import { useDispatch} from 'react-redux';
import { deleteTask } from '../../Redux/Actions/actions.js'

const Todo = ({ id, text }) => {

    const dispatch = useDispatch();

    return (
        <div>
            <p>{text}</p>
            <button id='delBtn' onClick={() => {dispatch(deleteTask(id));}}>X</button>
        </div>
    )
}

export default Todo;