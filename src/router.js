import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Continent from './Components/Continent/Continent';
import Home from './Components/Home/Home';

export default (
    <Switch>
        <Route path='/' exact component={Home}/>         
        <Route path='/:continent' component={Continent}/>
    </Switch> 
);