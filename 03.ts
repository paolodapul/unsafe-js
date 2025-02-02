/**
 * `Object` provides no guarantee about the structure
 */

function processPayment(data: Object) {
  console.log((data as any).amount);
}
