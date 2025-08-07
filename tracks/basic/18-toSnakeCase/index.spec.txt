import { toSnakeCase } from './solution/index.js';

describe('basic/toSnakeCase', () => {
  it('should be defined', () => {
    expect(toSnakeCase).toBeDefined();
  });

  it('should transform from the camel case to the snake case', () => {
    expect(toSnakeCase('helloWorld')).toEqual('hello_world');
    expect(toSnakeCase('HelloWorld')).toEqual('hello_world');
    expect(toSnakeCase('javaScript')).toEqual('java_script');
  });
});
