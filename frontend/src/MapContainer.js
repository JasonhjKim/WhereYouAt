import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { secret } from './secret';

class MapContainer extends Component {
    render() {
        const style = {
            width: "500px",
            height: "500px"
        }
        return(
            <Map google={ this.props.google } zoom={ 14 } style={style}>
                <Marker onClick={ this.onMarkClick } name={"Current Location"}/>
            </Map>
        )
    }
}
export default GoogleApiWrapper({ apiKey: (secret)})(MapContainer)