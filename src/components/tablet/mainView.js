import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../../index.css";
import { withGetScreen } from 'react-getscreen';
import tstep1 from '../../assets/images/tablet/Android Tablet – 1.png';
import tstep2 from '../../assets/images/tablet/Android Tablet – 2.png';
import tstep3 from '../../assets/images/tablet/Android Tablet – 3.png';
import tstep4 from '../../assets/images/tablet/Android Tablet – 4.png';
class MainView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showStep1: true,
            showStep2: false,
            showStep3: false,
            showStep4: false
        };
    }
    
    render() {
        return (
            <div>
                {this.state.showStep1 && (
                    <img src={tstep1} className="fit-screen" onClick={this.doShowStep2} />
                )}

                {this.state.showStep2 && (
                    <img src={tstep2} className="fit-screen" onClick={this.doShowStep3} />
                )}

                {this.state.showStep3 && (
                    <img src={tstep3} className="fit-screen" onClick={this.doShowStep4} />
                )}

                {this.state.showStep4 && (
                    <img src={tstep4} className="fit-screen" onClick={this.doShowStep1} />
                )}
            </div>
        );
    }


    doShowStep1 = () => this.setState((currentState) => (
        {
            showStep1: true,
            showStep4: false
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
    doShowStep4 = () => this.setState((currentState) => (
        {
            showStep3: false,
            showStep4: true
        }
    ));

}


export default withGetScreen(MainView);