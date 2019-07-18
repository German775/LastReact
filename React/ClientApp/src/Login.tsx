import './App.css';
import { Link} from 'react-router-dom';
import * as React from 'react';
import { Redirect } from 'react-router';

interface ILogin {
    loggedIn: boolean;
}

interface IProps { }

export class Registration extends React.Component<IProps, ILogin> {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        sessionStorage.setItem("token", "123")
        this.setState({
            loggedIn: true
        })
    }


    render() {
        if (this.state.loggedIn === false) {
            return (
                <div className="modal" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title">Registration page</h3>
                            </div>
                                <div className="modal-body">
                                    <label className="inputEmail3">Email addres</label>
                                    <input className="form-control" type="email" name="name" placeholder="Enter email" />
                                    <label className="inputPassword3">Password</label>
                                    <input className="form-control" type="password" name="password" placeholder="Enter password" />
                                    <label className="inputPassword3">Reenter password</label>
                                    <input className="form-control" type="password" name="reiterationPassword" placeholder="Enter password" />
                                </div>
                                <div className="modal-footer">
                                <input className="btn btn-lg btn-primary btn-block" type="submit" value="Send" onClick={this.handleSubmit} />
                                </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return <Redirect to="item1" />
        }
    }
}

export class Login extends React.Component<IProps, ILogin> {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        sessionStorage.setItem("token", "123")
        this.setState({
            loggedIn: true
        })
    }

    render() {
        if (this.state.loggedIn === false) {
            return (
                <div className="modal" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title">Login page</h3>
                            </div>

                            <div className="modal-body">
                                <label className="inputEmail3">Email addres</label>
                                <input className="form-control" type="email" name="name" placeholder="Enter email" />
                                <label className="inputPassword3">Password</label>
                                <input className="form-control" type="password" name="password" placeholder="Enter password" />
                                <Link to="Registration">Registration</Link>
                            </div>
                            <div className="modal-footer">
                                <input className="btn btn-lg btn-primary btn-block" type="submit" value="Send" onClick={this.handleSubmit} />
                            </div>

                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (<Redirect to="/item1" />);
        }
    }
}

export class ModalLogin extends React.Component<IProps, ILogin> {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        sessionStorage.setItem("token", "123")
        this.setState({
            loggedIn: true
        })
    }

    render() {
        if (this.state.loggedIn === false) {
            return (
                <div className="modal" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title">Login page</h3>
                            </div>

                            <div className="modal-body">
                                <label className="inputEmail3">Email addres</label>
                                <input className="form-control" type="email" name="name" placeholder="Enter email" />
                                <label className="inputPassword3">Password</label>
                                <input className="form-control" type="password" name="password" placeholder="Enter password" />
                                <Link to="Registration">Registration</Link>
                            </div>
                            <div className="modal-footer">
                                <input className="btn btn-lg btn-primary btn-block" type="submit" value="Send" onClick={this.handleSubmit} />
                            </div>

                        </div>
                    </div>
                </div>
            );
        }
        else {
            return null;
        }
    }
}