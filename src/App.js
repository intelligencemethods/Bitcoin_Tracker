/*
Developed By: Intelligence Methods
*/
import React from 'react';
import logo from './bitcoin_icon.png';
import './App.css';
import Picker from 'react-mobile-picker';
import axios from 'axios';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      ss: "",
      cryptos: [],
      listObj: ['AUD'],
      valStr: "",
      valueGroups: {
        cointype : 'AUD',
        list : ['AUD', '2010.51', '4003.69', '540.51', '4569.21', '4587.21', '6985.75'],
        cur: "",
        rate: ""
      }, 
      optionGroups: {
        currency: ["Select", "AUD"],
      }
    }
  }

  componentWillMount(){
    axios.get("https://apiv2.bitcoinaverage.com/constants/exchangerates/global")
      .then(res=> {
        const cryptos = res.data;
        this.setState({cryptos: cryptos});
        this.state.optionGroups.currency = Object.keys(cryptos.rates); 
        this.state.listObj = cryptos.rates;
      })
  }

  handleChange = (name, value) => {
    this.setState(({valueGroups}) => ({
      valueGroups: {
        ...valueGroups,
        [name]: value
      }
    }));
    this.valStr = value;
    this.state.ss = this.valStr;
  };

    render(){
      const {optionGroups, valueGroups} = this.state;
      return (
        <div>
            <img src={logo} width="200" height="150" className="logo" />
            <h1 className="app-title">{this.valStr}</h1>
      
      
              <Picker
                optionGroups={optionGroups}
                valueGroups={valueGroups}
                onChange={this.handleChange}/>
                
        </div>
        // </div>, <h1>This is another Component to render</h1> // you can render multiple components like this one.
      );
    }
}

export default App;

