import React, { Component } from 'react';
import ProduceShow from '../components/ProduceShow';
import "../../../resources/stylesheets/index.scss";

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
  fetch(`/api/v1/comments/${produceId}`, {
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
        this.setState({comments: payload})
    })
  }

  render() {
    let pathname = window.location.pathname.split('/')
    let produceId = pathname[pathname.length - 1];
    let comments = this.state.comments.map(comment => {
         return(
           <CommentTile
             key={comment.id}
             id={comment.id}
             description={comment.description}
             rating={comment.rating}
           />
         )
       })
   return(
    <div className="topnav">
    <a className="home" href="/produce">Home</a>
    <a className="add-new" href="/produce/new">Add New Funny Produce</a>
    <a className="login" href="/login">Sign In</a>
    <a className="sign-up" href="/registration">Sign Up</a>
  </div>
    <hr/>
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
        produce = {this.state.produce}
      />
      </div>
    )
  }
}

export default ProduceShowContainer;