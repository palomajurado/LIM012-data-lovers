import {
  filterByName,
  filteredbyClass,
  orderList,
  filteredByDifficulty,
  getArray
} from "../src/data.js";
import {
  array,
  sortedArray,
  reversedArray,
  dataAsObject,
  championsFilteredAssasins,
  championsFilteredMages,
  championsFilteredFighters,
  championsFilteredByEasy,
  championsFilteredByMedium,
  championsFilteredByHard,
} from "./mocks.js"

import data from "../src/data/lol/lol.js";
let championList = data.data;

describe("getArray", () => {
  it("debería ser una función", () => {
    expect(typeof getArray).toBe("function");
  });
  it("debería devolver un arreglo con la data", () => {
    expect(getArray(dataAsObject)).toStrictEqual(sortedArray);
  });
  it("debería devolver el mismo arreglo", () => {
    expect(getArray(array)).toStrictEqual(array);
  });
});

describe("orderList", () => {

  it("debería ser una función", () => {
    expect(typeof orderList).toBe("function");
  });

  it("Deberia devolver el arreglo ordenado de la A a la Z", () => {
    expect(orderList(array, "az")).toStrictEqual(sortedArray);
  });

  it("Deberia devolver el arreglo ordenado de la Z a la A", () => {
    expect(orderList(array, "za")).toStrictEqual(reversedArray);
  })
});

describe("filterByName", () => {
  it("debería ser una función", () => {
    expect(typeof filterByName).toBe("function");
  });
  it("debería retornar Campeon Morgana", () => {
    expect(filterByName(championList, "morgana")).toStrictEqual([
      championList.Morgana
    ]);
  });
  it("debería retornar los campeones que contengan la silaba CO", () => {
    expect(filterByName(championList, "co")).toStrictEqual([
      championList.Corki, championList.Shaco
    ]);
  });


  describe("filteredbyClass", () => {
    it("debería ser una función", () => {
      expect(typeof filteredbyClass).toBe("function");
    });
    it("debería retornar campeones con clase Assasin", () => {
      expect(filteredbyClass(championList, "Assassin")).toStrictEqual(championsFilteredAssasins);
    });
    it("debería retornar campeones con clase Mage", () => {
      expect(filteredbyClass(championList, "Mage")).toStrictEqual(championsFilteredMages);
    });
    it("debería retornar campeones con clase Fighter", () => {
      expect(filteredbyClass(championList, "Fighter")).toStrictEqual(championsFilteredFighters);
    });

  });
});

//funcion filtrar por dificultad
it("debería ser una función dificultad", () => {
  expect(typeof filteredByDifficulty).toBe("function");
});

it("debería retornar la longitud dificultad data-value 1", () => {
  let filteredChampions = filteredByDifficulty(championList, "1");
  expect(filteredChampions.length).toBe(20);
});
it("debería retornar la longitud  dificultad data-value 2", () => {
  let filteredChampions = filteredByDifficulty(championList, "2");
  expect(filteredChampions.length).toBe(64);
});
it("debería retornar la longitud de dificultad data-value 3", () => {
  let filteredChampions = filteredByDifficulty(championList, "3");
  expect(filteredChampions.length).toBe(50);
});
it("debería retornar campeones con dificultad fácil", () => {
  expect(filteredByDifficulty(championList, "1")).toStrictEqual(championsFilteredByEasy);
});
it("debería retornar campeones con dificultad media", () => {
  expect(filteredByDifficulty(championList, "2")).toStrictEqual(championsFilteredByMedium);
});
it("debería retornar campeones con dificultad dificil", () => {
  expect(filteredByDifficulty(championList, "3")).toStrictEqual(championsFilteredByHard);

});
it('debería arrojar TypeError cuando se invoca con tipos de argumento incorrectos en el input de nombre', () => {
  expect(() => filterByName([], 0).toThrow(TypeError));
  expect(() => filterByName([], null)).toThrow(TypeError);
  expect(() => filterByName(0, 0)).toThrow(TypeError);
});
