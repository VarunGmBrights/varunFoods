import React, { useContext, useState } from 'react'
import './Place.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

const { getTotalCartAmount } = useContext(StoreContext)
const [abc , setAbc] = useState({})

const ordDummy = (e) => {
   e.preventDefault()
   let name = e.target.name
   let value = e.target.value
   setAbc({
    ...abc,
    [name] : value
   })

  if(abc.value === null){
    return null
  }else{
    alert("Order Succesfully..!, Varun Will Update you on Notifications")
  }
  console.log(abc)
}

  return (
    <form onSubmit={ordDummy} className='place-order'>

      <div className="place-order-left">
     <p className="title">Delivery Information</p>
     <div className="multi-fields">
      <input type="text"   name='fname' value={abc.value}   placeholder='First Name' />
      <input type="text"  name='lname' value={abc.value}  placeholder='Last Name' />
     </div>
     <input type="email" name='mail' value={abc.value}  placeholder='Email address' />
     <input type="text" name='strt' value={abc.value}  placeholder='Street' />
     <div className="multi-fields">
      <input type="text"  name='city' value={abc.value} placeholder='City' />
      <input type="text"  name='st' value={abc.value} placeholder='State' />
     </div>
     <div className="multi-fields">
      <input type="text"  name='Zc' value={abc.value} placeholder='Zip Code' />
      <input type="text"  name='country' value={abc.value} placeholder='Country' />
     </div>
     <input type="text"  name='phnum' value={abc.value} placeholder='Phone' />
     <button className='btnn' >Cash On Delivery</button>
      </div>

     
      <div className="place-order-right">
      <div className="cart-total">
            <h2>cart Totals</h2>
            <div>
            <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount()===0?0:50}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+50}</b>
              </div>
              
            </div>
            <button >PROCCED TO PAYMENT</button>
            <small>Before you procced fill delivery Info, -address-.</small>
          </div>
      </div>

    </form>
  )
}

export default PlaceOrder