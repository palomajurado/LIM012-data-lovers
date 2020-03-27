import data from './data/lol/lol.js';
import {
    filterByName,
    filteredbyClass,
    filteredByDifficulty,
    orderList,
} from './data.js';


const keyPressEnter = document.getElementById('inputName');
const firstScreen = document.getElementById('firstScreen');
const secondScreenOne = document.getElementById('secondScreenOne');
const footerYear = document.getElementById('year');
footerYear.innerHTML = new Date().getFullYear();

const setName = () => {
    const name = document.getElementById('inputName').value;
    const newStr = `${name[0].toUpperCase()}${name.slice(1)}`;
    const parrafo = document.getElementById('inputName_put');
    const welcome = document.querySelector('.welcomingBox');
    parrafo.innerHTML = `!\n Welcome ${newStr}\n !`;
    secondScreenOne.style.display = 'block';
    firstScreen.style.display = 'none';
    window.scroll({
        top: 0
    });
    setTimeout(() => {
        welcome.style.display = 'none';
    }, 5000);
};

document.getElementById('buttonEnter').addEventListener('click', setName);
keyPressEnter.addEventListener('keypress', ({
    keyCode,
}) => {
    if (keyCode === 13) setName();
});

const buttonDown = document.getElementById('button-down');
buttonDown.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth',
    });
});
window.onscroll = () => {
    if (window.pageYOffset > 400) {
        buttonDown.style.display = 'block';
    } else {
        buttonDown.style.display = 'none';
    }
};
/*-------------------------------------------*/

// FUNCION:PLAY BUTTON
const functionPlayButton = () => {
    const playButton = document.createElement('a');
    playButton.setAttribute('href', 'https://signup.lan.leagueoflegends.com/es/signup/redownload?page_referrer=index');
    playButton.setAttribute('target', '_blank');
    playButton.className = 'playButton';
    playButton.innerHTML = 'Play Now';
    return playButton;
};

const playButtonContainer1 = document.getElementById('buttonEnterSecondPage');
playButtonContainer1.innerHTML = '';
playButtonContainer1.appendChild(functionPlayButton());
/*-------------------------------------------*/

/* CREANDO:Elementos del DOM, inyectando en nodo padre */
const championList = data.data;
const list = document.getElementById('list');

const functionCardsStructure = (listData) => {
    const checkData = Array.isArray(listData) ? listData : Object.values(listData);

    checkData.map((champion) => {
        const div = document.createElement('div');
        div.className = 'card';
        div.style.backgroundImage = `url("${champion.splash}")`;
        const p = document.createElement('p');
        p.className = 'championName';
        p.innerHTML = `${champion.name}`;
        div.appendChild(p);

        /* BACK CARDS */
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

        // const championBox = document.createElement('div');
        // championBox.className = 'champion-box';
        // const championClass = document.createElement('div');
        // championClass.className = 'champion-class';

        const championStats = document.createElement('div');
        championStats.className = 'champion-stats';
        Object.entries(champion.info).map(([key, value]) => {
            const championStatsText = document.createElement('p');
            championStatsText.className = 'champion-stats__item';
            championStatsText.innerHTML = `${key}: ${value}`;
            championStats.appendChild(championStatsText);
            return false;
        });

        const divClassWord = document.createElement('div');
        divClassWord.className = 'divClassWord';
        const classWord = document.createElement('p');
        classWord.innerHTML = 'Class: ';
        divClassWord.appendChild(classWord);

        champion.tags.map((tag, index) => {
            const modalRolesP = document.createElement('p');
            modalRolesP.className = 'pTags';
            modalRolesP.innerHTML = champion.tags.length - 1 !== index ? `\xa0${tag},` : `\xa0${tag}`;
            divClassWord.appendChild(modalRolesP);
            backCard.appendChild(divClassWord);
            return false;
        });
        backCardInfo.appendChild(championStats);


        /* MODAL MORESTATS */
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

        const modalStatsUncle = () => {
            const moreStatsTwo = Object.entries(champion.stats);
            const moreStatsLeft = moreStatsTwo.slice(0, 11);
            const moreStatsRight = moreStatsTwo.slice(11, moreStatsTwo.length);

            /* CASCO del modal TAGS */
            const helmetModal = document.createElement('img');
            helmetModal.setAttribute('src', 'assets/casco.png');
            modalRoles.appendChild(helmetModal);

            /*-----------------------------------------------------*/

            moreStatsLeft.map(([key, value]) => {
                const modalStatsLeftList = document.createElement('p');
                modalStatsLeftList.innerHTML = `${key}: ${value}`;
                modalStatsLeft.appendChild(modalStatsLeftList);
                return false;
            });

            moreStatsRight.map(([key, value]) => {
                const modalStatsRightList = document.createElement('p');
                modalStatsRightList.innerHTML = `${key}: ${value}`;
                modalStatsRight.appendChild(modalStatsRightList);
                return false;
            });

            champion.tags.map((tag, index) => {
                const modalRolesP = document.createElement('p');
                modalRolesP.innerHTML = champion.tags.length - 1 !== index ? `${tag},` : `${tag}`;
                modalRoles.appendChild(modalRolesP);
                return false;
            });

        };
        modalCloseButton.addEventListener('click', closeModal);
        window.addEventListener('keypress', ({
            keyCode,
        }) => {
            if (keyCode === 13) closeModal();
        });

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

        /* Boton de MORESTATS y playButton (funcion fuera de esta ARRIBA) */
        const backCardContainer = document.createElement('div');
        backCardContainer.className = 'backCardContainer';

        backCardContainer.appendChild(functionPlayButton());
        backCardContainer.appendChild(moreStatsButton);
        backCardInfo.appendChild(backCardContainer);

        div.appendChild(backCard);
        list.appendChild(div);
        return false;
    });
};
functionCardsStructure(championList);
/*-----------------------------------------------------*/

