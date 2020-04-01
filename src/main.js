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
import {
    // eslint-disable-next-line no-unused-vars
    roles,
} from './roles.js';

const inputName = document.getElementById('inputName');
document.getElementById('year').innerHTML = new Date().getFullYear();

const setName = () => {
    const name = inputName.value;
    const newStr = `${name[0].toUpperCase()}${name.slice(1)}`;
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
inputName.addEventListener('keypress', ({ keyCode }) => {
    if (keyCode === 13) setName();
});

const buttonDown = document.getElementById('button-down');
buttonDown.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth',
    });
});

// el metodo onscroll de window se ejecuta cada vez que el usuario haga scroll en la pagina
window.onscroll = () => { // y ejecuta esta funcion anonima
    // aqui guardamos en una variable la posicion actual del scroll en Y
    const windowScroll = window.pageYOffset;
    // aqui obtenemos el valor que deberia pasar el scroll en Y para saber que llegamos al final de la pagina
    const breakpointScroll = document.documentElement.scrollHeight - window.outerHeight - 35;
    // evaluamos si el scroll llego al final de la pagina para regarle la clase
    if (windowScroll >= breakpointScroll) {
        buttonDown.classList.add('almostFinalBTN');
    } else {
        // si el scroll no esta al final de la pagina le quitamos la clase
        buttonDown.classList.remove('almostFinalBTN');
    }
    // aqui evaluamos si el scroll supera los 400px del scrollHeight en Y para mostrar el boton
    if (windowScroll > 400) {
        buttonDown.classList.remove('hide');
        buttonDown.classList.add('shown');
    } else {
        // si tiene menos de 400px de scroll en Y scrollHeight ocultamos el boton
        buttonDown.classList.remove('shown');
        buttonDown.classList.add('hide');
    }
};
/*-------------------------------------------*/

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

    checkData.map((champion) => {
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
        Object.entries(champion.info).map(([key, value]) => { // convierte un objeto en arrayas devolvie dos valores key y value
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
            championStats.appendChild(divClassWord);
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

            // debemos crear una clase para este estilo
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
            document.body.classList.remove('visible');
            document.body.classList.add('overflowHidden');
            modalOverlay.classList.remove('hide');
            modalOverlay.classList.add('showFlex');
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

const ul = document.querySelector('.menu');
const ul2 = document.querySelector('.menu2');
const li = document.querySelectorAll('.menu li');
const li2 = document.querySelectorAll('.menu2 li');
const difficulty1 = document.querySelectorAll('.difficulty1 div');
const cleanClasses = () => {
    ul.querySelector('.active').classList.remove('active'); // Quito todas las etiquetas active
    ul2.querySelector('.active').classList.remove('active');
    li[0].classList.add('active'); // Agrego a la etiqueta incial All
    li2[0].classList.add('active');
};

// limpiador de difficulty

const cleanDifficulty = (cleanElements) => {
    cleanElements.forEach((button) => {
        button.classList.remove('levelFull');
        button.classList.add('levelEmpty');
    });
};

input.addEventListener('keyup', (evt) => {
        const term = evt.target.value.toLowerCase(); // target coge el valor de un elemento form en este caso del input
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
/*---------------------------------------------*/

/* FUNCION: HOVER ACTIVE POR CLASE SELECCIONADA */

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
        cleanDifficulty(difficulty1);

        // eslint-disable-next-line max-len
        const filteredChampions = filteredbyClass(championList, term); // filtra la info de los campeones con la clase seleccionada que viene en el data value
        functionCardsStructure(filteredChampions);
    });
};
li.forEach(button => filterClasses(button));
li2.forEach(button => filterClasses(button));

/*---------------------------------------------*/

/* FILTRADO: POR DIFICULTAD   */ // Para poder usar map filter sort reduce necesito un array y no un node list por esto el spread operator [...nodeList] lo guarda en un array
difficulty1.forEach((option) => {
    option.addEventListener('click', () => {
        let term = option.getAttribute('data-value');
        const activeButtons = document.querySelectorAll('.difficulty1 .levelFull');
        const arrButtons = [...difficulty1];
        const selectedButtons = arrButtons.filter((_, i) => i <= term - 1);
        /*
          term = 3
          i = [0, 1, 2]
          i <= term - 1      // 0 <= 2 = true
          i <= term - 1      // 1 <= 2 =  true
          i <= term - 1      // 2 <= 2 =  true

          term = 2
          i = [0, 1, 2]
          i <= term - 1      // 0 <= 1 = true
          i <= term - 1      // 1 <= 1 = true
          i <= term - 1      // 2 <= 1 = false

          term = 1
          i = [0, 1, 2]
          i <= term - 1      // 0 <= 0 = true
          i <= term - 1      // 1 <= 0 = false
          i <= term - 1      // 2 <= 0 = false
        */

        // Si el elemento seleccionado tiene un valor igual a los botones activos, esta variable es true
        const isSelected = activeButtons.length === parseInt(term, 10);

        // Si isSelected es true retornamos toda la informacion de los campeones sin filtrar
        if (isSelected) {
            term = 0;
        }

        // en cada click limpiamos la clase .levelFull de los elementos activos (activeButtons)
        cleanDifficulty(activeButtons);

        // Si isSelected es false agregamos la clase .levelFull a los botones seleccionados (selectedButtons)
        if (!isSelected) {
            selectedButtons.forEach((button) => {
                button.classList.remove('levelEmpty');
                button.classList.add('levelFull');
            });
        }

        // limpiando los seleccionados de otros filtrados
        input.value = '';
        list.innerHTML = '';
        cleanClasses();
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

        input.value = '';
        list.innerHTML = '';
        cleanClasses();
        cleanDifficulty(difficulty1);

        const filteredChampions = orderList(championList, term);

        functionCardsStructure(filteredChampions);
    });
});
const btnRole = document.querySelector('.btnRole');
btnRole.addEventListener('click', () => {
    document.location.href = './indexroles.html';
});