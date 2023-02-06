# validateEmail

Розв'язання цієї задачі може виглядати ось так:

```js
const validateEmail = (email = "") => {
  const validatedEmail = email.match(/[^@]{1,64}@[^@]+\..{2,}/)?.[0] || "";

  return email === validatedEmail;
};
```

## Корисні посилання

1. [StackOverflow: How can I validate an email address using a regular expression?](https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression)
1. [StackOverflow: Can it cause harm to validate email addresses with a regex?](https://stackoverflow.com/questions/48055431/can-it-cause-harm-to-validate-email-addresses-with-a-regex)
