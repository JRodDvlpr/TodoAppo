import React from 'react';

import TodoList from '../Dashboard/TodoList.js'
import AddTask from '../Dashboard/AddTask.js'

import Nav from '../Navigation/NavBar';



const Dashboard = () => {

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