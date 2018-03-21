import React, { Component } from 'react';
import './SignUp.css';

class SignIn extends Component {
  render() {   
    return (
        <div class='SignUp'>
            <form method='post' action='/signin'>
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"/>                    
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder=" Enter password"/>
                </div>    
                <div class="row">
                    <div class="col">
                        <label for="exampleInputEmail1">First Name</label>
                        <input type="text" class="form-control" placeholder="Enter first name"/>
                    </div>
                    <div class="col">
                        <label for="exampleInputEmail1">Second Name</label>
                        <input type="text" class="form-control" placeholder="Enter last name"/>
                    </div>
                </div>                
                <button type="submit" class="btn btn-primary m-4">Submit</button>
            </form>
      </div>
    );
  }
}

export default SignIn;
