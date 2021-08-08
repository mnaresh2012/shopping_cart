import React, { Component, Fragment } from 'react'
import ShoppingCartProductItem from './shoppingCartProductItem';

class ShoppingCartProductsContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        //console.log(this.props);
        const ProductList = this.props.productItems.products.map((productItem, props) => {
            return (
                <ShoppingCartProductItem counter = {this.props.counter} incrementCount = {this.props.incrementCount} decrementCount = {this.props.decrementCount} removeProduct = {this.props.removeProduct} key={productItem.id} productItem = {productItem} />
            );
        });
        return (
            <Fragment>
                {ProductList}
            </Fragment>
        )
    }
}
export default ShoppingCartProductsContainer;
