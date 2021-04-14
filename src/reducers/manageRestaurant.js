import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: [],
    }, action) {
        console.log(state)
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuid(),
                text: action.restaurant.text
            }
            // return {restaurants: state.restaurants.concat(restaurant)} it dosen't work when we have reviews
            return {
                ...state,
                restaurants: [...state.restaurants, restaurant]
            }

        case 'DELETE_RESTAURANT':
            return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
        
        case 'ADD_REVIEW': 
            const review = {
                id: cuid(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }
            return { ...state,
                reviews: [...state.reviews, review]
            }
        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(review => review.id !== action.id);
            return {...state, reviews }
          
        default:
            return state;
    }
}
