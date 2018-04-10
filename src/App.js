import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './common/header.component';
import Main from './common/main.component';
import Footer from './common/footer.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="container">
          <Main {...this.props} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
