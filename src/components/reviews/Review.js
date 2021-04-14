import React, { Component } from 'react';

class Review extends Component {


  handleOnClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    return (
      <div>
        <li>
          {this.props.review.text}
          <button onClick={this.handleOnClick}> Delete Review </button><br /><br />
        </li>
       
      </div>
    );
  }

};

export default Review;