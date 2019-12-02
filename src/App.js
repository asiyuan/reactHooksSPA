import React from 'react';
import { useEffect, useState } from 'react'
import {Login, Situation} from './screen'
import {
  Switch,
  HashRouter as Router,
  Redirect,
  Route
} from 'react-router-dom'

function App() {

  const [count, setCount] = useState(() => 0)

  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/situation' component={Situation} />
        <Redirect to='/login' />
      </Switch>
    </Router>
  );
}

export default App;
