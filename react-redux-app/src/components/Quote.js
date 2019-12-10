import React from 'react';
import styled from 'styled-components';

const Quote = props => {
    const Quote = styled.p`
    font-family: 'Montserrat';
    width: 80%;
    margin: 2% auto;
    `
    return (
        <div>
            <Quote>{props.quote.dialog}</Quote>
        </div>
    )
}

export default Quote;