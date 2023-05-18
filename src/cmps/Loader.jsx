import { Component } from 'react';

export default class Loader extends Component {
  render() {
    return (
      <div className="loader-container">
        <div className="coin-container">
          <div className="coin coin-1"></div>
          <div className="coin coin-2"></div>
          <div className="coin coin-3"></div>
        </div>
      </div>
    );
  }
}
