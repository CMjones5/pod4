import React, { Component } from 'react';

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

  addNewproduce(formPayload) {
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
    let produce = this.state.produce.map(produce => {
      return(
        <ProduceTile
          key={produce.id}
          id={produce.id}
          title={produce.title}
          content={produce.content}
        />
      )
    })

    return(
      <div className="row">
        <div className="small-8 small-centered columns">
          <h1>My FOOD!</h1>
          <hr/>
          {produce}
          <ProduceFormContainer addNewproduce={this.addNewproduce} />
        </div>
      </div>
    )
  }
}

export default ProduceContainer;
