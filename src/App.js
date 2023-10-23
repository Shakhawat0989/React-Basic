
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/RouterDom/Navber';
import Home from './components/RouterDom/Home';
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";
import Features from './components/RouterDom/Features';
import Blog from './components/RouterDom/Blog';
import Pricing from './components/RouterDom/Pricing';
import Error from './components/RouterDom/Error';
import Writepost from './components/RouterDom/WritePost';




export default class App extends Component {
  render() {
    return (
      <>
        
          <Main>
            <Navbar />
            <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/features" element={<Features />} />
              <Route exact path="/blog" element={<Blog />} />
              <Route exact path="/pricing" element={<Pricing />} />
              <Route exact path="/writepost" element={<Writepost />} />
              <Route  path="/*" element={<Error />} />
            </Routes>
            

          </Main>
        
       
      </>
    );
  }
}

