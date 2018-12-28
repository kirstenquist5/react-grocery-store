import React from 'react';
import axios from 'axios';
import Form from './Form';

class List extends React.Component {
  state = { list:{}, items: [{}] }

  componentDidMount() {
    axios.get(`/api/lists/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ list:res.data })
        console.log(res.data);
      })

    axios.get(`/api/lists/${this.props.match.params.id}/items`)
    .then(res => {
      this.setState({ items:res.data })
      console.log(res.data);
    })
  }

  submit = (item) => {
    
    axios.post('/api/items', { item })
      .then(res => {
        this.setState({ list: [res.data, ...this.state.lists]})
      })
    console.log(item);
  }

  showList = () => {
    // // const { list: { name } } = this.state;
    // const { items: { itemName } } = this.state;
    return (
      <div>
        <h1>{this.state.list.name}</h1>
        <br />
        {/* <h4>{this.state.items[0].name}</h4> */}
        {this.state.items.map(i => {
          return (
          <ul key={i.id}>
            <li>
              <h4>
                {i.name}
              </h4>
            </li>
          </ul>
          )
        })}
        <h3>Add new item</h3>
        <Form submit={this.submit}/>
      </div>
    )
  }

  // this.state.lists.map(p => {

  render() {
    return (
      <div>
        {this.showList()}
      </div>
    )
  }
}

export default List;