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
      // list: ['AUD', '2010.51', '4003.69', '540.51', '4569.21', '4587.21', '6985.75'],
      ss: "",
      cryptos: [],
      listObj: ['AUD'],
      //val : "", one = {id : 1,val:"AUD"},
      valStr: "",
      valueGroups: {
        // title: 'Mr.',
        // firstName: 'Micheal',
        // secondName: 'Jordan'
        cointype : 'AUD',
        list : ['AUD', '2010.51', '4003.69', '540.51', '4569.21', '4587.21', '6985.75'],
        //currency : [],
        cur: "",
        rate: ""
      }, 
      optionGroups: {
        
        //objects: [],
        //currency : ['AUD', 'BRL', 'CAD', 'CNY', 'EUR', 'GBP', 'HKD', 'IDR', 'ILS', 'INR', 'JPY', 'MXN', 'NOK', 'NZD', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'USD', 'ZAR'],

        //currency: ['AUD', 'BRL', 'CAD', 'CNY', 'EUR', 'GBP'],
        //rates:['2010.51', '4003.69', '540.51', '4569.21', '4587.21', '6985.75']

        currency: ["Select", "AUD"],

        //currency: [{cur: "AUD", va: "545.32"}, {cur: "DFG", va: "8796.32"}, {cur: "USD", va: "4665.23"}],
        
        // title: ['Mr.', 'Mrs.', 'Ms.', 'Dr.'],
        // firstName: ['John', 'Micheal', 'Elizabeth'],
        // secondName: ['Lennon', 'Jackson', 'Jordan', 'Legend', 'Taylor']
      }
    }
  }

  componentWillMount(){
    axios.get("https://apiv2.bitcoinaverage.com/constants/exchangerates/global")
      .then(res=> {
        const cryptos = res.data;
        //console.log(cryptos);
        //console.log(cryptos.rates);
        this.setState({cryptos: cryptos});

        //this.state.optionGroups = cryptos.rates; 

        this.state.optionGroups.currency = Object.keys(cryptos.rates); 

        this.state.listObj = cryptos.rates;

        console.log("this.state.listObj :  " + JSON.stringify(this.state.listObj));

        //this.state.currency = [...Object.keys(cryptos.rates)];

        console.log("optionGroups.currency : " + JSON.stringify(this.state.optionGroups.currency));

        console.log("objects array : " + JSON.stringify(this.state.list));
        

        //this.setState({this.state.currency: cryptos});
        //console.log("Currency : " + this.state.currency.rates);

        // this.state.cryptos.map(item =>{
        //     console.log("item :  " + item);
        // })  

        //this.state.currency.map
      })

      //this.setState({: })
  }

  

  handleChange = (name, value) => {
    this.setState(({valueGroups}) => ({
      valueGroups: {
        ...valueGroups,
        [name]: value
      }
    }));
    //console.log("name : " + name + "  value : " + value);
    this.valStr = value;

    this.state.ss = this.valStr;

    console.log("this.state.listObj from event :  " + JSON.stringify(this.state.listObj));

//    console.log("this.state.list :  " + this.state.list);
      //this.valStr = this.state.list.ss.rate;

      // {this.state.listObj.map(value => {
      //   this.valStr = value.ss;
      // })}
    
    //console.log("optionGroups : " + JSON.stringify(this.state.optionGroups));
  };

  


    render(){
      const {optionGroups, valueGroups} = this.state;

      //const generateElement = 

      return (
        <div>
          {/* <h1>Shubham</h1> */}
          <img src={logo} width="200" height="150" className="logo" />
      {/* <h1 className="app-title">{this.state.list.map(item =>{
      return(<h1>{item}</h1>)
      })}</h1> */}

      <h1 className="app-title">{this.valStr}</h1>
      {/* <h1 className="app-title">{this.state.listObj.map(item =>{
        item
      })}</h1> */}

      {/* {this.state.optionGroups.list.map(item =>{
        return(<h1>dffff</h1>)
      })}Price */}

          <Picker
        //optionGroups={optionGroups.currency.rates}
        optionGroups={optionGroups}
        valueGroups={valueGroups}
        onChange={this.handleChange}/>
          {/* <div className="container">
            Add and Item...<br/>
            <input type="text" className="input-text" require
             value={this.state.newItem}
             onChange={e => this.updateInput(e.target.value)} placeholder="Write A Todo"/>

            <button className="add-btn" onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}>Add Todo</button>

            <div className="list">
                <ul>
                  {this.state.list.map(item => {
                    return(<li key={item.id}>
                            <input
                            type="checkbox"
                            name="isDone"
                            checked={item.isDone}
                            onChange={() => {}}/>
                            {item.value}
                            <button className="btn" onClick={() =>this.deleteItem(item.id)}>Delete</button>
                    </li>);
                  })}
                  <li>
                    <input type="checkbox" name="" id=""/>
                    Do Your Work
                    <button className="btn">Delete</button>
                  </li>
                </ul>
            </div>
          </div> */}
        </div>
        // </div>, <h1>This is another Component to render</h1> // you can render multiple components like this one.
      );
    }
}

export default App;

