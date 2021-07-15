import React, {Component} from 'react';
import './cars.css';
import ds from './data-service';


class Car extends Component {

    constructor(props) {
        super(props);

        //this.state = {onWishList: ds.itemOnWishList()};

       // this.onButtonClicked = this.onButtonClicked.bind(this);

    }

  //  onButtonClicked = () => {
    //         console.log("BUTTON CLICKED");

    //         if(!this.state.onWishList)
    //         {
    //             ds.addWishListItem(this.props.car)
    //         }
                
    //         else {
    //             ds.removeWishListItem(this.props.car);    
    //         }
                
    // }
    render() {
//MAKE CHANGE HERE vid 166

        // var btnClass;

        // if(this.state.onWishList)
        //  {
        //     btnClass = "btn btn-danger";
        //  }
        
        // else {
        //     btnClass = "btn btn-primary" 
        // }
         
        return (<div className = "card car">
        <img className = "card-img-top" src = {this.props.imgUrl} alt="Car"></img>
        <div className="card-block">
            <h4 className="card-title">{this.props.name}</h4>
            <p className="card-text">Price : ${this.props.price}</p>
            <p className="card-text">Location : {this.props.location}</p>
            {/* <a href ="#" onClick={() => this.onButtonClicked()} className={btnClass}>{this.state.onWishList ? "Remove from WishList" : "Add to WishList" }</a> */}
            <a href = "#" className="btn btn-primary">Add to WishList</a>
        </div>
    </div>
    );
        
    }
}

export default Car;