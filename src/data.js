export const getArray = championList => (Array.isArray(championList) ? championList : Object.values(championList));

export const getAvgOnInfo = (property, championList) => championList.reduce(
    (acc, { info }) => acc + info[property], 0,
) / championList.length;

export const getAvgOnStats = (property, championList) => championList.reduce(
    (acc, { stats }) => acc + stats[property], 0,
) / championList.length;

export const filteredbyClass = (championList, term) => getArray(championList).filter(({ tags }) => tags.indexOf(term) !== -1);

export const filterByName = (championList, term) => getArray(championList).filter(({ name }) => name.toLowerCase().startsWith(term));

export const filteredByDifficulty = (championList, term) => {
    const list = getArray(championList);
    switch (term) {
        case '1':
            return list.filter(({ info: { difficulty } }) => difficulty < 4);
        case '2':
            return list.filter(({ info: { difficulty } }) => difficulty > 3 && difficulty < 7);
        case '3':
            return list.filter(({ info: { difficulty } }) => difficulty > 6);
        default:
            return list;
    }
};

export const orderList = (championList, orderBy) => getArray(championList).sort(() => (orderBy ? -1 : 1));