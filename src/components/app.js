import React,{Component} from 'react';
import Tickers from './ticker/tickers';

export default class App extends Component {
  render(){
    return(
      <div className="App">
        <div className="App-header">
           <h2>Cryptocurrency Ticker</h2>
        </div>
        <Tickers/>
      </div>
    )
  }
}
