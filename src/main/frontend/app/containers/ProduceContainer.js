import React, { Component } from 'react';
import ProduceTile from '../components/ProduceTile';
import "../../../resources/stylesheets/index.scss";

class ProduceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produce: []
    }
    this.addNewProduce = this.addNewProduce.bind(this)
  }

  componentDidMount() {
    fetch("/api/v1/produce", {
      headers: {'Content-Type': 'application/json'},
      credentials: 'same-origin'
    })
    .then(resp => {
      if (resp.ok) {
        return resp.json()
      }
      else { throw new Error(resp.body)}
    })
    .then(payload => {
      this.setState({produce: payload})
    })
  }

  addNewProduce(formPayload) {
    fetch('/api/v1/produce', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'same-origin',
      body: JSON.stringify(formPayload)
    })
    .then (response => response.json())
    .then(response => {
      this.setState({produce: this.state.produce.concat(response.produce)
        })
      })
  }

  render() {
    let produce = this.state.produce.map(product => {
      return(
        <ProduceTile
          key={product.id}
          id={product.id}
          imageUrl={product.imageUrl}
        />
      )
    })

    return(
        <div>
            <div className="topnav">
              <a className="home" href="/produce">Home</a>
              <a className="add-new" href="/produce/new">Add New Funny Produce</a>
              <a className="login" href="/login">Sign In</a>
              <a className="sign-up" href="/registration">Sign Up</a>
            </div>
          <h1 className="indexTitle">Weird Fruits and Vegetables</h1>
          <hr/>
          <div className="container">
          {produce}
          </div>
      </div>
    )
  }
}

export default ProduceContainer;

