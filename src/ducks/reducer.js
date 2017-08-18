
//ACTION TYPES
const UPDATE_PLACES = 'UPDATE_PLACES';

//ACTION BUILDERS
export function updatePlaces(object){
    return {
        payload: object,
        type: UPDATE_PLACES
    }
}

let initialState = {
    placesDisplayed: {},
    myURL: 'http://localhost:3001/#',
    apiURL: 'http://localhost:3000'
}

export default function(state = initialState, action) {
    switch(action.type) {
        case UPDATE_PLACES:
            return Object.assign({}, state, {placesDisplayed: action.payload});
        default:
            return state;
    }
}
