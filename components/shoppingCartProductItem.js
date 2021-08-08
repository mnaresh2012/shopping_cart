import React, { Fragment } from 'react'

const shoppingCartProductItem = (props) => {
    const {id, name, imagePath, price, counter, qty} = props.productItem;
    return (
        <div className='h-32 border-b border-gray-100'>
            <div className="mt-6 flex">
                    <div className="w-20 mt-2 flex flex-col items-center">
                        <img aria-label="boy avatar" className="focus:outline-none h-20 rounded-full" src={imagePath} />
                    </div>
                    <div className="pl-3 mt-5 w-72">
                        <p  className="focus:outline-none text-sm font-semibold leading-normal text-gray-800">{name}</p>
                        <p  className="focus:outline-none text-xs leading-3 text-gray-400 pt-1">#{id}</p>
                    </div>

                    <div className="pl-3 mt-5 w-36">
                    <nav className="relative inline-flex">
                        <button onClick={props.decrementCount.bind(this, counter, id)} className="relative inline-flex items-center bg-white text-xs text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                            </svg>
                        </button>

                        <p className="bg-white text-gray-500 relative border rounded inline-flex items-center px-3 py-1 text-xs">{qty}</p>

                        <button onClick={props.incrementCount.bind(this, counter, id)} className="relative inline-flex items-center  bg-white text-xs text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </button>
                        </nav>
                    </div>

                    <div className="pl-3 mt-7 w-20">
                        <p className="focus:outline-none text-sm font-semibold leading-normal text-gray-800">
                            <span className="relative -top-2 text-xs">$</span>{price}
                        </p>
                    </div>

                    <div className="pl-3 mt-5">
                        <button onClick={props.removeProduct.bind(this, id)} type="button" className="-mr-1 flex p-3 sm:-mr-2">
                            <svg className="h-4 w-4 text-black" x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
        </div>
    );
}
export default shoppingCartProductItem;