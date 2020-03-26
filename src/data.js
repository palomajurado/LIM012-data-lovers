export const filterByName = (championList, term) => {
  let error = TypeError;
  let filteredChampions = getArray(championList).filter(champion => {
    //indexof da -1 si no encuentra resultados
    if (champion.name.toLowerCase().indexOf(term) != -1) {
      return champion;
    }
  });
  //typeerror
  try {
    if (term == " ") throw error;
    if (term == "0") throw error;
    if (term == null) throw error;
  } catch (error) {
    throw error();
  }
  return filteredChampions;
};

// evalua si el term es igual a 'ALL' si lo es return la data, sino retornar la data filtrada
// return condition ? championList : filtrdbyClass
export const filteredbyClass = (championList, term) => {
  const filteredbyClass1 = Object.values(championList).filter(champion => {
    if (champion.tags.indexOf(term) !== -1) {
      return champion;
    }
    return false;
  });
  return term === "ALL" ? championList : filteredbyClass1;
};

export const filteredByDifficulty = (championList, term) => {
  let filteredByDifficult = Object.values(championList);

  if (term === "1") {
    filteredByDifficult = Object.values(championList).filter(champion => {
      if (champion.info.difficulty < 4) {
        return champion;
      }
      return false;
    });
  }

  if (term === "2") {
    filteredByDifficult = Object.values(championList).filter(champion => {
      if (champion.info.difficulty > 3 && champion.info.difficulty < 7) {
        return champion;
      }
      return false;
    });
  }

  if (term === "3") {
    filteredByDifficult = Object.values(championList).filter(champion => {
      if (champion.info.difficulty > 6) {
        return champion;
      }
      return false;
    });
  }

  return filteredByDifficult;
};

export const orderList = (championList, term) => {
  let orderedList;
  const list = getArray(championList);

  if (term === "az") {
    orderedList = list.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
  if (term === "za") {
    orderedList = list
      .sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
      .reverse();
  }
  return orderedList;
};
