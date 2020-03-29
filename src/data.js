export const getArray = (championList) => {
  if (!Array.isArray(championList)) {
    return Object.values(championList);
  }
  return championList;
};

export const filteredbyClass = (championList, term) => {
  const filteredbyClassArray = getArray(championList).filter((champion) => {
    if (champion.tags.indexOf(term) !== -1) {
      return champion;
    }
    return false;
  });
  return term === 'ALL' ? championList : filteredbyClassArray;
};

export const filterByName = (championList, term) => {
  const filteredChampions = getArray(championList).filter((champion) => {
    if (champion.name.toLowerCase().indexOf(term) !== -1) {
      return champion;
    }
    return false;
  });

  return filteredChampions;
};

export const filteredByDifficulty = (championList, term) => {
  const list = getArray(championList);
  let filteredByDifficult = list;

  if (term === '1') {
    filteredByDifficult = list.filter((champion) => {
      if (champion.info.difficulty < 4) {
        return champion;
      }
      return false;
    });
  }

  if (term === '2') {
    filteredByDifficult = list.filter((champion) => {
      if (champion.info.difficulty > 3 && champion.info.difficulty < 7) {
        return champion;
      }
      return false;
    });
  }

  if (term === '3') {
    filteredByDifficult = list.filter((champion) => {
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
  list.innerHTML = '';
  if (term === 'az') {
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
  list.innerHTML = '';
  if (term === 'za') {
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
