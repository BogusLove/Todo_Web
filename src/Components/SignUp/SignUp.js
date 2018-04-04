import React, { Component } from 'react';
import './SignUp.css';

class SignIn extends Component {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         err: '',
    //         login: '',
    //         password: '',
    //         firstName: '',
    //         secondName: ''
    //     };
    // }

    // onChangeLogin = (event) => {
    //     this.setState({
    //         login: event.target.value
    //     });
    // } 

    // onChangePassword = (event) => {
    //     this.setState({
    //         password: event.target.value
    //     });
    // } 

    // onChangeFirst = (event) => {
    //     this.setState({
    //         firstName: event.target.value
    //     });
    // } 

    // onChangeSecond = (event) => {
    //     this.setState({
    //         secondName: event.target.value
    //     });
    // } 

    // onSubmit = () =>{
    //     const {login, password, firstName, secondName} = this.state;
    //     fetch('http://localhost:8080/users/signup', {
    //         method: 'post',
    //         body: JSON.stringify({
    //             login: login,
    //             password: password,
    //             name: {
    //                 first: firstName,
    //                 second: secondName
    //             }
    //         })})
    //         .then(response => {
    //             console.log(response);                
    //             if (response.ok) return response.json();
    //             throw new Error('Problems with sign in');
    //         })
    //         .then(user => {
    //             console.log(user);                
    //             sessionStorage.setItem('user', user);
    //         })
    //         .catch(err => {
    //             this.setState({
    //                 err: err
    //             });
    //         }); 
    //     console.log(sessionStorage.getItem('user'));
    // }

    render() {  
        //let err = '';
        //this.state.err ? err = this.state.err : 0;
        return (            
            <div className='SignUp'>
                <form action='http://localhost:8080/users/signup' method='post' enctype='JSON'>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input type="login" class="form-control" id="login" name='login' placeholder="Enter username" onChange={this.onChangeLogin}/>                    
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="password" name="password" placeholder=" Enter password" onChange={this.onChangePassword}/>
                    </div>    
                    <div class="row">
                        <div class="col">
                            <label for="exampleInputEmail1">First Name</label>
                            <input type="text" class="form-control" placeholder="Enter first name" onChange={this.onChangeFirst} id='first' name='first'/>
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">Second Name</label>
                            <input type="text" class="form-control" placeholder="Enter second name" onChange={this.onChangeSecond} id='second' name='second'/>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary m-4">Submit</button>
                </form>
        </div>
        );
    }
}

export default SignIn;
