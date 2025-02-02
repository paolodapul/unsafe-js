function getPayment(id: string): any {
  return { amount: 100, currency: "USD" };
}
let payment = getPayment("123");
console.log(payment.someUndefinedProp); // technically invalid yet no compile time error

/**
 * If you remove the `any` annotation, `payment.someUndefinedProp` will then be caught as type error by TypeScript
 */

/**
 * Removing `any` will give you the following type:
 * {
    amount: number;
    currency: string;
    }
 * Much better if you define what that type is e.g. Payment
 */

type Payment = {
  amount: Number;
  currency: "USD";
};

function getPayment2(id: string): Payment {
  return { amount: 100, currency: "USD" };
}
let payment2 = getPayment2("123");
// console.log(payment2.someUndefinedProp); Property 'someUndefinedProp' does not exist on type 'Payment'.ts(2339)
console.log(payment2.amount);
