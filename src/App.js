import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "redux-zero/react";
import {search} from './actions';

const App = ({items}) =>  {
  return (
    <section className="container-fluid">
        <div className="row">
          <div className="col-md-offset-2 col-lg-8">
          <div className="col-md-offset-4 col-md-offset-4 col-lg-8 col-md-8">Exoplanet explorer</div>
          <div className="col-md-offset-4 col-md-offset-4 col-lg-8 col-md-8"><button onClick={() => search()}>Click</button></div>
          {
            items.map((item,index)=>{
              return (
              <div key ={index} item={item}>
              <p>{item.pl_name}</p>
              <p>{item.pl_disc}</p>
              <p>{item.st_rad}</p>
              </div>
              )
            })
            }
          </div>
        </div>
      </section>
  );
}


const mapToProps = ({ items }) => ({ items});
export default connect(mapToProps)(App);
