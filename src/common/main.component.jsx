import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../home/home.component'
import Hombres from '../store/hombres.component'

// Configure all routes here
const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/hombres' component={Hombres} />
    </Switch>
)

export default Main