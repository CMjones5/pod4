import React, { Component } from 'react';
import ProduceShow from '../components/ProduceShow';

class ProduceShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produce: {}
    }
  }

  componentDidMount() {
   let produceId = this.props.params.id
  fetch(`/api/v1/produces/${produceId}`, {
    headers: {'Content-Type': "application/json"},
    credentials: 'same-origin'
  })
  .then(resp => {
    if (resp.ok) {
      return resp.json()
    }
    else {
      throw new Error(resp.body)
    }
  })
  .then(payload => {
    this.setState({produce: payload})
  })
  }

  render() {
    return(
      <ProduceShow
        id={this.state.produce.id}
        name={this.state.produce.name}
        imageUrl={this.state.produce.imageUrl}
        description={this.state.produce.description}
        foodType={this.state.produce.foodType}
      />
    )
  }
}

export default ProduceShowContainer;