import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "redux-zero/react";
import {search} from './actions';

const App = ({items}) =>  {
  return (
    <section className="container-fluid">
        <div className="row">
          <div className="col-lg-offset-4 col-md-offset-4 col-lg-4 col-md-4">Exoplanet explorer</div>
          <button onClick={() => search()}>Click</button>
            <div>{ items.length!==0 ? 
                  items[0].pl_name
                  :
                  <br/>
                }
          </div>
          <div>{ items.length!==0 ? 
                  items[0].pl_disc
                  :
                  <br/>
                }
          </div>
          <div>{ items.length!==0 ? 
                  items[0].pl_pnum
                  :
                  <br/>
                }
          </div>

        </div>
      </section>
  );
}


const mapToProps = ({ items }) => ({ items});
export default connect(mapToProps)(App);
