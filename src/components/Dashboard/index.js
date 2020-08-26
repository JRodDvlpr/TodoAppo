import React, {useEffect} from 'react';
// import {Spin} from 'antd';
import { useSelector, useDispatch} from 'react-redux'

import Nav from '../Navigation/NavBar.js';
import Footer from '../Dashboard/Footer.js'

import InputForm from '../Dashboard/InputForm.js'


import {getTasks} from '../../Redux/Actions/actions'

const Dashboard = (props) => {
    // const [isLoading, setIsLoading ] = useState(true);
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);
    console.log(tasks);
    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch])

    return (
        <div>
        <Nav />
        <div className="dash-Title">
            <p>Todo</p>
        </div>
        <div>
        {tasks.map(task =>
            <div>
                <div>
                    <div key={task.id}>
                        <p>{task.name}</p>
                        <p>{task.completed}</p>
                    </div>
                </div>
            </div>
            )}
        </div>
        <div>
        <InputForm />
        </div>

        <Footer />
        </div>
        
    )
}

export default Dashboard;