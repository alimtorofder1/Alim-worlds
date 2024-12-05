import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecore from "../../../hooks/useAxiosSecore";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";


const CheckoutForm = () => {
  const [error , setError] = useState('');
  const [clientSecret , setClientSecret] = useState('')
  const [transctionId , setTransctionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecore();
  const { user } = useAuth();
  const [cart] = useCart();
  const totalPrice = cart.reduce( (total , item)=>total+item.price,0)

  useEffect(()=>{
    axiosSecure.post('/create-payment-intent', {price: totalPrice})
    .then(res =>{
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    })
  }, [axiosSecure , totalPrice])
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }
        const { error , paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card
        })

        if(error){
          console.log('payment error' , error);
          setError(error.message);
        }
        else{
          console.log('payment method' , paymentMethod)
          setError('');
        }

        const { paymentIntent , error: confirmError } = await stripe.confirmCardPayment(clientSecret , {
          payment_method: {
            card:card,
            billing_details:{
              email: user?.email || 'anonymous',
              name: user?.displayName || 'anonymous'
            }
          }
      })
      if(confirmError){
        console.log('confirm error')
      }
      else{
        console.log('payment intent', paymentIntent)
        if(paymentIntent.status === 'succeeded'){
          console.log('transction id' , paymentIntent.id)
          setTransctionId(paymentIntent.id);

          const payment = {
            email: user.email,
            price: totalPrice,
            transctionId: paymentIntent.id,
            date: new Date(),
            productIds : cart.map(item => item.productId),
            status: 'pending'
          }
          const res = await axiosSecure.post('/payments', payment);
          console.log('payment saved',res.data)
        }
      }
    }

    return (
        <div>
             <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe || !clientSecret}>
      
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transctionId && <p className="text-green-600"> Your transction id: {transctionId}</p>}
    </form> 
        </div>
    );
};

export default CheckoutForm;