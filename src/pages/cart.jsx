import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Cart extends Component {
   
    state = {}

    itemPrice = (price, quantity) => {
        return price * quantity
    }

    subItem = (cart) => {
        let count = 0
        cart.map(item => (
            count += item.inCart
        ))
        return count 
    }

    subTotal = (cart) => {
        let count = 0
        cart.map(item => (
            count = count + (item.inCart * item.price)         
        )
        )
         return count 
        
    }

    render() {
        const cart = this.props.cart;
        const SetPrice= this.subTotal(cart);
        console.log(SetPrice);  
        const launchRazorPay =()=>{
            let options={
                key:"rzp_test_jszJQLIkxBeIRh",
                amount: SetPrice*100,
                currency:"INR",
                name: "Woodworks Furniture",
                description: "Pay for Purchasing Furniture",
                    handler: ()=>{
                    alert("Payment Successfull")
                },
                theme:{color : "#f0d551"},
            }
            let razorPay = window.Razorpay(options);
            razorPay.open();
            console.log("payment started")
            
        }
        
        return (
             <div className='container'>
                <div>
                    <h1>Shopping Cart</h1>
                </div>
                <div className='row'>
                    <div className='col-9'>
                        <table class="table">
                            <thead>
                                <tr className=''>
                                    <th className="col-5 text-center">Item</th>
                                    <th className="col-3 text-center">Quantity</th>
                                    <th className="col-2 text-center">price</th>
                                    <th className="col-2 text-center"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(product => (
                                    <tr key={product._id}>
                                        <td ><img src={product.image} className='col-4' /> {product.title}</td>
                                        <td className='text-center'>
                                            <div className='my-4'>
                                                <button type="button" class="btn btn-light p-1 mx-2" disabled={product.inCart == 1} onClick={() => this.props.handleDecrement(product)}><i class="fa-sharp fa-solid fa-circle-minus"></i></button>
                                                {product.inCart}
                                                <button type="button" class="btn btn-light p-1 mx-2" onClick={() => this.props.handleIncrement(product)}><i class="fa-solid fa-circle-plus"></i></button>
                                            </div>
                                        </td>
                                        <td className='text-center'>
                                            <div className='my-4'>₹
                                                {this.itemPrice(product.price, product.inCart)}</div></td>
                                        <td className='text-center'>
                                            <div className='my-4'><button type="button" class="btn btn-light p-1" onClick={() => this.props.handleDelete(product)}><i class="fa-solid fa-trash"></i></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='col-3 border-start border-3'>
                        <div>
                            <h4>Subtotal ({this.subItem(cart)} Items) :</h4>
                            <h5 className='fw-bold'>₹{this.subTotal(cart)}</h5>
                            <div className='d-flex justify-content-center my-4'>
                                <button type="button" class="btn btn-warning btn-sm" onClick={launchRazorPay}><p className='fw-bold m-0'>Proceed to Checkout</p></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;