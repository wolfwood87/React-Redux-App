const initialState = {
    isLoading: false,
    error: '',
    book: { name: '', quote: ''}
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default: return state;
    }
}

export default reducer;