/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable import/no-extraneous-dependencies */
import {
    filterByName,
    filteredbyClass,
    orderList,
    filteredByDifficulty,
    getArray,
    getAvgOnInfo,
    getAvgOnStats,
} from '../src/data.js';
import {
    array,
    sortedArray,
    reversedArray,
    dataAsObject,
    championsFilteredAssasins,
    championsFilteredMages,
    championsFilteredFighters,
    championsFilteredTank,
    championsFilteredSupport,
    championsFilteredMarskman,
    championsFilteredByEasy,
    championsFilteredByMedium,
    championsFilteredByHard,
    calcInfo,
    calcStats,
} from './mocks.js';

import data from '../src/data/lol/lol.js';

const championList = data.data;

describe('getArray', () => {
    it('debería ser una función', () => {
        expect(typeof getArray).toBe('function');
    });
    it('debería devolver un arreglo con la data', () => {
        expect([...getArray(dataAsObject)]).toStrictEqual(sortedArray);
    });
    it('debería devolver el mismo arreglo', () => {
        expect(getArray(array)).toStrictEqual(array);
    });
});

describe('orderList', () => {
    it('debería ser una función', () => {
        expect(typeof orderList).toBe('function');
    });

    it('Debería devolver el arreglo ordenado de la A a la Z', () => {
        expect([...orderList(array, 'az')]).toEqual(sortedArray);
    });

    it('Debería devolver el arreglo ordenado de la Z a la A', () => {
        expect([...orderList(array, 'za')]).toEqual(reversedArray);
    });
});

describe('filterByName', () => {
    it('debería ser una función', () => {
        expect(typeof filterByName).toBe('function');
    });
    it('debería retornar Campeon Morgana', () => {
        expect(filterByName(championList, 'morgana')).toStrictEqual([
            championList.Morgana,
        ]);
    });
    it('debería retornar los campeones que contengan la silaba CO', () => {
        expect(filterByName(championList, 'co')).toStrictEqual([
            championList.Corki,
            championList.Shaco,
        ]);
    });

    describe('filteredbyClass', () => {
        it('debería ser una función', () => {
            expect(typeof filterByName).toBe('function');
        });
        it('debería retornar Campeon Morgana', () => {
            expect(filterByName(championList, 'morgana')).toStrictEqual([
                championList.Morgana,
            ]);
        });

        describe('filteredbyClass', () => {
            it('debería ser una función', () => {
                expect(typeof filteredbyClass).toBe('function');
            });
        });
        it('debería retornar campeones con clase Assasin', () => {
            expect(filteredbyClass(championList, 'Assassin')).toStrictEqual(
                championsFilteredAssasins,
            );
        });
        it('debería retornar campeones con clase Mage', () => {
            expect(filteredbyClass(championList, 'Mage')).toStrictEqual(
                championsFilteredMages,
            );
        });
        it('debería retornar campeones con clase Fighter', () => {
            expect(filteredbyClass(championList, 'Fighter')).toStrictEqual(
                championsFilteredFighters,
            );
        });
        it('debería retornar campeones con clase Tank', () => {
            expect(filteredbyClass(championList, 'Tank')).toStrictEqual(
                championsFilteredTank,
            );
        });
        it('debería retornar campeones con clase Support', () => {
            expect(filteredbyClass(championList, 'Support')).toStrictEqual(
                championsFilteredSupport,
            );
        });
        it('debería retornar campeones con clase Marksman', () => {
            expect(filteredbyClass(championList, 'Marksman')).toStrictEqual(
                championsFilteredMarskman,
            );
        });
    });
});


it('debería ser una función dificultad', () => {
    expect(typeof filteredByDifficulty).toBe('function');
});

it('debería retornar campeones con dificultad fácil', () => {
    expect(filteredByDifficulty(championList, '1')).toStrictEqual(
        championsFilteredByEasy,
    );
});
it('debería retornar campeones con dificultad media', () => {
    expect(filteredByDifficulty(championList, '2')).toStrictEqual(
        championsFilteredByMedium,
    );
});
it('debería retornar campeones con dificultad dificil', () => {
    expect(filteredByDifficulty(championList, '3')).toStrictEqual(
        championsFilteredByHard,
    );
});

it('debería retornar los valores calculados info', () => {
    const infoChampions = getArray(championList);
    const assasins = filteredbyClass(infoChampions, 'Assassin');
    const assasinsInfo = {
        attack: getAvgOnInfo('attack', assasins).toFixed(1),
        defense: getAvgOnInfo('defense', assasins).toFixed(1),
        magic: getAvgOnInfo('magic', assasins).toFixed(1),
        difficulty: getAvgOnInfo('difficulty', assasins).toFixed(1),
    };
    expect(assasinsInfo).toEqual(
        calcInfo,
    );
});

it('debería retornar los valores calculados stats', () => {
    const infoChampions = getArray(championList);
    const assasins = filteredbyClass(infoChampions, 'Assassin');
    const assasinStats = {
        mp: getAvgOnStats('mp', assasins).toFixed(1),
        hp: getAvgOnStats('hp', assasins).toFixed(1),
        armor: getAvgOnStats('armor', assasins).toFixed(1),
    };
    expect(assasinStats).toEqual(
        calcStats,
    );
});