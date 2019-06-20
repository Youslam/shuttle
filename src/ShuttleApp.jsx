import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Footer from './components/common/footer/Footer';
import Header from './components/common/header/Header';
import MainContent from './components/common/content/MainContent';
import './App.css';

class ShuttleApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/shuttle/:name" component={ListTodosComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                    </>
                </Router>
            </div>
        )
    }
}


class ListTodosComponent extends Component {
    constructor(props){
        console.log(props.match.params.name);
        super(props)
        this.state = {
            username: props.match.params.name
        }
    }

    render() {
        return (
            <div className="page-container">
                <div className="left-content">
                    <Header username={this.state.username}/>            
                    <MainContent />
                    <Footer />
                </div>
            </div>
        )
    }
}

function ErrorComponent() {
    return <div>An Error Occurred. I don't know what to do! Contact support at abcd-efgh-ijkl</div>
}

class LoginComponent extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        //console.log(this.state);
        this.setState(
            {
                [event.target.name]
                  :event.target.value
            }
        )
    }

    loginClicked() {
        //in28minutes,dummy
        if(this.state.username==='youssef' && this.state.password==='aa'){
            this.props.history.push(`/shuttle/${this.state.username}`)
        }
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
    }

    render() {
        return (
        //    <div>
        //         {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
        //         {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
        //         {this.state.showSuccessMessage && <div>Login Sucessful</div>}
        //         {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
        //         User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        //         Password: <input type="password" name="password" value={this.state.password}  onChange={this.handleChange}/>
        //         <button onClick={this.loginClicked}>Login</button>
        //     </div>

            <div className="login-page">
                <div className="login-main">  	
                    <div className="login-head">
                            <h1>Login</h1>
                        </div>
                        <div className="login-block">
                            <form>
                                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
                                <input type="password" name="password" className="lock" placeholder="Password" value={this.state.password}  onChange={this.handleChange}/>
                                <div className="forgot-top-grids">
                                    <div className="forgot-grid">
                                        <ul>
                                            <li>
                                                <input type="checkbox" id="brand1" value="" />
                                                <label for="brand1"><span></span>Remember me</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="forgot">
                                        <a href="#">Forgot password?</a>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <input type="submit" name="Sign In" value="Login" onClick={this.loginClicked}/>	
                                <h3>Not a member?<a href="signup.html"> Sign up now</a></h3>				
                                <h2>or login with</h2>
                                <div className="login-icons">
                                    <ul>
                                        <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#" className="google"><i className="fa fa-google-plus"></i></a></li>						
                                    </ul>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        )
    }
}

export default ShuttleApp
