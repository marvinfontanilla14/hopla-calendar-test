import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../../index.css";
import { withGetScreen } from 'react-getscreen';
import dstep1 from '../../assets/images/desktop/Web 1920 – 1.png';
import dstep2 from '../../assets/images/desktop/Web 1920 – 2.png';
import dstep3 from '../../assets/images/desktop/Web 1920 – 3.png';
class MainView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showStep1: true,
            showStep2: false,
            showStep3: false
        };
    }
    
    render() {
        return (
            <div>
                {this.state.showStep1 && (
                    <img src={dstep1} className="fit-screen" onClick={this.doShowStep2} />
                )}

                {this.state.showStep2 && (
                    <img src={dstep2} className="fit-screen" onClick={this.doShowStep3} />
                )}

                {this.state.showStep3 && (
                    <img src={dstep3} className="fit-screen" onClick={this.doShowStep1} />
                )}
            </div>
        );
    }


    doShowStep1 = () => this.setState((currentState) => (
        {
            showStep1: true,
            showStep3: false
        }
    ));
    doShowStep2 = () => this.setState((currentState) => (
        {
            showStep1: false,
            showStep2: true
        }
    ));
    doShowStep3 = () => this.setState((currentState) => (
        {
            showStep2: false,
            showStep3: true
        }
    ));


}


export default withGetScreen(MainView);