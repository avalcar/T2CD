import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';


const TimeLine = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Route path={`${match.url}/default-with-icon`}
                   component={asyncComponent(() => import('./routes/defaultWithIcon'))}/>
        </Switch>
    </div>
);

export default TimeLine;
