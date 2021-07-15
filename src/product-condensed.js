import React, {Component} from 'react';
import './product-condensed.css';

class ProductCondensed extends Component {
    render() {

        return (<div className = "product-condensed">
        
        <li className="list-group-item">
           <a className="btn btn-outline-danger">X</a>
           {/* <p>{this.props.car.title} | <b>{this.props.car.price}</b></p> */}
        </li>
    </div>
    );
        
    }
}



export default ProductCondensed;