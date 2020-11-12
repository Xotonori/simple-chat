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
                <Route path={'/'} render={()=><Redirect to={'/sign-in'}/>}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
