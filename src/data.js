/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable eol-last */
export const getArray = championList => (Array.isArray(championList) ? championList : Object.values(championList));

export const filteredbyClass = (championList, term) => {
    const filteredbyClassArray = getArray(championList).filter(champion => (champion.tags.indexOf(term) !== -1 ? champion : false));
    return term === 'ALL' ? championList : filteredbyClassArray;
};

export const filterByName = (championList, term) => {
    const filteredChampions = getArray(championList).filter(champion => (champion.name.toLowerCase().indexOf(term) !== -1 ? champion : false));
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

export const orderList = (championList, term) => getArray(championList).sort(() => (term === 'za' ? -1 : 1));