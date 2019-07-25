/*import React from 'react';

class ProduceFormContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        produceImageUrl: '',
        produceName: ''
      }
      this.handleProduceImageUrlChange = this.handleProduceImageUrlChange.bind(this)
      this.handleProduceNameChange = this.handleProduceNameChange.bind(this)
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
  
    handleSubmit(event) {
      event.preventDefault()
      //this.props.addNewproduce(this.state)
      this.props.addNewProduce({imageUrl: this.state.produceImageUrl, name: this.state.produceName, description: this.state.produceDescription, foodType: this.state.produceFoodType})
      this.setState({ produceImageUrl: '', produceName: '', produceDescription: '', produceFoodType: ''})
    }
  
    render() {
      return(
        <form onSubmit={this.handleSubmit}
        className="new-produce-form callout">
          <ImageUrlField
            name={this.state.produceImageUrl}
            label="produce imageUrl"
            name="produce-imageUrl"
            handleImageUrlChange={this.handleProduceImageUrlChange}
          />
          <NameField
            name={this.state.produceName}
            label="produce name"
            name="produce-name"
            handleNameChange={this.handleProduceNameChange}
          />
           <DescriptionField
            description={this.state.produceDescription}
            label="produce description"
            name="produce-descriptiion"
            handleDescriptionChange={this.handleProduceDescriptionChange}
          />
           <FoodTypeField
            Name={this.state.produceFoodType}
            label="produce foodType"
            name="produce-foodType"
            handleFoodTypeChange={this.handleProduceFoodTypeChange}
          />
  
          <div className="button-group">
            <button className="button">Clear</button>
            <input className="button" type="submit" value="Submit" />
          </div>
        </form>
      )
    }
  }
  
  export default ProduceFormContainer;
  */