import { seoTest } from "./solution/index.js";

describe("basic/seoTest", () => {
  it("should be defined", () => {
    expect(seoTest).toBeDefined();
  });
  it("should work with positive cases", () => {
    expect(
      seoTest(
        "JavaScript — це гнучка мова програмування, яка дозволяє створювати цікаві та креативні анімації й унікальні ефекти. Тут ти освоїш базовий синтаксис мови JavaScript. Яка...",
        "яка"
      )
    ).toEqual(2);
    expect(
      seoTest(
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
        "javascript"
      )
    ).toEqual(1);
    expect(seoTest("JavaScript JAVASCRIPT javascript", "javascript")).toEqual(
      3
    );
    expect(
      seoTest(
        "Java is to JavaScript as ham is to hamster. There are many programming languages and they don’t necessarily compete with each other.",
        "java"
      )
    ).toEqual(2);
    expect(
      seoTest(
        "JavaScript -> JScript -> CoffeeScript -> Typescript -> GitHub Copilot 🤖",
        "script"
      )
    ).toEqual(4);
  });
  it("should work with empty strings", () => {
    expect(seoTest("JavaScript JAVASCRIPT javascript", " ")).toEqual(0);
    expect(seoTest("", "JavaScript")).toEqual(0);
    expect(seoTest("Hello World!", "")).toEqual(0);
  });
});
