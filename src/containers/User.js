import React, { Component } from 'react'
import axios from 'axios'

export default class User extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(({data}) => {
      this.setState({
        users: data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  

  render() {
    const {users} = this.state
        
    return (
      <div>
        {
          users.length === 0 ? <h3>lagi Loading</h3> : (
            <ul>
              {
                users.map(user => <li key={user.id}>{user.name}</li>)
              }
            </ul>
          )    
        }
      </div>
    )
  }
}
