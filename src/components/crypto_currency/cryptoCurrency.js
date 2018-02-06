import React,{Component} from 'react';
import './cryptoCurrency.css';

export default class Cryptocurrency extends Component{
  render(){
    var {
       id,
       name,
       symbol,
       price_usd,
       percent_change_1h,
       percent_change_24h,
       percent_change_7d,
    } = this.props.data;
     return (
       <li className={"cryptocurrency " + id}>
           <p className="cryptocurrencyname">{name} ({symbol})</p>
           <h1>${ (+price_usd).toFixed(2) }</h1>
           <p>{percent_change_1h}% 1hr</p>
           <p>{percent_change_24h}% 24hrs</p>
           <p>{percent_change_7d}% 7days</p>
       </li>
     );
  }
}
