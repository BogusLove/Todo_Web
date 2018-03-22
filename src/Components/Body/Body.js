import React, { Component } from 'react';
import './Body.css';
import {Link} from 'react-router-dom';

class Body extends Component {
  render() {   
    let typeOfTasks = 'Your';
    let task = {
        task: 'djsiadjisadsa',
        description: 'dsadsad sadsafs afsaf sabvsdbty nugfng fh fbg',
        deadlineDate: new Date().toLocaleDateString(),
        responsible: 'AAAA AAAA'
    };
    let auth = true;
    return (
      <div className='body'>
        <div className='text'>
            <h1 class='text-uppercase'>{typeOfTasks} tasks</h1>
        </div>
        
        <div class='d-table-cell p-5'>
            <div class="card text-dark bg-dark">
                <div class="card-header text-danger"><h1>SOON</h1></div>                
            </div>
            <div class="card text-dark bg-danger mb-1">
                <div class="card-body">
                    <h5 class="card-title font-weight-bold">{task.task}</h5>
                    <p class="card-text card-subtitle">Date: {task.deadlineDate}</p>
                    <p class="card-text">{task.description}</p>
                    <p class="card-text card-columns">{task.responsible}</p>
                </div>
            </div>
        </div>

        <div class='d-table-cell p-5'>
            <div class="card text-dark bg-dark">
                <div class="card-header text-warning"><h1>TO DO</h1></div>                
            </div>
            <div class="card text-dark bg-warning mb-1">
                <div class="card-body">
                    <h5 class="card-title font-weight-bold">{task.task}</h5>
                    <p class="card-text card-subtitle">Date: {task.deadlineDate}</p>
                    <p class="card-text">{task.description}</p>
                    <p class="card-text card-columns">{task.responsible}</p>
                </div>
                <div class='buttonsDiv'>
                    <Link to='/details' role='button' class='btn btn-info float-left'>Details</Link>
                    <a to='/done_task' role='button' class='btn btn-success float-right'>DONE</a>
                </div>
                
            </div>  
        </div>

        <div class='d-table-cell p-5'>
            <div class="card text-dark bg-dark">
                <div class="card-header text-success"><h1>DONE</h1></div>
            </div>
            <div class="card text-dark bg-success">
                <div class="card-body">
                    <h5 class="card-title font-weight-bold">{task.task}</h5>
                    <p class="card-text card-subtitle">Date: {task.deadlineDate}</p>
                    <p class="card-text">{task.description}</p>
                    <p class="card-text card-columns">{task.responsible}</p>
                </div>
            </div>
        </div> 
    </div>
    );
  }
}

export default Body;
