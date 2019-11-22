import {
    CHARQUOTE_LOAD_START,
    CHAR_LOAD_SUCCESS,
    CHAR_LOAD_FAILURE,
    CHARQUOTE_LOAD_SUCCESS,
    CHARQUOTE_LOAD_FAILURE
} from '../actions';

const initialState = {
    isLoading: false,
    error: '',
    character: { name: '', quotes: []}
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHARQUOTE_LOAD_START:
            return {
                ...state,
                isLoading: true
            };
        case CHAR_LOAD_SUCCESS:
            return {
                ...state,
                character: {
                    ...state.character,
                    name: action.payload.name
                }
            }
        case CHAR_LOAD_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case CHARQUOTE_LOAD_SUCCESS:
                console.log(action.payload)
            return {
                ...state,
                character: {
                    ...state.character,
                    quotes: action.payload
                    
                }
            }
        case CHARQUOTE_LOAD_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default: return state;
    }
}

export default reducer;