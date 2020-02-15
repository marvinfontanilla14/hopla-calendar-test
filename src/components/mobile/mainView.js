import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../../index.css";
import { withGetScreen } from 'react-getscreen';
import mstep1 from '../../assets/images/mobile/calendar_mobile_step_1_p.png';
import mstep2 from '../../assets/images/mobile/calendar_mobile_step_2_p.png';
import mstep3 from '../../assets/images/mobile/calendar_mobile_step_3_p.png';
import mstep4 from '../../assets/images/mobile/calendar_mobile_step_4_p.png';
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
                    <img src={mstep1} className="fit-screen" onClick={this.doShowStep2} />
                )}

                {this.state.showStep2 && (
                    <img src={mstep2} className="fit-screen" onClick={this.doShowStep3} />
                )}

                {this.state.showStep3 && (
                    <img src={mstep3} className="fit-screen" onClick={this.doShowStep4} />
                )}

                {this.state.showStep4 && (
                    <img src={mstep4} className="fit-screen" onClick={this.doShowStep1} />
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