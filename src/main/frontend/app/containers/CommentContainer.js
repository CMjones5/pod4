import React from 'react';
import InputField from '../components/InputField'
import CommentRatingField from '../components/CommentRatingField'

class CommentContainer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        description: '',
        rating: '',
        commentOptions: [1, 2, 3, 4, 5]
      }
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
      this.handleRatingChange= this.handleRatingChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleClearForm = this.handleClearForm.bind(this)
    }

    handleClearForm(event) {
    event.preventDefault()
    this.setState({
    description: '',
    rating: ''})
    }

    handleDescriptionChange(event) {
      this.setState({
        description: event.target.value
      })
    }

    handleRatingChange
    (event) {
      this.setState({
        rating: event.target.value
      })
    }

    handleSubmit(event) {
      event.preventDefault()
      this.props.addNewComment({produce:this.props.produce, description:this.state.description, rating:this.state.rating})
      this.setState({ description: '', rating: ''})
    }

    render() {
      return(
        <form onSubmit={this.handleSubmit}
        className="new-comment-form callout">
          <InputField
            value={this.state.description}
            label="comment description"
            name="comment-description"
            handleDescriptionChange={this.handleDescriptionChange}
          />
          <CommentRatingField
            value={this.state.rating}
            label="comment rating"
            name="comment-rating"
            handleRatingChange={this.handleRatingChange}
            options={this.state.commentOptions}
          />
          <div className="button-group">
            <button className="button" onClick={this.handleClearForm}>Clear</button>
            <input className="button" type="submit" value="Submit" />
          </div>
        </form>
      )
    }
  }

 export default CommentContainer;
