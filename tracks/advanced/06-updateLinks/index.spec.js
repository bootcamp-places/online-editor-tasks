import { updateLinks } from './solution/index.js';

describe('basic/updateLinks', () => {
  it('should be defined', () => {
    expect(updateLinks).toBeDefined();
  });

  it("should work without links", () => {
    expect(updateLinks("")).toEqual("");
    expect(updateLinks("Умови використання")).toEqual("Умови використання");
  });

  it("should work for internal links", () => {
    expect(
      updateLinks('Читайте <a href="#1">Умови використання</a> за посиланням.')
    ).toEqual('Читайте <a href="#1">Умови використання</a> за посиланням.');
  });

  it("should work for internal and external links", () => {
    expect(
      updateLinks(
        'Як було було описано у <a href="example.com" target=_blank rel=noopener>частині 1</a>, історія створення HTTP налічує тисячу років, ще з <a href="#1">епохи dot-комів</a>!'
      )
    ).toEqual(
      'Як було було описано у <a href="example.com" target="_blank" rel="noopener">частині 1</a>, історія створення HTTP налічує тисячу років, ще з <a href="#1">епохи dot-комів</a>!'
    );
    expect(
      updateLinks(
        'Як було було описано у <a href="example.com" rel=noopener target=_blank  >частині 1</a>, історія створення HTTP налічує тисячу років, ще з <a href="#1">епохи dot-комів</a>!'
      )
    ).toEqual(
      'Як було було описано у <a href="example.com" rel="noopener" target="_blank"  >частині 1</a>, історія створення HTTP налічує тисячу років, ще з <a href="#1">епохи dot-комів</a>!'
    );
    expect(
      updateLinks(
        'Як було було описано у <a href="example.com" target=_blank>частині 1</a>, історія створення HTTP налічує тисячу років, ще з <a href="#1">епохи dot-комів</a>!'
      )
    ).toEqual(
      'Як було було описано у <a href="example.com" target="_blank" rel="noopener">частині 1</a>, історія створення HTTP налічує тисячу років, ще з <a href="#1">епохи dot-комів</a>!'
    );
    expect(
      updateLinks(
        'Як було було описано у <a class="link" href="example.com"  target=_blank >частині 1</a>, історія створення HTTP налічує тисячу років, ще з <a href="#1" class="link">епохи dot-комів</a>!'
      )
    ).toEqual(
      'Як було було описано у <a class="link" href="example.com"  target="_blank" rel="noopener" >частині 1</a>, історія створення HTTP налічує тисячу років, ще з <a href="#1" class="link">епохи dot-комів</a>!'
    );
  });

});
