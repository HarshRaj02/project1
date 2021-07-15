import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from './http-service'
import Car from './cars.js'
import WishList from './wishlist.js'
import ProductCondensed from './product-condensed.js'



const http = new HttpService();

class App extends  Component {


  
  constructor(props){


    super(props);

    this.state = {cars:[]};

    this.loadData = this.loadData.bind(this);
    this.loadData();
    this.carList = this.carList.bind(this);
    
    //  http.getCars().then((cars)=>{
    //  console.log(cars);
    //  });

  }
  
  loadData = () => {
    var self = this;
    http.getCars().then(data => {
      self.setState({cars:data});
    }, err =>{

    });
  }

  carList = () => {

    const list = this.state.cars.map((car) => 
      <div className ="col-sm-4" key={car._id}>
        <Car name = {car.name} price = {car.price} location = {car.location} imgUrl="https://www.drivespark.com/images/2021-01/toyota-fortuner-exterior-1.jpg"/>
      </div> 
    );
    return (list);
  };

    
  
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className = " container-fluid App-main">
          <div className ="row ">
            <div className = "col-sm-8">
              <div className="row prodRow">
                {this.carList()}
              </div>
            
            </div>

            <div className ="col-sm-4">
              <WishList />
            </div>
           
          </div> 
        </div>
      </header>
    </div>
  );
}}

export default App;
