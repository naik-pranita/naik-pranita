import React from 'react';
import ReactDOM from 'react-dom';
import {CSSTransition} from 'react-transition-group';
import './app.scss';

import NavBar from './components/navBar/NavBar';
import About from './components/about/About';
import Main from './components/main/Main';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            showContent: false
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({showContent: true}, () => {
            document.getElementById('experience').scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        });

    }

    render() {
        return (
            <div className='app-container'>
                <div>
                    <CSSTransition
                        in={this.state.showContent}
                        timeout={500}
                        classNames='content'
                        unmountOnExit={true}
                    >
                        <NavBar/>
                    </CSSTransition>
                    <div className={`main ${this.state.showContent ? 'left-align' : 'center-align'}`}>
                        <About onClick={this.onClick}/>
                        {this.state.showContent && <Main/>}
                    </div>
                </div>
            </div>
        );
    }

}

ReactDOM.render(<App/>, document.getElementById('app'));
