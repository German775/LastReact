import { Route } from 'react-router';
import { Switch, BrowserRouter, NavLink } from 'react-router-dom';
import './App.css';
import * as React from 'react';
import { Login, Registration, ModalLogin } from "../src/Login";
import { Modal } from "../src/Modal";
import { Settings, IStateSettings } from '../src/Settings'
import { Cameras, IItem1 } from '../src/Cameras'

export default class App extends React.Component {
    static displayName = App.name;

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Registration" component={Registration} />
                    <Route path="/Item1" component={Item1} />
                    <Route path="/Item2" component={Item2} />
                    <Route path="/Item3" component={Item3} />
                    <Route path="/settingsCamera" component={SettingsCamera} />
                    <Route path="/settingsService" component={SettingsService} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

interface IStateMainMenu {
    showModal: boolean;
    isOpen: boolean;
}

interface IProps { }

class MainMenu extends React.Component<IProps, IStateMainMenu> {
    constructor(props) {
        super(props);
        this.state = {
            showModal: true,
            isOpen: false
        };
    }

    componentWillMount() {
        var token = sessionStorage.getItem("token");
        if (token == "123") {
            this.setState({ showModal: false });
        }
    }

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
        const modal = this.state.showModal ? (
            <Modal>
                <div className="modal">
                    <ModalLogin />
                </div>
            </Modal>
        ) : null;

        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink to="/Item1" className="navbar-brand">
                        Item1
                    </NavLink>

                    <NavLink to="/Item2" className="navbar-brand">
                            Item2
                    </NavLink>

                    <NavLink to="/Item3" className="navbar-brand">
                        Item3
                    </NavLink>

                    <a className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={this.toggleOpen}
                    >
                        Settings
                    </a>
                    <div className="dropdown" onClick={this.toggleOpen}>
                        <div className={menuClass} aria-labelledby="navbarDropdown">
                            <NavLink to="/settingsCamera">
                                <p className="dropdown-item">Camera settings</p>
                            </NavLink>
                            <NavLink to="/settingsService">
                                <p className="dropdown-item">Service settings</p>
                            </NavLink>
                        </div>
                    </div>
                </nav>
                {modal}
            </div>
        );
    }
}

export const PageTemplate = ({ children }) =>
    <div className="page">
        <MainMenu />
        {children}
    </div>

class Item1 extends React.Component<IProps, IItem1> {
    constructor(props) {
        super(props);
        this.state = {
            cameras: null,
            viewFiltres: false
        };
    };

    componentWillMount() {
        let cameras: Cameras = new Cameras;
        cameras.getCameras().then(result => {
            this.setState({ cameras: result })
        });
    }

    handleSubmit(e) {
        if (e.target.checked) {
            this.setState({ viewFiltres: true });
        }
        else {
            this.setState({ viewFiltres: false });
        }
    }

    render() {
        var masCameras = [];
        for (var item in this.state.cameras) {
            masCameras.push(<option key={this.state.cameras[item].name}>{this.state.cameras[item].name}</option>)
        }

        return (
            <PageTemplate>
                <div className="InputForm">
                    <select className="form-control" id="exampleFormControlSelect1">>
                        {masCameras}
                    </select>
                    <input type="checkbox" name="CheckBoxViewFiltres" onChange={this.handleSubmit.bind(this)} />View filtres
                    {this.state.viewFiltres && <Filtres />}
                    <input type="submit" value="Find" className="btn btn-lg btn-primary btn-block"/>
                </div>
            </PageTemplate>
        );
    }
}

const Filtres = () =>
    <div>
        <h4>Filtrs</h4>
        <p>Select data</p>
        <input type="date" />
        <p>Beginning period</p>
        <input type="time" />
        <p>End period</p>
        <input type="time" />
    </div>

export const Item2 = () =>
    <PageTemplate>
        <section className="">
            <h1>Item2</h1>
        </section>
    </PageTemplate>

export const Item3 = () =>
    <PageTemplate>
        <section className="">
            <h1>Item3</h1>
        </section>
    </PageTemplate>

class SettingsCamera extends React.Component<IProps, IStateSettings> {
    constructor(props) {
        super(props);
        this.state = {
            dataJson: null
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        let settingsForCamera: Settings = new Settings("Camera");
        settingsForCamera.getSettings().then(result => {
            this.setState({ dataJson: result })
        });
    }

    handleChange(item: string, event) {
        this.state.dataJson[event.target.name] = event.target.value;
        this.setState({ dataJson: this.state.dataJson })
    }

    render() {
        var masInput = [];
        var mapInput = [];
        for (var item in this.state.dataJson) {
            masInput.push(<label className="inputEmail3">{item} :</label>,
                <input className="form-control" type="text" key={item} name={item} value={this.state.dataJson[item]} onChange={(e) => this.handleChange(item, e)} />)
        }
        mapInput.push(masInput.map((item) => <p> {item}</p>))

        return (
            <PageTemplate>
                <section className="">
                    <h1>Camera settings</h1>
                    <div>
                        <form method="post" action="/setConfigForCamera">
                            <div className="form">
                                {mapInput}
                            </div>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </section>
            </PageTemplate>
        );
    }
}

class SettingsService extends React.Component<IProps, IStateSettings> {
    constructor(props) {
        super(props);
        this.state = {
            dataJson: null
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        let settingsForCamera: Settings = new Settings("Service");
        settingsForCamera.getSettings().then(result => {
            this.setState({ dataJson: result })
        });
    }

    handleChange(item: string, event) {
        this.state.dataJson[event.target.name] = event.target.value;
        this.setState({ dataJson: this.state.dataJson })
    }

    render() {
        var masInput = [];
        var inputMap = [];
        for (var item in this.state.dataJson) {
            masInput.push(<label className="inputEmail3">{item} :</label>,
                <input className="form-control" type="text" key={item} name={item} value={this.state.dataJson[item]} onChange={(e) => this.handleChange(item, e)} />)
        }
        inputMap.push(masInput.map((item) => <p> {item}</p>))

        return (
            <PageTemplate>
                <section className="">
                    <h1>Servise settings</h1>
                    <div>
                        <form method="post" action="/setConfigForService">
                            <div className="form">
                                {inputMap}
                            </div>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </section>
            </PageTemplate>
        );
    }
}

class NotFound extends React.Component {
    render() {
        return (<div className="NotFound">
            <h1>Resource not found</h1>
        </div>
        );
    }
}