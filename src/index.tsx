import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from "react-dom";

import App from './App';
import "./styles.scss";


if (process.env.NODE_ENV === 'development') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render');
    whyDidYouRender(React, {
      trackAllPureComponents: true,
    });
  }
  

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Niobium" />, mountNode);