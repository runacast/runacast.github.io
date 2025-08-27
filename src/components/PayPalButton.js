'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function PayPalButton() {
  
  useEffect(() => {
    alert(window.paypal)
    if (window.paypal) {
      window.paypal
        .Buttons({
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: '10.00', // Monto del pago
                  },
                },
              ],
            });
          },
          onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
              alert('Pago completado por ' + details.payer.name.given_name);
              console.log('Detalles del pago:', details);
            });
          },
          onError: function (err) {
            console.error(err);
          },
        })
        .render('#paypal-button-container');
    }
  }, []);

  return (
    <>
      <Script
        src={`https://www.paypal.com/sdk/js?client-id=Aa8XI5VlEeKtzK4Dcvq_RLKEXvh-BpwKmeXhWQHLr67kwzL_e02mEYad3hyZJIfsq3URHaRQhIJbZ5Wc&currency=USD`}
        strategy="afterInteractive"
      />
      <div id="paypal-button-container"></div>
    </>
  );
}