/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
import data from './data/lol/lol.js';
import {
    filterByName,
    filteredbyClass,
    filteredByDifficulty,
    orderList,
} from './data.js';

const inputName = document.getElementById('inputName');
const footerYear = document.getElementById('year');
footerYear.innerHTML = new Date().getFullYear();

const setName = () => {
    const newStr = `${inputName.value[0].toUpperCase()}${inputName.value.slice(1)}`;
    document.querySelector('.pTagsTop').innerHTML = newStr;
    document.getElementById('inputName_put').innerHTML = `!\n Welcome ${newStr}\n!`;
    document.getElementById('firstScreen').classList.add('hide');
    document.getElementById('secondScreenOne').classList.add('shown');

    window.scroll({ top: 0 });
    setTimeout(() => {
        document.querySelector('.welcomingBox').classList.add('hide');
        document.querySelector('.logingName').classList.add('showFlex');
    }, 5000);
};

document.getElementById('buttonEnter').addEventListener('click', setName);

inputName.addEventListener('keypress', ({ keyCode }) => keyCode === 13 && setName());

const buttonUp = document.getElementById('button-up');
buttonUp.addEventListener('click', () => window.scroll({ top: 0, behavior: 'smooth' }));

window.onscroll = () => {
    if (window.pageYOffset >= document.documentElement.scrollHeight - window.outerHeight - 35) {
        buttonUp.classList.add('almostFinalBTN');
    } else {
        buttonUp.classList.remove('almostFinalBTN');
    }
    if (window.pageYOffset > 400) {
        buttonUp.classList.remove('hide');
        buttonUp.classList.add('shown');
    } else {
        buttonUp.classList.remove('shown');
        buttonUp.classList.add('hide');
    }
};

// FUNCION:PLAY BUTTON
const functionPlayButton = () => {
    const playButton = document.createElement('a');
    playButton.setAttribute('href', 'https://signup.lan.leagueoflegends.com/es/signup/redownload?page_referrer=index');
    playButton.setAttribute('target', '_blank');
    playButton.className = 'playButton';
    playButton.innerHTML = 'Play';
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

    checkData.forEach((champion) => {
        /* FRONT CARD */
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

        const championStats = document.createElement('div');
        championStats.className = 'champion-stats';
        Object.entries(champion.info).forEach(([key, value]) => {
            const championStatsText = document.createElement('p');
            championStatsText.className = 'champion-stats__item';
            championStatsText.innerHTML = `${key}: ${value}`;
            championStats.appendChild(championStatsText);
        });

        const divClassWord = document.createElement('div');
        divClassWord.className = 'divClassWord';
        const classWord = document.createElement('p');
        classWord.innerHTML = 'Class: ';
        divClassWord.appendChild(classWord);

        champion.tags.forEach((tag, index) => {
            const modalRolesP = document.createElement('p');
            modalRolesP.className = 'pTags';
            modalRolesP.innerHTML = champion.tags.length - 1 !== index ? `\xa0${tag},` : `\xa0${tag}`;
            divClassWord.appendChild(modalRolesP);
            championStats.appendChild(divClassWord);
        });
        backCardInfo.appendChild(championStats);


        /* MODAL MORESTATS */
        const modalOverlay = document.getElementById('overlay');
        const modalRoles = document.getElementById('modal-roles');
        const modalCloseButton = document.getElementById('closeButton');
        const modalStatsLeft = document.getElementById('modal-stats-left');
        const modalStatsRight = document.getElementById('modal-stats-right');

        const closeModal = () => {
            modalStatsLeft.innerHTML = ''; // limpio para cerrar y no acumular info de otro champion que no corresponda
            modalStatsRight.innerHTML = '';
            modalRoles.innerHTML = '';

            // debemos creando una clase para este estilo
            document.body.classList.remove('overflowHidden');
            document.body.classList.add('visible');
            modalOverlay.classList.remove('showFlex');
            modalOverlay.classList.add('hide');
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

            moreStatsLeft.forEach(([key, value]) => {
                const modalStatsLeftList = document.createElement('p');
                modalStatsLeftList.innerHTML = `${key}: ${value}`;
                modalStatsLeft.appendChild(modalStatsLeftList);
            });

            moreStatsRight.forEach(([key, value]) => {
                const modalStatsRightList = document.createElement('p');
                modalStatsRightList.innerHTML = `${key}: ${value}`;
                modalStatsRight.appendChild(modalStatsRightList);
            });

            champion.tags.forEach((tag, index) => {
                const modalRolesP = document.createElement('p');
                modalRolesP.innerHTML = champion.tags.length - 1 !== index ? `${tag},` : tag;
                modalRoles.appendChild(modalRolesP);
            });
        };
        modalCloseButton.addEventListener('click', closeModal);
        window.addEventListener('keypress', ({ keyCode }) => keyCode === 13 && closeModal());

        const moreStatsButton = document.createElement('div');
        moreStatsButton.className = 'more-stats';
        moreStatsButton.innerHTML = 'More stats';
        moreStatsButton.addEventListener('click', () => {
            document.body.classList.remove('visible');
            document.body.classList.add('overflowHidden');
            modalOverlay.classList.remove('hide');
            modalOverlay.classList.add('showFlex');

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
    });
};
functionCardsStructure(championList);
/*-----------------------------------------------------*/

/* FILTRADO: DIGITANDO NOMBRE */
const input = document.querySelector('#searchInputs');

const ul = document.querySelector('.menu');
const ul2 = document.querySelector('.menu2');
const li = document.querySelectorAll('.menu li');
const li2 = document.querySelectorAll('.menu2 li');
const difficulty1 = document.querySelectorAll('.difficulty1 div');
const buttons = document.querySelector('.difficulty1');
const difficultyTitle = document.querySelector('.dif');

const cleanClasses = () => {
    ul.querySelector('.active').classList.remove('active');
    ul2.querySelector('.active').classList.remove('active');
    li[0].classList.add('active');
    li2[0].classList.add('active');
};

// limpiador de difficulty

const cleanDifficulty = (cleanElements, hideButtons = true) => {
    cleanElements.forEach((button) => {
        button.classList.remove('levelFull');
        button.classList.add('levelEmpty');
    });
    if (hideButtons) {
        buttons.classList.remove('showFlex');
        difficultyTitle.classList.remove('hide');
    }
}

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

        // limpiando de clases de dificultad
        cleanClasses();
        cleanDifficulty(difficulty1);
        functionCardsStructure(filteredChampions);
    },
    false);


