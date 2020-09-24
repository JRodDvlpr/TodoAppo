import React from 'react';


const Todo = ({ text, id }) => {


    return (
        <div>
        
            <div key={ id } >

                <p>{text}</p>

            </div>
 
        </div>
            


    )
}

export default Todo;