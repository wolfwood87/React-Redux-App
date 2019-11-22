import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getCharacterQuote } from '../actions';

const Header = props => {
    const [charText, setCharText] = useState('');

    const handleChanges = e => {
        e.preventDefault();
        setCharText(e.target.value);
        console.log(charText)
    };
    const handleSubmit = e => {
        console.log(charText)
        e.preventDefault();
        props.getCharacterQuote(charText);
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    className="char-input"
                    type="text"
                    name="charText"
                    value={charText}
                    onChange={handleChanges}
                />
                <button onClick={handleSubmit}>Get Character Quotes</button>         
            </form>
            <div>
                {props.charLink.map((name, index) => (
                    console.log(name),
            <p onClick={() => props.getCharacterQuote(name.name)}key={index}>{name.name}</p>))}
                {props.character.name}
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        character: state.character,
        charLink: state.charLink
    }
}
export default connect(
    mapStateToProps,
    { getCharacterQuote }
)(Header);