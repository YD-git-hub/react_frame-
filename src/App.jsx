import './App.less';
import router from "./router"
import { BrowserRouter as Router ,Route,Switch } from "react-router-dom";
import React, { Suspense } from 'react';
import {Spin} from "antd";
function App() {
  return (
    <Router>
      <div id="App">
        <Suspense fallback={<div className="justify-center items-center" style={{height:"100%"}}><Spin /></div>}>
          <Switch>
            {
              router.map((item,key) => {
                return (
                  <Route exact={item.exact} path={item.path} key={key}
                    render={props => (
                      <item.component {...props} routes={item.children} />
                    )} />
                )
              })
            }
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}

export default App;