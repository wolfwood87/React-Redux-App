import React from "react";
import { connect } from "react-redux";
import Quote from './Quote';

const Quotes = props => {
    return (
        <div>
            <h2>Quotes</h2>
            {props.quotes.map((item, index) => (
                        <Quote key={index} quote={item} />
                    ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        quotes: state.character.quotes
    }
}
export default connect (
    mapStateToProps,
    {}
)(Quotes)