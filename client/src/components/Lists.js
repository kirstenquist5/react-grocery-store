import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Form from './Form'

class Lists extends React.Component {
  state = { lists: [], showForm: false }
    
  componentDidMount() {
    axios.get('/api/lists')
      .then(res => {
        this.setState({ lists: res.data })
      })
  }

  toggleForm = () => {
    this.setState(state => {
      return { showForm: !state.showForm }
    })
  }

  form = () => {
    return <Form submit={this.submit} />
  }

  submit = (list) => {
    axios.post('/api/lists', { list } )
    .then (res => {
      this.setState({ lists: [res.data, ...this.state.lists], showForm: false })
    })
  }

  listLists = () => {
    return this.state.lists.map(l => {
      return (
        <ul key={l.id}>
          <li>
            <Link to={`/lists/${l.id}`}>{l.name}</Link>
          </li>
        </ul>
      )
    })
  }


  render() {
    const { showForm } = this.state
    return (
      <div>
        <h2>Lists</h2>
        <button onClick={this.toggleForm}>{ showForm ? 'Hide' : 'Show'}</button>
        {showForm ? this.form() : this.listLists()}
      </div>
    )
  }
}

export default Lists
