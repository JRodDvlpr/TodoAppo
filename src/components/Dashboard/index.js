import React, {useEffect } from 'react';

import TodoList from '../Dashboard/TodoList.js'
import AddTask from '../Dashboard/AddTask.js'

import Nav from '../Navigation/NavBar';

import { useSelector, useDispatch} from 'react-redux';
import { getTasks } from '../../Redux/Actions/actions.js'

//Components
import Footer from '../Dashboard/Footer.js';

const Dashboard = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks());
        
    }, [dispatch]);


    const items = useSelector(state => state.taskList)

    
    return (
        <main>
            
            <Nav />
        
            <header className="dash-Title">
                <p>Todo</p>
            </header>

            <section>
                <AddTask />
            </section>
        
            <section>
                <TodoList items={items} />
            </section>
        
            <section>
                <Footer />
            </section>

        </main>
        
    )
}

export default Dashboard;