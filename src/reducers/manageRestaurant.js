import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: [],
    }, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuid(),
                text: action.restaurant.text
            }
            // console.log({restaurants: state.restaurants.concat(restaurant)})
            return {restaurants: state.restaurants.concat(restaurant)}
            // OR return {
            //     ...state,
            //     restaurants: [...state.restaurants, restaurant]
            // }

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
        
        default:
            return state;
    }
}
