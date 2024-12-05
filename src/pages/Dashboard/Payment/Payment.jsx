import { Elements } from "@stripe/react-stripe-js";
import { loadStripe} from "@stripe/stripe-js";
import CheckoutForm from "../Payment/CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
            <div>
                <h1 className="text-3xl text-center mt-11 mb-5">PAYMENT</h1>
                <div className="w-64 mx-auto">
                   <hr />
                </div>
            </div>
            <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm></CheckoutForm>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;