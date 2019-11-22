import React from 'react';
import { connect } from 'react-redux';
import { getCharacterQuote } from '../actions';

const Header = props => {
    return (
        <>
            <button onClick={()=> props.getCharacterQuote('Gandalf')}>Gandalf Quotes</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        character: state.character
    }
}
export default connect(
    mapStateToProps,
    { getCharacterQuote }
)(Header);