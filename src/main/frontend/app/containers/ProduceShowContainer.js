import React, { Component } from 'react';
import ProduceShow from '../components/ProduceShow';
import "../../../resources/stylesheets/index.scss";


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
      <div>
      <div className="topnav">
      <a className="home" href="/produce">Home</a>
      <a className="add-new" href="/produce/new">Add New Funny Produce</a>
      <a className="login" href="/login">Sign In</a>
      <a className="sign-up" href="/registration">Sign Up</a>
    </div>
    <hr/>
      <ProduceShow
        id={this.state.produce.id}
        name={this.state.produce.name}
        imageUrl={this.state.produce.imageUrl}
        description={this.state.produce.description}
        foodType={this.state.produce.foodType}
      />
      </div>
    )
  }
}

export default ProduceShowContainer;