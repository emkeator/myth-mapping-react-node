import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import router from './router';
import Footer from './Components/Footer/Footer';
import axios from 'axios';
import {connect} from 'react-redux';
import {updatePlaces} from './ducks/reducer';


class App extends Component {

  // callAxios() {
  //   axios.get(`${this.state.apiURL}/testing`).then(response => console.log(response));
  // }

  render() {
    
    return (
      <div>
        <Nav /> 
        {router} 
        {/* <div onClick={this.callAxios()}>Testing testing 123</div> */}
        <Footer />
      </div>
      
    );
  }
}

//export default App;
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {updatePlaces})(App);
