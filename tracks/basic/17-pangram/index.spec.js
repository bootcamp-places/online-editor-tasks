import { pangram } from './solution/index.js';

describe('basic/pangram', () => {
  it('should be defined', () => {
    expect(pangram).toBeDefined();
  });

  it("should work for positive cases", () => {
    expect(pangram("Щастям бʼєш жук їх глицю в фон й ґедзь пріч.")).toBeTrue();
    expect(
      pangram("Юнкерський джинґл, що при безхлібʼї чує фашист, це ловця гімн.")
    ).toBeTrue();
    expect(
      pangram("Чуєш їх, доцю, га? Кумедна ж ти, прощайся без ґольфів!")
    ).toBeTrue();
    expect(
      pangram(
        "У ґазди є ж бо гевеї, які шиють прості килими, наче хащі фацелій."
      )
    ).toBeTrue();
  });

  it("should work for negative cases", () => {
    expect(pangram("Якась дурня тут написана!")).toBeFalse();
    expect(pangram("Не кожний текст є панграмою.")).toBeFalse();
  });

  it("should work for empty string", () => {
    expect(pangram("")).toBeFalse();
    expect(pangram("   ")).toBeFalse();
  });
});
