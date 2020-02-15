import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layout from "./components/layout";
import {withGetScreen} from 'react-getscreen';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
      return (
        <Layout/>
      );
    }

}

  
ReactDOM.render(<App />, document.getElementById("root"));