import React, {Component} from 'react';
import './Continent.css';
import MapContainer from './../MapContainer/MapContainer'
import axios from 'axios';
import {connect} from 'react-redux';
import {updatePlaces} from './../../ducks/reducer';

class Continent extends Component {
    constructor() {
        super();

        this.state = {
            placeList: [],
        }  
    }

    componentWillMount() {
        axios.get(`${this.props.apiURL}/api/places/${this.props.match.params.continent}`)
                .then(res => {
                    this.props.updatePlaces(res.data);
                    this.setState({
                        placeList: this.props.placesDisplayed.places,
                        zoom: this.props.placesDisplayed.zoom,
                        center: this.props.placesDisplayed.mapCenter
                    })
                })
                .catch(err => {
                    console.log(err);
                });
    }

    componentWillReceiveProps(newProps){
        console.log(newProps);
        let x = newProps.placesDisplayed.places;
        let xMarksTheSpot = [];
        for (let place = 0; place < x.length; place++) {
            xMarksTheSpot.push(<li key={place} className="placeItem"><a href="http://www.google.com" className="placeTitle">{x[place].name}</a> // {x[place].description}</li>)
        }
        this.setState({
            placeList: xMarksTheSpot,
            zoom: newProps.placesDisplayed.zoom,
            center: newProps.placesDisplayed.mapCenter

        })
    }

    render() {

        let continent = this.props.match.params.continent
        let title = (continent === 'americas') ? 'the ' + continent[0].toUpperCase() + continent.slice(1) : continent[0].toUpperCase() + continent.slice(1) ;
        console.log(this.props);
        return (
            <div className="continentContainer">
                <MapContainer placesToDisplay={this.state.placeList} zoom={this.state.zoom} center={this.state.center}/>
                <div className="continentInfo">
                    
                    <h1>Mythological Places of {title}</h1>
                    <ul>
                         {this.state.placeList}  
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {updatePlaces})(Continent);