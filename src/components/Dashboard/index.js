import React, {useEffect} from 'react';
// import {Spin} from 'antd';
import { useSelector, useDispatch} from 'react-redux'

import Nav from '../Navigation/NavBar.js';
import Footer from '../Dashboard/Footer.js'

import InputForm from '../Dashboard/InputForm.js'
import TodoList from '../Dashboard/TodoList.js'



import {getTasks} from '../../Redux/Actions/actions'

const Dashboard = () => {

    // const [isLoading, setIsLoading ] = useState(true);
    const dispatch = useDispatch();

    const taskList = useSelector((state) => state.taskList);

    console.log(taskList);

    useEffect(() => {
        dispatch(getTasks());


    }, [dispatch])



    return (
        <div>
        <Nav />
        <div className="dash-Title">
            <p>Todo</p>
        </div>
        <TodoList />
        <div>
        <InputForm />
        </div>

        <Footer />
        </div>
        
    )
}

export default Dashboard;