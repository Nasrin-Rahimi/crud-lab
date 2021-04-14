import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview}  />
        <Reviews 
          reviews={this.props.reviews}
          restaurantId={this.props.restaurantId}
          deleteReview={this.props.deleteReview} 
        />
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => {

  return { reviews }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch( {type: 'ADD_REVIEW', review: review} ),
    deleteReview: id => dispatch( {type: 'DELETE_REVIEW', id} )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
