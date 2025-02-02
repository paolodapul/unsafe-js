function getPayment(id: string) {
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
