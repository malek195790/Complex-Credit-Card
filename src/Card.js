import React, { Component } from 'react'
import chipImage from './Chip.png';
import visaImage from './Visa.png';
import masterCardImage from './mastercard.png';

export default class CreditCard extends Component {
    constructor(props){
        super(props)
      
        this.state = {
          number: "",
          placeholder:"",
          date:"",
        };
      }
      handleChange = (e) => {
        var regx = /[^0-9 ]/g;
        if(e.target.value.length<=19 && !e.target.value.match(regx))
        this.setState({ number: e.target.value.replace(/[ ]/g,'')       
        })
        
      }

      handleChangeName = (e) => {
          if (e.target.value.length<=20)
          this.setState({placeholder:e.target.value})
      }

      handleChangeDate = (e) =>{
          var regg =/[^0-9]/g
          if (e.target.value.length<5 && !e.target.value.match(regg) && e.target.value.slice(0,2)<13)
          this.setState({date:e.target.value})
      
      }
  
      Test =(x) =>{
        return x.replace(/(.{4})/gi, '$1 ').trim()
      }
      remove =(x)=>{
          return x.replace(/(.{2})/gi, '$1/').replace(/[/]+$/gi, '')
      }
    render() {
        return (
               <div className="main-container">
                   <div className='card-body'>
                        <header className="Title-section">
                            <h1>CREDIT CARD</h1>
                        </header>
                        <div className="chip-section">
                            <img src={chipImage} className="chipImage-style"></img> 
                        </div>
                        <div className='Data-section'>
                            <article className='serial-number-date'>
                                <div>
                                    <p className='card-number'>{this.Test(this.state.number.padEnd(16,'*'))}</p>
                                </div>
                                <div className='pin-date'>
                                    <p className='pin-code'>5422</p>
                                    <span className='date-section'>
                                        <p className='month-year'>MONTH YEAR</p>
                                        <div className='date-display'>
                                            <p className='display-style'>VALID<br/>THRU</p>
                                            <p className='display-style'><i class="fas fa-caret-right"></i></p>
                                            <p className='DATE-size'>{this.remove(this.state.date.padEnd(4, '*'))}</p>
                                        </div>
                                    </span>
                                </div>
                                <p className='cardholder-display'>{this.state.placeholder.toUpperCase().padEnd(5,'*')}</p>
                            </article>
                            <article className='masterCard-visa'>
                                <div className='logo-section'>
                                    <img src={masterCardImage} className="logom-style"></img> 
                                    <img src={visaImage} className="logo-style"></img> 
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className='input'>
                        <p className="myPara-style">Full Name : </p>
                        <input value={this.state.placeholder} placeholder=" PLACEHOLDER" onChange={this.handleChangeName} />
                        <p className="myPara-style">Card Number : </p>
                        <input value={this.Test(this.state.number)} placeholder=" Example: (9999 9999 9999 9999)" onChange={this.handleChange} />
                        <p className="myPara-style">Date : </p>
                        <input value={this.state.date} placeholder=" MM / YY" onChange={this.handleChangeDate} />
                    </div>
               </div> 
        
        )
    }
}
