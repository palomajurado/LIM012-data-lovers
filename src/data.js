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

// evalua si el term es igual a 'ALL' si lo es retorna la data, sino retornar la data filtrada ok entiendo
// return condition ? championList : filteredbyClass
export const filteredbyClass = (championList, term) => {
  let filteredbyClass = getArray(championList).filter(champion => {
    if (champion.tags.indexOf(term) != -1) {
      return champion;
    }
  });
  return term === "ALL" ? championList : filteredbyClass;
};

export const filteredByDifficulty = (championList, term) => {
  let filteredByDifficult;
  const list = getArray(championList);

  if (term === "1") {
    filteredByDifficult = list.filter(champion => {
      if (champion.info.difficulty < 4) {
        return champion;
      }
    });
  }

  if (term === "2") {
    filteredByDifficult = list.filter(champion => {
      if (champion.info.difficulty > 3 && champion.info.difficulty < 7) {
        return champion;
      }
    });
  }

  if (term === "3") {
    filteredByDifficult = list.filter(champion => {
      if (champion.info.difficulty > 6) {
        return champion;
      }
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
    orderedList = list.sort((a, b) => {

      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }).reverse();
  }
  return orderedList;
};

export const getArray = (championList) => {
  return Array.isArray(championList) ?
    championList :
    Object.values(championList)
};
