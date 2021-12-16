import './App.less';
import routers from "./router"
import FrontendAuth from "./router/FrontendAuth";
import { BrowserRouter as Router,Switch } from "react-router-dom";
import React, { Suspense } from 'react';
import {Spin} from "antd";
function App() {
  return (
    <Router>
      <div id="App">
        <Suspense fallback={<div className="justify-center items-center" style={{height:"100%"}}><Spin /></div>}>
          <Switch>
            <FrontendAuth routerConfig={routers} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}

export default App;