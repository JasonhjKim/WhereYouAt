import React, { Component } from 'react';
import styled from 'styled-components';

export default class App extends Component {
    render() {
        function initMap() {
            var myLatLng = {lat: -25.363, lng: 131.044};
    
            // Create a map object and specify the DOM element
            // for display.
            var map = new google.maps.Map(document.getElementById('map'), {
              center: myLatLng,
              zoom: 4
            });
    
            // Create a marker and set its position.
            var marker = new google.maps.Marker({
              map: map,
              position: myLatLng,
              title: 'Hello World!'
            });
          }
        const Container = styled.div `
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `
        return(
            <Container className="App">
            {initMap()}
                <h1>Yo waddup</h1>
            </Container>
        )
    }
}