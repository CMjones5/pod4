import React, { Component } from 'react';
import ProduceShow from '../components/ProduceShow';
import CommentContainer from './CommentContainer';
import CommentTile from '../components/CommentTile';

class ProduceShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produce: {},
      comments: []
    }
    this.addNewComment = this.addNewComment.bind(this);
  }
  addNewComment(formPayload) {
    fetch('/api/v1/comments', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'same-origin',
      body: JSON.stringify(formPayload)
    })
    .then (response => response.json())
    .then(response => {
      this.setState({comments: this.state.comments.concat(response)
        })
    })
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
  fetch(`/api/v1/comments`, {
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
          let itemComments =
      this.setState({comments: payload})
    })
  }


  render() {
    let pathname = window.location.pathname.split('/')
    let produceId = pathname[pathname.length - 1];
    let comments = this.state.comments
    console.log(comments)
//.map(comment => {
//    if(comment.produce_id == produceId) {
//         return(
//           <CommentTile
//             key={comment.id}
//             id={comment.id}
//             description={comment.description}
//             rating={comment.rating}
//           />
//         )
//         }
//       })
   return(
      <div>
      <div>
      <ProduceShow
           id={this.state.produce.id}
           name={this.state.produce.name}
           imageUrl={this.state.produce.imageUrl}
           description={this.state.produce.description}
           foodType={this.state.produce.foodType}
      />
      <h5>Your Comments:</h5>
      {comments}
      </div>
      <div>
      <CommentContainer
        addNewComment = {this.addNewComment}
      />
     </div>
     </div>
    )
  }
}

export default ProduceShowContainer;