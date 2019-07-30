import React, { Component } from 'react';
import ProduceTile from '../components/ProduceTile';

class ProduceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produce: []
    }
    this.addNewProduce = this.addNewProduce.bind(this)
    this.deleteProduce = this.deleteProduce.bind(this)
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

  deleteProduce(event){
    const id = event.target.id
    fetch(`/api/v1/produce/${id}`, {
     method: 'DELETE',
     headers: {'Content-Type': 'application/json'}
    })
    document.location.replace("/produce")
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
          onDeleteItem={this.deleteProduce}
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

