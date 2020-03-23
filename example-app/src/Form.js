import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }
  handleSubmit(e) {
    e.preventDefault()
  }

  updateName(event) {
    this.setState({
      name: event.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.name}
          onChange={this.updateName.bind(this)}
        />
      </form>
    )
  }
}

export default Form
