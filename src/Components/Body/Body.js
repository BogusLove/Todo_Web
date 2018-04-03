import React, { Component } from 'react';
import './Body.css';
import {Link} from 'react-router-dom';
import TaskDashboard from '../TaskDashboard/TaskDashboard'

class Body extends Component {
    constructor(props){
        super(props);

        this.state = {
            tasks: null,
            err: '',
            isLoading: false
        };
    }

    componentWillMount(){
        this.setState({isLoading: true});
        let url;
        this.props.owner === 'user' ? url = 'http://localhost:8080/user_tasks/:id' : url = 'http://localhost:8080/group_tasks/:id'
        fetch(url)
        .then(response => { 
            if (response.ok) return response.json();
            else throw new Error('No data in response');
        })
        .then(tasks => {
            this.setState({ tasks, isLoading: false });
        })
        .catch(err => {
            this.setState({ err, isLoading: false });
        })
    }  

    render() {
        let { tasks, isLoading, err } = this.state;
        let typeOfTasks = 'Your';
        let auth = true;
        return (            
        <div className='body'>
            <div className='text'>
                <h1 class='text-uppercase text-left'>{typeOfTasks} tasks</h1>
            </div>   
            {!isLoading ? (
                <div class='row'>
                    <TaskDashboard tasks={tasks} type='SOON' color='danger'/>
                    <TaskDashboard tasks={tasks} type='TODO' color='warning'/>
                    <TaskDashboard tasks={tasks} type='DONE' color='success'/>
                </div>
                ) : <p>err</p>
            }
        </div>
        );
    }
}

export default Body;
