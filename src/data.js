export const filterByName = (championList, term) => {
  let filteredChampions = Object.values(championList).filter(champion => {
    //indexof da -1 si no encuentra resultados
    if (champion.name.toLowerCase().indexOf(term) != -1) {
      return champion;
    }
  });

  return filteredChampions;
};

// evalua si el term es igual a 'ALL' si lo es retorna la data, sino retornar la data filtrada ok entiendo
// return condition ? championList : filteredbyClass
export const filteredbyClass = (championList, term) => {
  let filteredbyClass = Object.values(championList).filter(champion => {
    if (champion.tags.indexOf(term) != -1) {
      return champion;
    }
  });
  return term === "ALL" ? championList : filteredbyClass;
};

export const filteredByDifficulty = (championList, term) => {
  let filteredByDifficult;

  if (term === "1") {
    filteredByDifficult = Object.values(championList).filter(champion => {
      if (champion.info.difficulty < 4) {
        return champion;
      }
    });
  }

  if (term === "2") {
    filteredByDifficult = Object.values(championList).filter(champion => {
      if (champion.info.difficulty > 3 && champion.info.difficulty < 7) {
        return champion;
      }
    });
  }

  if (term === "3") {
    filteredByDifficult = Object.values(championList).filter(champion => {
      if (champion.info.difficulty > 6) {
        return champion;
      }
    });
  }

  return filteredByDifficult;
};

export const orderList = (championList, term) => {
  let orderedList;

  if (term === "az") {
    orderedList = Object.values(championList).sort();
  }
  if (term === "za") {
    orderedList = Object.values(championList)
      .sort()
      .reverse();
  }
  return orderedList;
};
