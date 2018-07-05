import React from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';
import './app.scss';


import About from './components/about/About';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='main left-align'>
                <About/>
                <CSSTransition timeout={500} classNames='app'>
                    <h2>How are you?</h2>
                </CSSTransition>
            </div>
        );
    }

}

ReactDOM.render(<App/>, document.getElementById('app'));
