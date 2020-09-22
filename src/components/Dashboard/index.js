import React from 'react';

import TodoList from '../Dashboard/TodoList.js'
import AddTask from '../Dashboard/AddTask.js'


const Dashboard = () => {

    // const [isLoading, setIsLoading ] = useState(true);
    return (
        <div>

        <div className="dash-Title">
            <p>Todo</p>
        </div>

        <TodoList />
        
        <AddTask />

        </div>
        
    )
}

export default Dashboard;