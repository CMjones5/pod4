import React from 'react';
import CommentDescriptionField from '../components/CommentDescriptionField'
import CommentRatingField from '../components/CommentRatingField'

class CommentContainer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        description: '',
        rating: ''
      }
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
      this.handleRatingChange
       = this.handleRatingChange
       .bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
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
      this.props.addNewComment(this.state)
      this.setState({ description: '', rating: ''})
    }

    render() {
      return(
        <form onSubmit={this.handleSubmit}
        className="new-comment-form callout">
          <CommentDescriptionField
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
          />
          <div className="button-group">
            <button className="button">Clear</button>
            <input className="button" type="submit" value="Submit" />
          </div>
        </form>
      )
    }
  }

 export default CommentContainer;
