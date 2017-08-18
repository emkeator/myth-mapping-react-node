import React, {Component} from 'react';
import './MapContainer.css';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import xIcon from './x9.png';

export class MapContainer extends Component {
    
    constructor() {
        super();
        
        this.state = {
            styles: [
                {
                    "featureType": "landscape",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#826a20" 
                            // "color": "#e7cd79" 
                            
                        },
                        {
                            "weight": 0.1
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "color": "#202433"
                            // "color": "#282828"
                            
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural.landcover",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            // "color": "#826a20"
                            "color": "#d6bc68"
                        }
                    ]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "off"
                        },
                        {
                            "color": "#d6bc68"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#d6bc68"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#d6bc68"
                        }
                    ]
                },
                {
                    "featureType": "transit.station.airport",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "off"
                        },
                        {
                            "color": "#d6bc68"
                        }
                    ]
                },
                {
                    "featureType": "poi"
                },
                {
                    "featureType": "transit.line",
                    "stylers": [
                        {
                            "color": "#d6bc68"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "off"
                        },
                        {
                            "weight": 1
                        },
                        {
                            "color": "#e9d9a6"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "color": "#e9d9a6"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "color": "#e9d9a6"
                        }
                    ]
                },
                {
                    "featureType": "poi.business",
                    "stylers": [
                        {
                            "color": "#e9d9a6"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {},
                {
                    "featureType": "poi.government",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.school",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.medical",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.attraction",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "off"
                        },
                        {
                            "color": "#cfb665"
                        }
                    ]
                },
                {
                    "featureType": "poi.place_of_worship",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.sports_complex",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {},
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#cfb665"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road"
                }
            ],
            markers: []
        }
        
    }

    componentWillReceiveProps(nextProps) {
        let markers = [];
        for (let i = 0; i < nextProps.placesToDisplay.length; i++) {
            
            let curPlace = nextProps.placesToDisplay[i];
            markers.push({name: curPlace.name, lat: curPlace.lat, lng: curPlace.long});
            
        }

        this.setState({
            markers: markers
        })
    }

    render() {

        const style ={width: '80vw',
                height: '600px',
                margin: '0 auto'};
        
        return(
            
            <div className="mapContain">
                <Map className="map" v={3} style={style} google={this.props.google} zoom={this.props.zoom} center={ this.props.center } styles={this.state.styles}>
                    {this.state.markers.map((marker, i) => {
                            return (<Marker key={i} onClick={this.onMarkerClick} icon={xIcon} name={marker.name} position={{lat: marker.lat, lng:marker.lng}} />);
                        })}
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCIAnE8wIMEOs6boGiWbqseU7vSLi_nM1I'
})(MapContainer)