import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../home/home.component'
import Man from '../store/hombres.component'

// Configure all routes here
const Main = () => (
    <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/man' component={Man} />
    </Switch>
)

export default Main