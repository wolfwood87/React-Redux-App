import React from "react";
import { connect } from "react-redux";
import Quote from './Quote';
import styled from 'styled-components';
const Quotes = props => {
    const HeaderText = styled.h2`
  font-family: "Tangerine"
  `
    return (
        <div>
            <HeaderText>Quotes</HeaderText>
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