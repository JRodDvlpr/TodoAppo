import React from 'react';


const TodoList = ({text, completed}) => {



    return (
        <div className="list">
            
            <ul>
                <li>
                    <label>{text}</label>
                    <input type="checkbox" id="item" name="item" />
                </li>
                
            </ul>

        </div>
    )
}

export default TodoList;