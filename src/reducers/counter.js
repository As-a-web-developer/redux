const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload; //the payload is the value passed as nr
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

export default counterReducer;