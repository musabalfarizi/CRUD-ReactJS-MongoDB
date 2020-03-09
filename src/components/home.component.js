// index.component.js

import React, { Component } from 'react';
import axios from 'axios';


export default class Home extends Component {


    render() {
      return (

        <div className="container">

          <h2><p align="center">Welcome to React CRUD Tutorial</p> </h2> <br/>
          <p align="center"> <img src={require('../assets/logo.svg')} />  </p>
          
        </div>
      );
    }
  }