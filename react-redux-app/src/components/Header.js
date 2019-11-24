import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getCharacterQuote, getCharacterExact } from '../actions';


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
            {props.error && <div>{props.error}</div>}
            {props.isLoading ? (
                <div>Loading Character Data...</div>
            ) : (<div>
                    {props.charLink.map((name, index) => (
                        console.log(name),
                    <p onClick={() => props.getCharacterExact(name.name)}key={index}>{name.name}</p>))}
                    <div className = "char-list">
                        <p>{props.character.name}</p>
                        <p>{props.character.race}</p>
                        <p>{props.character.gender}</p>
                        <p>{props.character.hair}</p>
                        <p>{props.character.height}</p>
                        <p>{props.character.birth}</p>
                        <p>{props.character.death}</p>
                    </div>
                </div>)}
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
    { getCharacterQuote, getCharacterExact }
)(Header);