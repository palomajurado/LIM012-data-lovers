import data from './data/lol/lol.js';
import { filterByName, filteredbyClass, filteredByDifficulty, orderList } from './data.js';

/*PASAR DE INTERFACES 1 a 2, coge valor del input y convierte 1posicion en UPPERCASE,presenta resultado en el div welcomming con tiempo de muestra 3 seg*/
const keyPressEnter = document.getElementById('inputName');
const firstScreen = document.getElementById('firstScreen');
const secondScreen_0 = document.getElementById('secondScreen_0');
const footerYear = document.getElementById('year');
footerYear.innerHTML = new Date().getFullYear();

const setName = () => {
    const name = document.getElementById('inputName').value;
    const newStr = `${name[0].toUpperCase()}${name.slice(1)}`;
    const parrafo = document.getElementById('inputName_put');
    const welcome = document.querySelector('.welcomingBox');
    parrafo.innerHTML = `!\n Welcome ${newStr}\n !`;
    secondScreen_0.style.display = 'block';
    firstScreen.style.display = 'none';
    window.scroll({
        top: 0
    });
    setTimeout(() => (welcome.style.display = 'none'), 3000);
};

/*PASA AL SIGUIENTE SCREEN boton enter y teclado la 2da linea*/
document.getElementById('buttonEnter').addEventListener('click', setName);
keyPressEnter.addEventListener('keypress', ({ keyCode }) => {
    if (keyCode === 13) setName();
});
/*-------------------------------------------*/

/*MUESTRAS DATA: Por defecto y coge el div donde sera albergado LIST*/
const championList = data.data;
const list = document.getElementById('list');

//FUNCION:boton de jugar
const functionPlayButton = () => {
    const playButton = document.createElement('a');
    playButton.setAttribute('href', 'https://signup.lan.leagueoflegends.com/es/signup/redownload?page_referrer=index');
    playButton.setAttribute('target', '_blank');
    playButton.className = 'playButton';
    playButton.innerHTML = 'Play Now';

    return playButton;
};

const functionCardsStructure = (championList_data) => {
    const checkData = Array.isArray(championList_data) ? championList_data : Object.values(championList_data);

    checkData.map((champion) => {
        /*FRONT CARDS*/

        const div = document.createElement('div');
        div.className = 'card';
        div.style.backgroundImage = `url("${champion.splash}")`;
        const p = document.createElement('p');
        p.className = 'championName';
        p.innerHTML = `${champion.name}`;
        div.appendChild(p);

        /*BACK CARDS*/

        const backCard = document.createElement('div');
        backCard.className = 'back-card';
        const backCardInfo = document.createElement('div');
        backCardInfo.className = 'back-card__info';
        backCard.appendChild(backCardInfo);

        const championName = document.createElement('div');
        const championNameImage = document.createElement('img');
        championNameImage.className = 'boxBackImg';
        championNameImage.src = `${champion.img}`;
        championName.appendChild(championNameImage);
        backCardInfo.appendChild(championName);

        const backCardInfoTitle = document.createElement('h3');
        backCardInfoTitle.innerHTML = `' ${champion.title} '`;
        backCardInfo.appendChild(backCardInfoTitle);

        const championBox = document.createElement('div');
        championBox.className = 'champion-box';
        const championClass = document.createElement('div');
        championClass.className = 'champion-class';

        const championStats = document.createElement('div');
        championStats.className = 'champion-stats';
        Object.entries(champion.info).map(([key, value]) => {
            const championStatsText = document.createElement('p');
            championStatsText.className = 'champion-stats__item';
            championStatsText.innerHTML = `${key}: ${value}`;
            championStats.appendChild(championStatsText);
        });
        backCardInfo.appendChild(championStats);

        /*Boton de MORESTATS y playButton (funcion fuera de esta ARRIBA)*/
        const backCardContainer = document.createElement('div');
        backCardContainer.className = 'backCardContainer';

        const moreStatsButton = document.createElement('div');
        moreStatsButton.className = 'more-stats';
        moreStatsButton.innerHTML = 'More stats';
        moreStatsButton.addEventListener('click', () => {
            document.body.style.overflow = 'hidden';
            modalOverlay.style.display = 'flex';
            modalOverlay.style.top = `${window.pageYOffset}px`;

            const playButtonContainer = document.getElementById('buttonContainer');
            playButtonContainer.innerHTML = '';
            playButtonContainer.appendChild(functionPlayButton());

            modalStatsUncle(champion);
        });

        backCardContainer.appendChild(functionPlayButton());
        backCardContainer.appendChild(moreStatsButton);
        backCardInfo.appendChild(backCardContainer);

        div.appendChild(backCard);
        list.appendChild(div);
    });
};
functionCardsStructure(championList);

