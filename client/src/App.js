import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Main from "./component/Main";
import Tutorial from "./component/Tutorial";
import Select from "./component/Select";
import Campus from "./component/campus";
import Food from "./component/Food";
import Calendar from "./component/Calendar";
import {AnimatePresence} from "framer-motion";
import CampusDetail from './component/campusDetail';
import SelectTest from './component/remake/SelectTest'
import NewMain from './component/remake/NewMain'

export default function App(){
    return (
        <div className='App'>
            <AnimatePresence>
                <Switch>
                    <Route exact path = '/' component={Main}/>
                    <Route path = '/tutorial' component={Tutorial}/>
                    <Route path = '/select' component={Select}/>
                    <Route path = '/campus' component={Campus}/>
                    <Route path = '/food' component={Food}/>
                    <Route path = '/calendar' component={Calendar}/>
                    <Route path = '/gate/details' component={CampusDetail}/>
                    <Route path = '/selectTest' component = {SelectTest}/>
                    <Route path = '/newMain' component = {NewMain}/>
                </Switch>
            </AnimatePresence>
        </div>
    );
}