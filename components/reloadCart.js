import React, { Component, Fragment } from 'react';
import ShoppingCartFooter from './shoppingCartFooter';
import CardDetails from './cardDetails';

const ReloadCart = (props) =>  {
    const {cardDetails, cardType} = props.data.staticContent;
    return (
        <Fragment>
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div className="w-full h-auto bg-white bg-cover mt-5">
                            <h2 className="pt-4  mb-2 text-4xl font-bold text-black">Shopping Cart is Empty</h2>
                            <div className='mt-5 h-36'>
                                <a onClick={() => {
                                    window.location.reload();
                                }} className="flex mr-8 text-blue-500 text-sm" href="/#">Reload Cart</a>
                            </div>
                            <ShoppingCartFooter footerContent={props.data.staticContent} />
                        </div>
                        
                        <div className="w-full lg:w-1/2 bg-black bg-opacity-80 p-5 rounded-lg">
                            <div className="mb-4">
                                <h3 className="pt-4 mb-2 text-1xl font-bold text-white">{cardDetails}</h3>
                                <p className='text-white text-xs opacity-50 mt-6'>{cardType}</p>
                                <CardDetails cardContent={props.data.staticContent.cardDetailsForm} /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default ReloadCart;