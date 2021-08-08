import React, { Component } from 'react';

export default class cardDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            cardNumber: '',
            year: '',
            month: '',
            cvv: ''
        }
    }
    userNameChangeHandler = (e) => {this.setState({[e.target.name]: e.target.value})}
    cardChangeHandler = (e) => {this.setState({[e.target.card]: e.target.value})}
    ProccedForcheckout  = (e) => {
        e.preventDefault();
        window.alert('THANKS FOR SHOPPING.');
        //pending Task
    }
    render() {
        const {nameOnCard, cardNumber, expirationDate, cvv, years, months} = this.props.cardContent;
        return (
            <div className='text-white card-container'>
                <div className='text-white card-type'>
                    <div className="flex">
                        <div className="mt-5 flex-col items-center cursor-pointer">
                            <img src="./images/visa.png" alt="" className="right-4 bottom-2 w-96 -ml-12"/>
                        </div>
                        <div className="mt-12 pl-5 w-40 cursor-pointer">
                            <img className="w-16 -ml-6 mt-5" src="./images/master_card.png" />  
                        </div>
                    </div>
               </div>
               <div className='text-white card-type'>
                    <form type='submit' onSubmit={this.ProccedForcheckout}>

                        <div className="relative mt-6">
                        <label htmlFor="username" className="text-xs text-white opacity-50">{nameOnCard}</label>
							<input 
                            id="userName" 
                            value = {this.state.userName}
                            onChange = {this.userNameChangeHandler}  
                            name="userName" 
                            type="text" 
                            maxLength='20' 
                            className="h-10 pl-2 w-full text-white text-base" 
                            placeholder="Giga Tamarashvili" />
						</div>

						<div className="relative mt-5">
                        <label htmlFor="card" className="text-whitE text-xs opacity-50">{cardNumber}</label>
                            <input 
                            id="card" 
                            name="card" 
                            type="number" 
                            value = {this.state.card}
                            onChange = {this.cardChangeHandler} 
                            maxLength="16" 
                            className="h-10 pl-2 w-full text-base text-white" 
                            placeholder=".... .... .... ...." />
						</div>

                        <div className="card-container mt-5">
                            <div className="mb-3 flex items-end">
                                <div className="px-2 w-28 month">
                                    <label className="text-xs mb-2 ml-1 text-white opacity-50">{expirationDate}</label>
                                    <select className="form-select w-30 py-2 mb-1 cursor-pointer">
                                        {months.map(month => {
                                           return <option key={month} value={month}>{month}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="px-2 w-28 expirationDate">
                                    <select className="form-select w-full py-2 mb-1 cursor-pointer">
                                        {years.map(year => {
                                           return <option key={year} value={year}>{year}</option>
                                        })}
                                    </select>
                                </div>

                                <div className="px-2 w-28 cvv">
                                    <label className="text-xs mb-2 ml-1 text-white opacity-50">{cvv}</label>
                                    <input className="w-24 px-3 py-2 mb-1" placeholder="xxx" type="text"/>
                                </div>
                            </div>
                        </div>
                        <button className='text-white font-bold text-sm bg-blue-600 hover:bg-blue-500 w-full mt-5 py-3 px-16 rounded'>Check Out</button>
                    </form>
                </div>
            </div>
        )
    }
}