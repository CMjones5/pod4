import React from 'react';
import InputField from '../components/InputField'
import "../../../resources/stylesheets/index.scss";


class ProduceFormContainer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        produceImageUrl: '',
        produceName: '',
        produceDescription: '',
        produceFoodType: '',
        produce: []
      }
      this.handleProduceImageUrlChange = this.handleProduceImageUrlChange.bind(this)
      this.addNewProduce = this.addNewProduce.bind(this)
      this.handleProduceNameChange = this.handleProduceNameChange.bind(this)
      this.handleProduceDescriptionChange = this.handleProduceDescriptionChange.bind(this)
      this.handleProduceFoodTypeChange = this.handleProduceFoodTypeChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    handleProduceImageUrlChange(event) {
      this.setState({
        produceImageUrl: event.target.value
      })
    }
  
    handleProduceNameChange(event) {
      this.setState({
        produceName: event.target.value
      })
    }

    handleProduceDescriptionChange(event) {
        this.setState({
          produceDescription: event.target.value
        })
      }

      handleProduceFoodTypeChange(event) {
        this.setState({
          produceFoodType: event.target.value
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
        this.setState({produce: this.state.produce.concat(response)
          })
      })
    }

    handleSubmit(event) {
      event.preventDefault()
      this.addNewProduce({imageUrl:this.state.produceImageUrl, name:this.state.produceName, description:this.state.produceDescription, foodType: this.state.produceFoodType})
      document.location.replace("/produce")
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
           <form onSubmit={this.handleSubmit} className="new-produce-form callout">
          <InputField
            value={this.state.produceImageUrl}
            label="produce imageUrl"
            name="produce-imageUrl"
            onChange={this.handleProduceImageUrlChange}
          />
          <InputField
            value={this.state.produceName}
            label="produce name"
            name="produce-name"
            onChange={this.handleProduceNameChange}
          />
           <InputField
            value={this.state.produceDescription}
            label="produce description"
            name="produce-description"
            onChange={this.handleProduceDescriptionChange}
          />
           <InputField
            value={this.state.produceFoodType}
            label="produce foodType"
            name="produce-foodType"
            onChange={this.handleProduceFoodTypeChange}
          />
  
          <div className="button-group">
            <button className="button">Clear</button>
            <input className="button" type="submit" value="Submit" />
          </div>
        </form>
        </div>
      )
    }
  }
  
 export default ProduceFormContainer;
