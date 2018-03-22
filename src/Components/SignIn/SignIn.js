import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SignIn.css';

class SignIn extends Component {
  render() {   
    return (
        <div class='SignIn'>
            <form method='post' action='/signin'>
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"/>                    
                    </div>
                    <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password"/>
                    </div> 
                    <div class='m-3'>
                        <Link to='/signup'>Not have account: Sign Up</Link>
                    </div>                    
                    <button type="submit" class="btn btn-success m-2">Sign In</button>
                    <br/>
                    <a href='/facebook' class="btn btn-primary" role='button'>Facebook</a>
            </form>
      </div>
    );
  }
}

export default SignIn;
