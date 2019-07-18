import './App.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IProps { }

interface IStateModal {
    elementModal: any;
}

const modalRoot = document.getElementById('modal-root');

export class Modal extends React.Component<IProps, IStateModal> {
    constructor(props) {
        super(props);
        this.state = {
            elementModal: document.createElement('div')
        };
    }

    componentDidMount() {
        modalRoot.appendChild(this.state.elementModal);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.state.elementModal);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.state.elementModal,
        );
    }
}