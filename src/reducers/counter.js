const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case "INCREMENT":
            return state + action.payload;
        case "DECREMENT":
            return state - action.payload;
            // there was also no default value here
        default:
            return state
    }
}

export default counterReducer;