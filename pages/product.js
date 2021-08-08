import React, { Component, Fragment } from 'react'

export default class product extends Component {
    render() {
        return (
            <Fragment>
                <div class="min-h-screen bg-gray-100 flex items-center">
                    <div class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
                        <img class="rounded-xl" src="https://paleoleap.com/pictures/2/re-re/2/breakfast-salad-main-large.jpg" alt="" />
                        <div class="flex justify-between items-center">
                        <div>
                            <h1 class="mt-5 text-2xl font-semibold">Breakfast</h1>
                            <p class="mt-2">$10.50</p>
                        </div>
                        <div>
                            <button class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">ADD TO CART</button>
                        </div>
                        </div>
                        <a className="flex mt-8 uppercase font-bold text-blue-500 text-xs" href="/#">Navigate To Checkout Page </a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

