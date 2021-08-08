import React, { Fragment } from 'react';

const ShoppingCartFooter = (props) => {
    return (
        <Fragment>
            <div className="mt-2 flex">
                <div className="pl-3 mt-5 w-1/2">
                    <a className="flex mr-8 text-blue-500 text-sm" href="/product/"><span className="mr-2">←</span>{props.footerContent.continueShopping}</a>
                </div>

                <div className="pl-3 mt-5 ml-4 w-1/2">
                    <p className="mr-20 text-blue-500 text-sm text-center">
                        <span className="mr-2 text-xs text-gray-400">{props.footerContent.subTotal}</span>
                        <span className="text-lg text-black font-bold">$</span>
                        <span className="total-price text-lg text-black font-bold">{props.footerContent.totalPrice}</span>
                    </p>
                </div>
            </div>
        </Fragment>
    );
}
export default ShoppingCartFooter;
