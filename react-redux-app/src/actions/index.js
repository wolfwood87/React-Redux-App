import axios from "axios";

export const CHARQUOTE_LOAD_START = 'CHARQUOTE_LOAD_START';
export const CHAR_LOAD_SUCCESS = 'CHAR_LOAD_SUCCESS';
export const CHAR_LOAD_FAILURE = 'CHAR_LOAD_FAILURE';
export const CHARQUOTE_LOAD_SUCCESS = 'CHARQUOTE_LOAD_SUCCESS';
export const CHARQUOTE_LOAD_FAILURE = 'CHARQUOTE_LOAD_FAILURE';

export const getCharacterQuote = (name) => dispatch => {
    dispatch({type: CHARQUOTE_LOAD_START});

    axios
        .get(`https://the-one-api.herokuapp.com/v1/character`, { headers: { Authorization: "Bearer G4ZmqF8EEu0WhDSA9zaS" } })
        .then(res => {
            console.log(res.data.docs)
            let newChar = res.data.docs.filter(char => {
                return char.name.includes(name)
            })
            console.log(newChar);
            dispatch({
                type: CHAR_LOAD_SUCCESS,
                payload: newChar[0]
            })
            let charQuote = newChar[0]._id
            console.log(charQuote)
            axios
                .get(`https://the-one-api.herokuapp.com/v1/character/${charQuote}/quote`, { headers: { Authorization: "Bearer G4ZmqF8EEu0WhDSA9zaS" } })
                .then(quoteRes => {
                    console.log(quoteRes)
                    dispatch({
                        type: CHARQUOTE_LOAD_SUCCESS,
                        payload: quoteRes.data.docs
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: CHAR_LOAD_FAILURE,
                payload: 'error loading character data'
            })
        });
}