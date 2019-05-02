import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addMovie } from '../store/movie/actions'

class User extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    this.props.addMovie()
  }


  render() {
    const { movie } = this.props
    return (
      <div>
        {
          JSON.stringify(movie)
        }
      </div>
    )
  }
}

const mapStatetoProps = (state) => ({
  movie: state.movie
})

const mapDispatchtoProps = (dispatch) => ({
  addMovie: () => dispatch(addMovie())
})

export default connect(mapStatetoProps, mapDispatchtoProps)(User)
