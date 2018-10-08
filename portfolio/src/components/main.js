import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Landing from './landingpage';
import Contact from './contact';
import About from './aboutme';
import Projects from './projects';



const Main = () => (
    <Switch>
    <Route exact path="/" component={Landing}/>
    <Route exact path="/home" component={Landing}/>
    <Route exact path="/aboutme" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/projects" component={Projects}/>
    
    </Switch>

);
export default Main;