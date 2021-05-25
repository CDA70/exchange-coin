import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section `
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;

export default function AccountBalance(props) {
    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = null;
    if (props.showBalance) {
        content = <><strong>Balance = $</strong> {props.amount}</>

    }

    return (
        <Section className="balance">
            {content}
            <button onClick={props.handleBalanceVisibilityChange}>{buttonText}</button>
        </Section>
    );
}


AccountBalance.propTypes = {
    amount: propTypes.number.isRequired
}