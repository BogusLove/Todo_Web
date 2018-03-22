import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  render() {   
    let task = {
        task: 'Do some stuff',
        description: 'do tototototototototototo and good',
        deadlineDate: new Date(),
        responsible: ['dsadsadsaa', 'dsadsadsadsads'],
        group: 'Some cool group',
        status: 'todo'
    };
    return (
        <div class='Task d-inline-block'>
            <label for="exampleInputTask">Task</label>
            <input class="form-control" type="text" readonly value={task.task}/>
            <label for="exampleInputTask">Description</label>
            <input class="form-control" type="text" value={task.description} readonly/>
            <label for="exampleInputTask">Deadline Date</label>
            <input class="form-control" type="text" value={task.deadlineDate} readonly/>
            <label for="exampleInputTask">Responsible</label>
            <input class="form-control" type="text" value={task.responsible} readonly/>
            <label for="exampleInputTask">Group</label>
            <input class="form-control" type="text" value={task.group} readonly/>
            <label for="exampleInputTask">Status</label>
            <input class="form-control m-2" type="text" value={task.status} readonly/>
            <a to='/done_task' role='button' class='btn btn-success btn-lg'>DONE</a>
        </div>
    );
  }
}

export default Task;
