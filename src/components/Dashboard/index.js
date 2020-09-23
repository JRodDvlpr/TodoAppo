import React, {useState} from 'react';

import TodoList from '../Dashboard/TodoList.js'
import AddTask from '../Dashboard/AddTask.js'

import Nav from '../Navigation/NavBar';



const Dashboard = () => {

    // const isLoading = useSelector(state => state.isLoading)
    // const [isLoading, setIsLoading ] = useState();
    return (
        <div>
            

        <Nav />

        <div className="dash-Title">
            <p>Todo</p>
        </div>

        <AddTask />

        <TodoList />

        </div>
        
    )
}

export default Dashboard;