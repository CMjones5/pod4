import React, { Component } from 'react';
import ProduceTile from '../components/ProduceTile';

class ProduceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produce: []
    }
    this.deleteProduce = this.deleteProduce.bind(this)
    this.editProduce = this.editProduce.bind(this)
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

  editProduce(event) {
    const id ="/produce/edit/" + event.target.id
    document.location.replace(id)
//    fetch(`/api/v1/produce/${id}`, {
//      method: 'PUT',
//      headers: {'Content-Type': 'application/json'},
//      credentials: 'same-origin',
//        }).then(res => return res)
  }

  deleteProduce(event){
    const id = event.target.id
    fetch(`/api/v1/produce/${id}`, {
     method: 'DELETE',
     headers: {'Content-Type': 'application/json'}
    })
    document.location.replace("/produce")
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
          onEditItem={this.editProduce}
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

