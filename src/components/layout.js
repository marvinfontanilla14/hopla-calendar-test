import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../index.css";
import {withGetScreen} from 'react-getscreen';
import MMainView from "./mobile/mainView";
import TMainView from "./tablet/mainView";
import DMainView from "./desktop/mainView";

class Layout extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
        if (this.props.isMobile()) return <MMainView/>;
        if (this.props.isTablet()) return <TMainView/>;
        return <DMainView/>;
    }

}


export default withGetScreen(Layout);