const playButtonContainer1 = document.getElementById('buttonContainer0');
playButtonContainer1.innerHTML = '';
playButtonContainer1.appendChild(functionPlayButton());

/*-----------------------------------------------------*/

/*MODAL MORESTATS*/
const modalOverlay = document.getElementById('overlay');
const modalRoles = document.getElementById('modal-roles');
const modalCloseButton = document.getElementById('closeButton');
const modalStatsLeft = document.getElementById('modal-stats-left');
const modalStatsRight = document.getElementById('modal-stats-right');

const closeModal = () => {
    modalStatsLeft.innerHTML = '';
    modalStatsRight.innerHTML = '';
    modalRoles.innerHTML = '';

    document.body.style.overflow = 'visible';
    modalOverlay.style.display = 'none';
};

const modalStatsUncle = (champion) => {
    const moreStats_2 = Object.entries(champion.stats);
    const moreStatsLeft = moreStats_2.slice(0, 11);
    const moreStatsRight = moreStats_2.slice(11, moreStats_2.length);

    /*CASCO del modal TAGS*/
    const helmetModal = document.createElement('img');
    helmetModal.setAttribute('src', 'assets/casco.png');
    modalRoles.appendChild(helmetModal);

    /*-----------------------------------------------------*/

    moreStatsLeft.map(([key, value]) => {
        const modalStatsLeftList = document.createElement('p');
        modalStatsLeftList.innerHTML = `${key}: ${value}`;
        modalStatsLeft.appendChild(modalStatsLeftList);
    });

    moreStatsRight.map(([key, value]) => {
        const modalStatsRightList = document.createElement('p');
        modalStatsRightList.innerHTML = `${key}: ${value}`;
        modalStatsRight.appendChild(modalStatsRightList);
    });

    champion.tags.map((tag, index) => {
        const modalRolesP = document.createElement('p');
        modalRolesP.innerHTML = champion.tags.length - 1 !== index ? `${tag},` : `${tag}`;
        modalRoles.appendChild(modalRolesP);
    });
};
modalCloseButton.addEventListener('click', closeModal);
window.addEventListener('keypress', ({ keyCode }) => {
    if (keyCode === 13) closeModal();
});

/*-------------------------------------------*/

//BUSQUEDA POR NOMBRES
const input = document.querySelector('#searchInputs');

//target : lo que sea a lo que se le aplique add event listener
if (typeof input.addEventListener != 'undefined') {
    input.addEventListener(
        'keyup',
        (evt) => {
            const term = evt.target.value.toLowerCase();
            const filteredChampions = filterByName(championList, term);

            //CHAMPION NOT FOUND
            let errorMessage = document.querySelector('#error');
            if (filteredChampions.length === 0) {
                errorMessage.classList.remove('hidden');
            } else {
                errorMessage.classList.add('hidden');
            }
            /*-----------------------------------------*/

            //vaciar arreglo para que no se duplique
            list.innerHTML = '';

            functionCardsStructure(filteredChampions);
        },
        false
    );
}

/*FUNCION: Hover del navbar*/
const ul = document.querySelector('.menu');
const ul2 = document.querySelector('.menu2');
const li = document.querySelectorAll('li');

li.forEach((el) => {
    el.addEventListener('click', function() {
        ul.querySelector('.active').classList.remove('active');
        ul2.querySelector('.active').classList.remove('active');
        el.classList.add('active');
    });
});

/*---------------------------------------------*/

/*FILTRADO: De CLASE */
li.forEach((button) => {
    button.addEventListener('click', () => {
        const term = button.getAttribute('data-value');

        list.innerHTML = '';

        const filteredChampions = filteredbyClass(championList, term);

        functionCardsStructure(filteredChampions);
    });
});

let difficulty1 = document.querySelectorAll('.difficulty1');
difficulty1.forEach((option) => {
    option.addEventListener('click', () => {
        const term = option.getAttribute('data-value');

        list.innerHTML = '';
        const filteredChampions = filteredByDifficulty(championList, term);

        functionCardsStructure(filteredChampions);
    });
});

let order1 = document.querySelectorAll('.order1');
order1.forEach((option) => {
    option.addEventListener('click', () => {
        const term = option.getAttribute('data-value');

        list.innerHTML = '';
        const filteredChampions = orderList(championList, term);

        functionCardsStructure(filteredChampions);
    });
});