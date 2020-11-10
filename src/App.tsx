import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {PageRenderer} from "./render-page";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path={'/:page'} component={PageRenderer}></Route>
                {/*<Route path={'/404'} component={Page404}></Route>*/}
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