/* FILTRADO: DIGITANDO NOMBRE (FALTA PULIR) */
const input = document.querySelector('#searchInputs');

if (typeof input.addEventListener !== 'undefined') {
    input.addEventListener('keyup', (evt) => {
            const term = evt.target.value.toLowerCase();
            const filteredChampions = filterByName(championList, term);

            const errorMessage = document.querySelector('#error');
            if (filteredChampions.length === 0) {
                errorMessage.classList.remove('hidden');
            } else {
                errorMessage.classList.add('hidden');
            }
            list.innerHTML = '';

            functionCardsStructure(filteredChampions);
        },
        false);
}
/*---------------------------------------------*/

/* FUNCION: HOVER ACTIVE POR CLASE SELECCIONADA */
const ul = document.querySelector('.menu');
const ul2 = document.querySelector('.menu2');
const li = document.querySelectorAll('.menu li');
const li2 = document.querySelectorAll('.menu2 li');

li.forEach((el) => {
    el.addEventListener('click', () => {
        ul.querySelector('.active').classList.remove('active');
        el.classList.add('active');
    });
});

li2.forEach((el) => {
    el.addEventListener('click', () => {
        ul2.querySelector('.active').classList.remove('active');
        el.classList.add('active');
    });
});

/*---------------------------------------------*/

/* FILTRADO: POR CLASE */
const filterClasses = (element) => {
    element.addEventListener('click', () => {
        const term = element.getAttribute('data-value');

        input.value = '';
        list.innerHTML = '';

        const filteredChampions = filteredbyClass(championList, term);
        functionCardsStructure(filteredChampions);
    });
};

li.forEach(button => filterClasses(button));
li2.forEach(button => filterClasses(button));

/*---------------------------------------------*/

/* FILTRADO: POR DIFICULTAD  (FALTA PULIR) */
const difficulty1 = document.querySelectorAll('.difficulty1 div');
difficulty1.forEach((option) => {
    option.addEventListener('click', () => {
        let term = option.getAttribute('data-value');

        if (option.classList.contains('levelFull')) {
            option.classList.remove('levelFull');
            option.classList.add('levelEmpty');
            term = 0;
        } else {
            option.classList.remove('levelEmpty');
            option.classList.add('levelFull');
        }
        list.innerHTML = '';
        const filteredChampions = filteredByDifficulty(championList, term);

        functionCardsStructure(filteredChampions);
    });
});

/*---------------------------------------------*/

/* FILTRADO: ASCENDENTE Y DESCENDENTE */
const order1 = document.querySelectorAll('.order1');
order1.forEach((option) => {
    option.addEventListener('click', () => {
        const term = option.getAttribute('data-value');

        list.innerHTML = '';
        const filteredChampions = orderList(championList, term);

        functionCardsStructure(filteredChampions);
    });
});