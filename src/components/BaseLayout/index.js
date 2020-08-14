// Dependencies
import React, { Component } from 'react';
// Externals
import Navbar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import WomensProducts from '../../components/Women';
import MensProducts from '../../components/Men';
import KidsProducts from '../../components/Kids';


import './index.css';




export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }




  render() {
   
    return(
      <div>
        <div >
          <Navbar />
          <Header />
        </div>
            <div className="row">
                <MensProducts />        
            </div>
            <div className="row mt-5">
                <WomensProducts/>
            </div>
            <div className="row mt-5">
                <KidsProducts />
            </div>
        <Footer />
      </div>
    )
  }
}
