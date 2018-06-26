import React, { Component } from 'react';
import styled from 'styled-components';

class Navigation extends Component {
    render() {
        const Container = styled.div `
            width: 100%;
            display: flex;
            flex-direction: row;
        `
        const LeftContainer = styled.div `
            align-self: flex-start;
        `
        const RightContainer = styled.div `
            align-self: flex-end;
        `
        return(
            <Container>
                <LeftContainer></LeftContainer>
                <RightContainer></RightContainer>
            </Container>
        )
    }
}