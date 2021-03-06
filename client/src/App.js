import React, { Fragment } from 'react';
import { Route, Switch, } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import About from './components/About'
import NoMatch from './components/NoMatch';
import Lists from './components/Lists'
import List from './components/List'

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/lists' component={Lists} />
      <Route exact path='/about' component={About} />
      <Route exact path='/lists/:id' component={List} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
)
export default App;
