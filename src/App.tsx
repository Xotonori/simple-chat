import React from 'react';
import './App.scss';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {PageRenderer} from "./render-page";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path={'/:page'} component={PageRenderer}/>
                {/*<Route path={'/404'} component={PageRenderer}/>*/}
                {/*<Route path='*' render={() => <Redirect to='/404'/>}/>*/}
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
