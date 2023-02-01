# minifyCss

Ви працюєте над [мініфікатором CSS](https://en.wikipedia.org/wiki/Minification_(programming)) файлів. Для початку вам необхідно зробити функцію `minifyCss`, яка приймає на вхід рядок CSS і робить наступні дії:

1. прибирає [CSS коментарі](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments)
1. прибирає всі [неважливі пусті місця](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics#anatomy_of_a_css_ruleset)
1. прибирає знак ";" у останнього рядка класу

(див. тест кейси, вони не містять складних випадків, тільки дуже і дуже базові.)

**Приклад:**

```js
minifyCss(`/* --- */
.ui {
 display: none;
}
.ui-border {
 border: 0;
 clip: rect(0 0 0 0);
 position: absolute;
}`);
```

Поверне рядок наступного вигляду:

```css
.ui{display:none}.ui-border{border:0;clip:rect(0 0 0 0);position:absolute}
```

<details>
  <summary>Підказка</summary>

---

  1. Зверніть увагу на метод [replaceAll](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)
  1. Вам може знадобитись ["Regular expression syntax cheatsheet"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)
  1. Для виконання пункту 2 (прибрати незначущі пусті місця), достатньо прибрати усі пусті місця до і після `{`, `}`, `:`, `;`

</details>
