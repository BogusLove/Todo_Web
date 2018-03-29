import React, { Component } from 'react';
import './Body.css';
import {Link} from 'react-router-dom';

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
        fetch('http://localhost:8080/tasks')
        .then(response => { 
            if (response.ok) return response.json();
            else throw new Error('No data in response');
        })
        .then(tasks => {
            this.setState({ tasks, isLoading: false });
            console.log(this.state.tasks);
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
                <h1 class='text-uppercase'>{typeOfTasks} tasks</h1>
            </div>
            <div class='row'>    
                <div class='col-sm-3'>
                    <div class="card text-dark bg-dark">
                        <div class="card-header text-danger"><h1>SOON</h1></div>                
                    </div>
                    {!isLoading ? tasks.map(task => 
                        <div class="card text-left bg-danger m-1">
                            <div class="card-header">{task.task}</div>
                            <div class="card-body">
                                <h5 class="card-title">{task.deadlineDate}</h5>
                                <p class="card-text">{task.description}</p>
                                <a href="#" class="btn btn-primary">Details</a>
                                <a href="#" class="btn btn-success">Done</a>
                            </div>
                            <div class="card-footer text-muted">
                                {task.responsible.map(userID => 
                                    <a href="#" class="badge badge-primary">{userID}</a>
                                )}
                            </div>
                        </div>
                    ) : <p>err</p>}
                </div>  
                <div class=' col-sm-3'>
                    <div class="card text-dark bg-dark">
                        <div class="card-header text-warning"><h1>TO DO</h1></div>                
                    </div>
                    {!isLoading ? tasks.map(task => 
                        <div class="card text-left bg-warning m-1">
                            <div class="card-header">{task.task}</div>
                            <div class="card-body">
                                <h5 class="card-title">{task.deadlineDate}</h5>
                                <p class="card-text">{task.description}</p>
                                <a href="#" class="btn btn-primary">Details</a>
                                <a href="#" class="btn btn-success">Done</a>
                            </div>
                            <div class="card-footer text-muted">
                                {task.responsible.map(userID => 
                                    <a href="#" class="badge badge-primary">{userID}</a>
                                )}
                            </div>
                        </div>
                    ) : <p>err</p>}
                </div>  

                <div class=' col-sm-3'>
                    <div class="card text-dark bg-dark">
                        <div class="card-header text-success"><h1>DONE</h1></div>                
                    </div>
                    {!isLoading ? tasks.map(task => 
                        <div class="card text-left bg-success m-1">
                            <div class="card-header">{task.task}</div>
                            <div class="card-body">
                                <h5 class="card-title">{task.deadlineDate}</h5>
                                <p class="card-text">{task.description}</p>
                                <a href="#" class="btn btn-primary">Details</a>
                                <a href="#" class="btn btn-success">Done</a>
                            </div>
                            <div class="card-footer text-muted">
                                {task.responsible.map(userID => 
                                    <a href="#" class="badge badge-primary">{userID}</a>
                                )}
                            </div>
                        </div>
                    ) : <p>err</p>}
                </div>  
            </div>
        </div>
        );
    }
}

export default Body;
