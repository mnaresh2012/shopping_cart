import React, { Component } from 'react';
import Loading from './loading';
import ReloadCart from './reloadCart';
import ShoppingCartFooter from './shoppingCartFooter';
import CardDetails from './cardDetails';
import ShoppingCartProductsContainer from './shoppingCartProductContainer';

import { connect } from "react-redux";
import { increment, decrement } from "../actions/checkoutActions";

class ShoppingCartContainer extends Component {
    constructor() {
        super();
        this.state = {
            shoppingCart: ''
        }
    }
    componentDidMount() {
        fetch('./data/checkoutData.json').then(res => res.json()).then(data => {
            this.setState({
                shoppingCart: data.shoppingCart
            });
        });
    }
    removeProduct = (id) => {
        let dataObj = this.state.shoppingCart;
        let productObj = this.state.shoppingCart.products.filter(product => {
            return product.id != id
        });
        
        let newObj = Object.assign({}, dataObj, {products: productObj});
        this.setState({
            shoppingCart: newObj
        });
    }
    render() {
        if(this.state.shoppingCart === '' || this.state.shoppingCart === {}) {
          return <div className="container">
              <Loading />
          </div>
        }
        if(this.state.shoppingCart.products.length === 0) {
          return <div className="container mx-auto">
              <ReloadCart data = {this.state.shoppingCart}/>
          </div>
        }
        const { shoppingCart, cardDetails, cardType } = this.state.shoppingCart.staticContent;
        return (
            <div className="container mx-auto font-body">
              <div className="flex justify-center px-6 my-12">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div className="w-full h-auto bg-white bg-cover mt-5">
                          <h3 className="pt-4 mb-2 text-1xl font-bold text-black">{shoppingCart}</h3>
                        {this.props.cartItems}
                          <ShoppingCartProductsContainer 
                              removeProduct = {this.removeProduct}
                              productItems = {this.state.shoppingCart}
                              incrementCount = {this.props.increment}
                              decrementCount = {this.props.decrement}
                              cartItems = {this.props.cartItems}
                              />
                          <ShoppingCartFooter footerContent={this.state.shoppingCart.staticContent} />
                      </div>
                      <div className="w-full lg:w-1/2 bg-black bg-opacity-80 p-5 rounded-lg">
                          <div className="mb-4">
                              <h3 className="pt-4 mb-2 text-1xl font-bold text-white">{cardDetails}</h3>
                              <p className='text-white text-xs opacity-50 mt-6'>{cardType}</p>
                              <CardDetails cardContent={this.state.shoppingCart.staticContent.cardDetailsForm} /> 
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        )
  }
}

const mapStateToProps = state => ({
    cartItems: state.cartItems
  });
  
  const mapDispatchToProps = dispatch => {
    return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement())
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShoppingCartContainer);