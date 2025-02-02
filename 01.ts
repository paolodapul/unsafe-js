function fetchPaymentDetails() {
  return {
    amount: 100,
    finalAmount: undefined,
    currency: "USD",
  };
}

let paymentData: any = fetchPaymentDetails();
console.log(paymentData.finalAmount.toFixed(2));
