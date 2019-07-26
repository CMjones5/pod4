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
   let pathname = window.location.pathname.split('/')
   let produceId = pathname[pathname.length - 1];
  fetch(`/api/v1/produce/${produceId}`, {
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