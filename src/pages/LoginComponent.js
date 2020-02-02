import React from 'react';
import '../css/loginstyle.css'
import logo from '../res/images/logo.png'
import background from '../res/images/login-background.jpg'
import InputComponent from '../components/InputComponent'
import ButtonComponent from '../components/ButtonComponent';


class LoginComponent extends React.Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:''
        }
    }

    updateName = (name) => {
        this.setState({username:name});
    }

    updatePassword = (password) => {
        this.setState({userpassword:password});
	}
	
	redirectToRestaurants =() =>{
		this.props.history.push("/restaurants");
	}
    
    render(){
        return(
            <div>
			    <div className="container">
				<div className="img-container">
					<img src={background}/>
				</div>
				<div className="data-container">
					<div>
						<div>
							<img className="logo" src={logo}/>
						</div>
						<div><h2>SIGN IN</h2></div><br/>
						<form action="#" method="GET">

							<InputComponent name="uname" type="text" placeholder="Username" value={this.username} onChange={event => this.updateName(event.target.value)}/>
							<InputComponent name="password" type="password" placeholder="Password" value={this.userpassword}onChange={event => this.updatePassword(event.target.value)}/>
							<ButtonComponent divClassName='button-container' className="button" type="button" innerHTML="LOGIN" onClick={this.redirectToRestaurants}/>
						</form>
						<div>Forgot Password?<a href="#">Click here</a></div>
						<h1>Hello {this.state.username}</h1>
					</div>
				</div>
			</div>
		</div>
        );
    }
}

export default LoginComponent;