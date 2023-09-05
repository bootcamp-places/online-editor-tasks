import { convertSnake } from "./solution/index.js";

const testCases = [
  {
    title: "empty string",
    string: "",
    result: "",
  },
  {
    title: "camelCase (ex. 1)",
    string: "defaultString",
    result: "default_string",
  },
  {
    title: "camelCase (ex. 2)",
    string: "defaultStringWithNumber1",
    result: "default_string_with_number_1",
  },
  {
    title: "camelCase (ex. 3)",
    string: "defaultStringWithNumber1And2",
    result: "default_string_with_number_1_and_2",
  },
  {
    title: "PascalCase (ex. 1)",
    string: "DemoScreen",
    result: "demo_screen",
  },
  {
    title: "PascalCase (ex. 2)",
    string: "DemoScreenNumber1",
    result: "demo_screen_number_1",
  },
  {
    title: "PascalCase (ex. 3)",
    string: "StyleConverterClass",
    result: "style_converter_class",
  },
  {
    title: "kebab-case (ex. 1)",
    string: "component-file-name",
    result: "component_file_name",
  },
  {
    title: "kebab-case (ex. 2)",
    string: "component-file-name-1",
    result: "component_file_name_1",
  },
  {
    title: "file/path (ex. 1)",
    string: "src/components",
    result: "src_components",
  },
  {
    title: "file/path (ex. 2)",
    string: "some/dir/file",
    result: "some_dir_file",
  },
  {
    title: "file/path (ex. 3)",
    string: "lib/screens/demo/components/index",
    result: "lib_screens_demo_components_index",
  },
  {
    title: "some words (ex. 1)",
    string: "some words",
    result: "some_words",
  },
  {
    title: "some words (ex. 2)",
    string: "Some words possible",
    result: "some_words_possible",
  },
  {
    title: "some words (ex. 3)",
    string: "some words with numbers 1 and 2",
    result: "some_words_with_numbers_1_and_2",
  },
];

describe("regexp/convertSnake", () => {
  it("should be defined", () => {
    expect(convertSnake).toBeDefined();
  });

  testCases.forEach((testCase) => {
    it(`should work for: ${testCase.title}`, () => {
      const userResult = convertSnake(testCase.string);
      const expectedResult = testCase.result;
      expect(userResult).toEqual(expectedResult);
    });
  });
});
