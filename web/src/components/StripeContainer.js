import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import PaymentForm from './PaymentForm';

const PUBLIC_KEY="pk_test_51NtSufGg0zM1LpU2lP6XrMceuFJOaOl1I3RDKYDqSsDPrtXkZUVkm4cJDKfuDbNhgEB28YJWnlsvqCLishEGKcNj00YcICqekc";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm/>
    </Elements>
  )
}
