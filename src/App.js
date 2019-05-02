import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Todo from './containers/Todo'
import About from './containers/About'
import User from './containers/User'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <h1>My Awesome todo list</h1>

          <Link to="/">Todo List</Link> |
        <Link to="/about">About Page</Link> |
        <Link to="/user">User</Link>

          <Switch>
            <Route path="/" exact component={Todo} />
            <Route path="/about" component={About} />
            <Route path="/user" component={User} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
