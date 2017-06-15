import React, { Component } from 'react';
import { Impress, Step } from 'react-impressjs';
import 'react-impressjs/styles/react-impressjs.css';
import './App.css';
import Introduction from './components/Introduction';
import ThreePrinciples from './components/ThreePrinciples';
import ReactRedux from './components/ReactRedux';
import ReduxFlow from './components/ReduxFlow';
import AChatWithRedux from './components/AChatWithRedux';
import DoINeedRedux from './components/DoINeedRedux';

class App extends Component {
    render() {
        return (
            <Impress
                rootData={{transitionDuration: 100}}
                progress={true}
                fallbackMessage={<p>Sorry, your <b>device or browser</b> couldn't support well.</p>}
                >
                <Step data={{x:-1000, y:0, scale: 1}}>
                    <Introduction />
                </Step>
                <Step data={{x: 0, y:0, scale: 1}}>
                    <DoINeedRedux />
                </Step>
                <Step data={{x: 1000, y:0, scale: 1}}>
                    <ThreePrinciples />
                </Step>
                <Step data={{x: 2000, y:0, scale: 1}}>
                    <ReactRedux />
                </Step>
                <Step data={{x: 3000, y:0, scale: 1}}>
                    <AChatWithRedux />
                </Step>
            </Impress>
        );
    }
}

export default App;
