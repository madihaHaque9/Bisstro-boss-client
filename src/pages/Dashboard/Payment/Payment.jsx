import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Payment = () => {
    const [cart ] = UseCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const price = parseInt(total.toFixed(2))
    return (
        <div>
           <SectionTitle heading="Payment" subheading="Please pay to eat"></SectionTit> 
           <div>
            <Elements stripe={stripePromise}>
           <CheckOutForm cart={cart} price={price}></CheckOutForm>
            </Elements>
           </div>
        </div>
    );
};

export default Payment;