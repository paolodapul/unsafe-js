function getPayment(id: string): any {
  return { amount: 100, currency: "USD" };
}
let payment = getPayment("123");
console.log(payment.someUndefinedProp); // technically invalid yet no compile time error
