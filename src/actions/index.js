export const increment = nr => {
    return {
        type: 'INCREMENT',
        payload: nr  //the nr is the value passed in the method call
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};