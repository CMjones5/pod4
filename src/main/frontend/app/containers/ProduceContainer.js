import React, { Component } from 'react';
import ProduceTile from '../components/ProduceTile';

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
          name={product.name}
          foodType={product.foodType}
          description={product.description}
        />
      )
    })

    return(
      <div className="row">
        <div className="small-8 small-centered columns">
          <h1>Weird Fruits and Vegetables</h1>
          <hr/>
          {produce}
        </div>
      </div>
    )
  }
}

export default ProduceContainer;

//Need to add to form: <ProduceFormContainer addNewproduce={this.addNewproduce} />