import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    let associatedReviews = []
    reviews ? associatedReviews = reviews.filter(review => review.restaurantId === restaurantId) : associatedReviews;

    const reviewList = associatedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })

    return (
      <ul>
        Reviews
        {reviewList}
        <br /><br />
      </ul>
    );
  }
};

export default Reviews;