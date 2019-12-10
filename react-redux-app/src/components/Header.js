import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getCharacterQuote, getCharacterExact } from '../actions';
import styled from 'styled-components';

const Header = props => {
   
    const StyleButton = styled.button`
    margin-left: 2%;
    background-color: #634820;
    padding: .40%;
    border-radius: 15px;
    border: 1px solid black;
    color: white;
    `
    const CharLinks = styled.p`
    font-family: 'Montserrat';
    cursor: pointer;
    `
    const Info = styled.div`
    font-family: 'Montserrat';
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 250px;
    margin: 3% auto;
    width: 60%;
    border: 1px solid black;
    background-color: #4D3E27;
    border-radius: 15px;
    color: white;
    padding: 1%
    border: 2px solid black;
    `
    const HeaderText = styled.h2`
  font-family: "Tangerine"
  `
    const InfoText = styled.p`
        
    `
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
                <StyleButton onClick={handleSubmit}>Get Character Quotes</StyleButton>         
            </form>
            {props.error && <div>{props.error}</div>}
            {props.isLoading ? (
                <>
                <div>Loading Character Data...</div>
                <HeaderText>Profile</HeaderText>
                </>
            ) : (<div>
                    {props.charLink.map((name, index) => (
                        console.log(name),
                    <CharLinks onClick={() => props.getCharacterExact(name.name)}key={index}>{name.name}</CharLinks>))}
                    <HeaderText>Profile</HeaderText>
                    {props.character.name && <Info className = "char-list">
                        <InfoText>{props.character.name}</InfoText>
                        <InfoText>{props.character.race}</InfoText>
                        <InfoText>{props.character.gender}</InfoText>
                        <InfoText>{props.character.hair}</InfoText>
                        <InfoText>{props.character.height}</InfoText>
                        <InfoText>{props.character.birth}</InfoText>
                        <InfoText>{props.character.death}</InfoText>
                    </Info>}
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