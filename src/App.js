import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Todo from './containers/Todo'
import About from './containers/About'
import User from './containers/User'

// Hook Example
import Counter from './containers/hooks/counter'
import HookUser from './containers/hooks/User'
import HookUserCustom from './containers/hooks/UserCustom'
import ReducerCounter from './containers/hooks/ReducerCounter'
import ReducerStateCounter from './containers/hooks/ReducerStateCounter'

class App extends React.Component {
  render() {
    return (       
      <Router>
        <h1>My Awesome todo list</h1>

        <Link to="/">Todo List</Link> | 
        <Link to="/about">About Page</Link> |
        <Link to="/user">User</Link> 

        

        <Switch>
          <Route path="/" exact component={Todo} />
          <Route path="/about" component={About} />
          <Route path="/user" component={User} />
          <Route path="/hook/counter" exact component={Counter} />
          <Route exact path="/hook/user" component={HookUser} />
          <Route path="/hook/user/custom" component={HookUserCustom} />
          <Route path="/hook/counter/reducer" exact component={ReducerCounter} />
          <Route path="/hook/counter/state" component={ReducerStateCounter} />
        </Switch>
      </Router>
    ) 
  }
}

export default App
