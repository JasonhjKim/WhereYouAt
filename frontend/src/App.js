import React, { Component } from 'react';
import styled from 'styled-components';
import Map from './MapContainer';

export default class App extends Component {
    render() {
        const Container = styled.div `
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items:center;
        `
        return(
            <Container className="App">
                <Map/>
            </Container>
        )
    }
}
