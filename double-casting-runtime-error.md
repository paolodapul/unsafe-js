You're encountering this error:
> **"Uncaught (in promise) TypeError: payment.toFixed is not a function"**

### **What's Happening?**
```ts
let payment = "100" as unknown as number;
console.log(payment.toFixed(2));
```
- `"100"` is originally a **string**.
- You're using **double casting** (`as unknown as number`), which tricks TypeScript into thinking `payment` is a `number`, but **at runtime, it's still a string**.
- Since **strings don’t have a `.toFixed()` method**, you get a **TypeError**.

