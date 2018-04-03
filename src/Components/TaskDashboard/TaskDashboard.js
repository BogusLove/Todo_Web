import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class TaskDashboard extends Component {  
    constructor(props){
        super(props);
    }  
    render(){      
        const { tasks, color, type} = this.props;
        let bg;
        let text;
        if (color === 'danger') {
            bg = <div class="card-header text-danger"><h1>{type}</h1></div>;
            text = "card text-left bg-danger m-1";
        }
        else if (color === 'warning'){
            bg = <div class="card-header text-warning"><h1>{type}</h1></div>;
            text = "card text-left bg-warning m-1";
        }
        else if (color === 'success'){
            bg = <div class="card-header text-success"><h1>{type}</h1></div>;
            text = "card text-left bg-success m-1";
        }
        return (
            <div class='col-sm-3'>
                <div class="card text-dark bg-dark">                
                    {bg}              
                </div>
                {tasks.map(task => 
                    <div class={text}>
                        <div class="card-header font-weight-bold">{task.task}</div>
                        <div class="card-body">
                            <p class="card-title">{task.deadlineDate}</p>
                            <p class="card-text">{task.description}</p>
                            <a href="#" class="btn btn-primary float-left w-25"><img src='details.ico' class='doneImg'/></a>
                            {this.props.type !== 'DONE' ? (
                                <a href="#" class="btn btn-success float-right w-25"><img src='done.png' class='doneImg'/></a>
                            ) : (<p></p>)}
                        </div>
                        <div class="card-footer text-muted">
                            {task.responsible.map(user => 
                                <a href="#" class="badge badge-dark">{user.name.first} {user.name.second}</a>
                            )}
                        </div>
                    </div>
                )}
            </div>  
        )
       
    }
}

export default TaskDashboard;