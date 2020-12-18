import React, { Component } from 'react'
import './login.css';
import GoogleLogin from 'react-google-login';

export default class AdminLogin extends Component {


    constructor(props)
    {
        super(props)
        let loggedIn=false;
        this.state={
            username:"",
            name:"",
            loggedIn
        }
        this.onEmailChange=this.onEmailChange.bind(this)
        this.onNameChange=this.onNameChange.bind(this)
        this.submitForm=this.submitForm.bind(this)
    }

    onNameChange =(e)=>{
        this.setState({
           name:e.target.value
        })
    }

    onEmailChange =(e)=> {
        this.setState({
            username:e.target.value
        })
    }

        submitForm(e){
    //    e.preventDefault();
    console.log(e)
       const obj = {
        username: this.state.username,
        name:this.state.name
    };
     if(obj.username=="" || obj.name=="")
     {
         alert("Please fill out the form");
     }
     else
     {
     fetch("https://docs.google.com/forms/d/e/1FAIpQLScF7OhPED6ceiwBMnnznyNXGPxKrPO7CZXfZ0uTEARZk-AKyA/formResponse?&entry.2012693272="+obj.username+"&entry.1830565854="+obj.name);
     }  
       
 }

    responseGoogle=(response)=>{
            // console.log(response);
            // console.log(response.profileObj.email);
      fetch("https://docs.google.com/forms/d/e/1FAIpQLScF7OhPED6ceiwBMnnznyNXGPxKrPO7CZXfZ0uTEARZk-AKyA/formResponse?&entry.2012693272="+response.profileObj.email+"&entry.1830565854="+response.profileObj.name)
    
        } 

    componentDidMount()
    {
        this.setState({
            username:"",
            name:""
        })
    }
    render() {
        return (

     <div class="wrapper fadeInDown">
        <div id="formContent">
   


    <div class="fadeIn first">
      {/* <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" /> */}
      <h2>Visitor Sign-up</h2>
    </div>



    <form>
      <input type="text" id="login" class="fadeIn second" name="username" required
                      value={this.state.username}
                      onChange={this.onEmailChange} placeholder="Email" />
      <input type="text" id="login" class="fadeIn third"  name="password" required
                      value={this.state.name} onChange={this.onNameChange} placeholder="Full Name" />
      <input type="submit" class="fadeIn fourth" value="Log In" onClick={()=>this.submitForm()}/>
     {/* // <input type="submit" class="fadeIn fourth" value="Sign-Up with Google" style={{backgroundColor:"red"}} /> */}
     <GoogleLogin 
    clientId="385254857455-en8l4o9hvtt4tmmqsaahc2qgglitl180.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
      </form>


    </div>
    </div>

        )
    }
}