/* FUNCION: HOVER ACTIVE POR CLASE SELECCIONADA */

li.forEach((liItem) =>
    liItem.addEventListener('click', () => {
        ul.querySelector('.active').classList.remove('active');
        liItem.classList.add('active');
    })
);

li2.forEach((liItem) =>
    liItem.addEventListener('click', () => {
        ul2.querySelector('.active').classList.remove('active');
        liItem.classList.add('active');
    })
);


/*---------------------------------------------*/

/* FILTRADO: POR CLASE */
const filterClasses = (button) => {
    button.addEventListener('click', () => {
        const term = button.getAttribute('data-value');

        input.value = '';
        list.innerHTML = '';
        cleanDifficulty(difficulty1);

        const filteredChampions = filteredbyClass(championList, term);
        if (term === 'ALL') functionCardsStructure(championList);
        else functionCardsStructure(filteredChampions);
    });
};
li.forEach(button => filterClasses(button));
li2.forEach(button => filterClasses(button));

/*---------------------------------------------*/

document.querySelector('.difficultyContainer').addEventListener('click', () => {
    buttons.classList.toggle('showFlex'); // Toggle hace que si es existe la clase en el elemento la quita, si no existe la agrega
    difficultyTitle.classList.toggle('hide');
});
difficulty1.forEach((option) => {
    option.addEventListener('click', (e) => {
        e.stopPropagation();
        let term = option.getAttribute('data-value');
        const activeButtons = document.querySelectorAll('.difficulty1 .levelFull');
        const arrButtons = [...difficulty1];
        const selectedButtons = arrButtons.filter((_, i) => i <= term - 1); // filtro los botones dependiendo del que elija
        const isSelected = activeButtons.length === parseInt(term, 10); // verificacion de el valor ya esta seleccionado 

        if (isSelected) term = 0;
        cleanDifficulty(activeButtons, false);

        if (!isSelected)
            selectedButtons.forEach((button) => {
                button.classList.remove('levelEmpty');
                button.classList.add('levelFull');
            });

        input.value = '';
        list.innerHTML = '';
        cleanClasses();
        const filteredChampions = filteredByDifficulty(championList, term);

        functionCardsStructure(filteredChampions);
    });
});

/*---------------------------------------------*/

/* FILTRADO: ASCENDENTE Y DESCENDENTE */
let orderAsc = true;
document.getElementById('orderBy').addEventListener('click', () => {
    const orderSpan = document.querySelector('#orderBy span');
    orderSpan.classList.toggle('desc');

    input.value = '';
    list.innerHTML = '';
    cleanClasses();
    cleanDifficulty(difficulty1);

    functionCardsStructure(orderList(championList, orderAsc));
    orderAsc = !orderAsc;
});


/* Href de la tercera interfaz  */
const btnRole = document.querySelector('.btnRole');
btnRole.addEventListener('click', () => {
    document.location.href = './indexroles.html';
});