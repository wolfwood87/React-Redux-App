import {
    CHARQUOTE_LOAD_START,
    CHAR_LOAD_SUCCESS,
    CHAR_LOAD_FAILURE,
    CHAR_LINK,
    CHARQUOTE_LOAD_SUCCESS,
    CHARQUOTE_LOAD_FAILURE
} from '../actions';

const initialState = {
    isLoading: false,
    error: '',
    character: { name: '', race: '', gender: '', hair: '', height: '', birth: '', death: '', quotes: []},
    charLink: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHARQUOTE_LOAD_START:
            return {
                ...state,
                error: '',
                isLoading: true,
                charLink: [],
                character: { name: '', race: '', gender: '', hair: '', height: '', birth: '', death: '', quotes: []}
            };
        case CHAR_LOAD_SUCCESS:
            return {
                ...state,
                character: {
                    ...state.character,
                    name: 'Name: ' + action.payload.name,
                    race: 'Race: ' + action.payload.race, 
                    gender: 'Gender: ' + action.payload.gender, 
                    hair: 'Hair: ' + action.payload.hair, 
                    height: 'Height: ' + action.payload.height, 
                    birth: 'Birth: ' + action.payload.birth, 
                    death: 'Death: ' + action.payload.death
                }
            }
        case CHAR_LOAD_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case CHAR_LINK:
            console.log(action.payload)
            return {
                ...state,
                charLink: action.payload,
                isLoading: false
            }
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