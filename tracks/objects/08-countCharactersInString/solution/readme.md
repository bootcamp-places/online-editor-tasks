 # countCharactersInString

Розв'язання цієї задачі може виглядати ось так:

```js
const countCharactersInString = (string) => {
    return string
        .toLowerCase()
        .replace(/\s/g, '')
        .split('')
        .reduce((acc, val)=> val in acc ? {...acc, [val]: acc[val] + 1} : { ...acc, [val]: 1}, {});
};
```
