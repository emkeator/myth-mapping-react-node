import React, {Component} from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {updatePlaces} from './../../ducks/reducer';
const AFRICA = 'africa',
      OCEANA = 'oceana',
      ASIA = 'asia',
      EUROPE = 'europe',
      AMERICAS = 'americas',
      WORLD = 'world';

class Nav extends Component {

    getData(region){
        axios.get(`${this.props.apiURL}/api/places/${region}`)
             .then(res => {
                //  console.log('I called for', region, res.data);
                 this.props.updatePlaces(res.data);
             })
             .catch(err => {
                 console.log(err);
             });
    }

    render() {
        return (
            <nav>
                <ul>
                    <li><Link to='/world' className="navLink" onClick={() => this.getData(WORLD)}>WORLD</Link></li>
                    <li><Link to='/americas' className="navLink" onClick={() => this.getData(AMERICAS)}>AMERICAS</Link></li>
                    <li><Link to='/europe' className="navLink" onClick={() => this.getData(EUROPE)}>EUROPE</Link></li>
                    <li><Link to='/asia' className="navLink" onClick={() => this.getData(ASIA)}>ASIA</Link></li>
                    <li><Link to='/oceana' className="navLink" onClick={() => this.getData(OCEANA)}>OCEANA</Link></li>
                    <li><Link to='/africa' className="navLink" onClick={() => this.getData(AFRICA)}>AFRICA</Link></li>                     
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {updatePlaces})(Nav);