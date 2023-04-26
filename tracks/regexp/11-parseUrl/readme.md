# parseUrl

Ваша команда розробляє новітній сервер для відстеження відвідувань сайту. Ви відповідаєте за розробку функції `parseUrl`, яка буде визначати тип запиту та повертати об'єкт з відповідними властивостями. Ця функція приймає на вхід рядок `url` і повертає обʼєкт з властивостями `protocol`, `domain`, `path`, `query` та `hash`.

**Увага:** в цьому завданні потрібно розробити дуже простий парсер (див. тест кейси), не потрібно розробляти універсальний парсер, який буде враховувати всі можливі варіанти згідно [RFC 1738](https://datatracker.ietf.org/doc/html/rfc1738).

**Приклад:**

```js
parseUrl('https://shop.ua/community');
// {
//   protocol: 'https',
//   domain: 'shop.ua',
//   path: '/community',
//   query: '',
//   hash: '',
// }

parseUrl('http://www.house.gov:8080/petition/provide/?good=job&some=pharm&page=5#Start_Tag');
// {
//   protocol: 'http',
//   domain: 'www.house.gov',
//   path: '/petition/provide/',
//   query: 'good=job&some=pharm&page=5',
//   hash: 'Start_Tag',
// }
```

<details>
  <summary>Підказка</summary>

---

  Для тестування свого виразу зручно користуватись [regex101](https://regex101.com/).

  1. [MDN: Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
  1. [String.prototype.match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

</details>
