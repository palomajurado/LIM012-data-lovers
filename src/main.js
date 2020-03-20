import data from './data/lol/lol.js';
import {
  filterByName,
  filteredbyClass,
  filteredByDifficulty
} from './data.js';

/*Muestra en interfaz dos mas saludo y letra capital*/
const primeraInterfaz = document.getElementById('primeraInterfaz');
const segundaInterfaz = document.getElementById('segundaInterfaz');
primeraInterfaz.style.display = 'block';
segundaInterfaz.style.display = 'none';

document.getElementById('buttonEnter').addEventListener('click', () => {
  const name = document.getElementById('inputName').value;
  const newStr = `${name[0].toUpperCase()}${name.slice(1)}`;
  const parrafo = document.getElementById('nombreIngresado');
  const welcome = document.querySelector('.cuadraditoDsaludo');
  parrafo.innerHTML = `!\n Welcome ${newStr}\n !`;
  segundaInterfaz.style.display = 'block';
  primeraInterfaz.style.display = 'none';
  window.scroll({
    top: 0
  });
  setTimeout(() => (welcome.style.display = 'none'), 3000);
});

/*Muestra de la lista de campeones*/

const championList = data.data;
let list = document.querySelector('#list');

//object values le saca los valores de key en forma de arreglo
Object.values(championList).map((champion) => {
  const div = document.createElement('div');
  div.className = 'card';
  div.style.backgroundImage = `url("${champion.splash}")`;
  const p = document.createElement('p');
  p.className = 'championName';
  p.innerHTML = `${champion.name}`;
  div.appendChild(p);

  const backCard = document.createElement('div');
  backCard.className = 'back-card';
  const backCardInfo = document.createElement('div');
  backCardInfo.className = 'back-card__info';
  backCard.appendChild(backCardInfo);
  const championName = document.createElement('div');
  const championNameImage = document.createElement('img');
  championNameImage.src = `${champion.img}`;
  championName.appendChild(championNameImage);
  backCardInfo.appendChild(championName);
  const backCardInfoTitle = document.createElement('h3');
  backCardInfoTitle.innerHTML = champion.title;
  backCardInfo.appendChild(backCardInfoTitle);
  const championBox = document.createElement('div');
  championBox.className = 'champion-box';
  const championClass = document.createElement('div');
  championClass.className = 'champion-class';
  const championClassText = document.createElement('p');
  championClassText.innerHTML = 'CLASS';
  championClass.appendChild(championClassText);
  championBox.appendChild(championClass);
  const championDifficult = document.createElement('div');
  championDifficult.className = 'champion-difficulty';
  const championDifficultText = document.createElement('p');
  championDifficultText.innerHTML = 'DIFFICULTY';
  championDifficult.appendChild(championDifficultText);
  championBox.appendChild(championDifficult);

  const championStats = document.createElement('div');
  championStats.className = 'champion-stats';

  Object.entries(champion.info).map(([key, value]) => {
    const championStatsText = document.createElement('p');
    championStatsText.className = 'champion-stats__item';
    championStatsText.innerHTML = `${key}: ${value}`;
    championStats.appendChild(championStatsText);
  });

  backCardInfo.appendChild(championStats);

  const moreStatsButton = document.createElement('div');
  moreStatsButton.className = 'more-stats';
  moreStatsButton.innerHTML = 'More stats';
  backCardInfo.appendChild(moreStatsButton);
  div.appendChild(backCard);
  list.appendChild(div);
});

//busqueda por nombre
//probando la subida
let input = document.querySelector('#searchInputs');
let filteredList = document.querySelector('#filteredList');

//target : lo que sea a lo que se le aplique add event listener
if (typeof input.addEventListener != 'undefined') {
  input.addEventListener(
    'keyup',
    (evt) => {
      let term = evt.target.value.toLowerCase();

      /*let filteredChampions = Object.values(championList).filter(champion => {
          //indexof da -1 si no encuentra resultados
          if (champion.name.toLowerCase().indexOf(term) != -1) {
              return champion;
          }
      });*/
      let filteredChampions = filterByName(championList, term);
      //mensaje de error en la busqueda por nombre
      if (term.length != 0) {
        list.classList.add('hidden');
        filteredList.classList.remove('hidden');
      } else {
        list.classList.remove('hidden');
        filteredList.classList.add('hidden');
      }
      let errorMessage = document.querySelector('#error');
      if (filteredChampions.length === 0) {
        errorMessage.classList.remove('hidden');
      } else {
        errorMessage.classList.add('hidden');
      }

      //vaciar arreglo para que no se duplique
      filteredList.innerHTML = '';
      //filteredList ==  <div id="filteredList" ></div>
      Object.values(filteredChampions).map((champion) => {
        const div = document.createElement('div');
        div.className = 'card';
        div.style.backgroundImage = `url("${champion.splash}")`;
        const p = document.createElement('p');
        p.className = 'championName';
        p.innerHTML = `${champion.name}`;
        div.appendChild(p);

        const backCard = document.createElement('div');
        backCard.className = 'back-card';
        const backCardInfo = document.createElement('div');
        backCardInfo.className = 'back-card__info';
        backCard.appendChild(backCardInfo);
        const championName = document.createElement('div');
        const championNameImage = document.createElement('img');
        championNameImage.src = `${champion.img}`;
        championName.appendChild(championNameImage);
        backCardInfo.appendChild(championName);
        const backCardInfoTitle = document.createElement('h3');
        backCardInfoTitle.innerHTML = champion.title;
        backCardInfo.appendChild(backCardInfoTitle);
        const championBox = document.createElement('div');
        championBox.className = 'champion-box';
        const championClass = document.createElement('div');
        championClass.className = 'champion-class';
        const championClassText = document.createElement('p');
        championClassText.innerHTML = 'CLASS';
        championClass.appendChild(championClassText);
        championBox.appendChild(championClass);
        const championDifficult = document.createElement('div');
        championDifficult.className = 'champion-difficulty';
        const championDifficultText = document.createElement('p');
        championDifficultText.innerHTML = 'DIFFICULTY';
        championDifficult.appendChild(championDifficultText);
        championBox.appendChild(championDifficult);

        const championStats = document.createElement('div');
        championStats.className = 'champion-stats';

        Object.entries(champion.info).map(([key, value]) => {
          const championStatsText = document.createElement('p');
          championStatsText.className = 'champion-stats__item';
          championStatsText.innerHTML = `${key}: ${value}`;
          championStats.appendChild(championStatsText);
        });

        backCardInfo.appendChild(championStats);

        const moreStatsButton = document.createElement('div');
        moreStatsButton.className = 'more-stats';
        moreStatsButton.innerHTML = 'More stats';
        backCardInfo.appendChild(moreStatsButton);
        div.appendChild(backCard);
        filteredList.appendChild(div);
      });
    },
    false
  );
}
filteredList.innerHTML = '';
//[p.btn, p.btn, p.btn, p.btn, p.btn, p.btn, p.btn]
// p.btn == button == <p class="btn" data-value="ALL">ALL</p>
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

li.forEach((el) => {
  el.addEventListener('click', function () {
    ul.querySelector('.active').classList.remove('active');
    el.classList.add('active');
  });
});

/*para recrrer cada clase */
li.forEach((button) => {
  button.addEventListener('click', () => {
    let term = button.getAttribute('data-value');
    // <p class="btn" data-value="ALL">ALL</p>
    if (term === 'ALL') {
      list.classList.remove('hidden');
      filteredList.classList.add('hidden');
    } else {
      list.classList.add('hidden');
      filteredList.classList.remove('hidden');
    }
    // filteredChampions == []
    /*let filteredChampions = Object.values(championList).filter(champion => {
      if (champion.tags.indexOf(term) != -1) {
        return champion;
      }
    });*/
    filteredList.innerHTML = '';
    let filteredChampions = filteredbyClass(championList, term);

    //filteredList ==  <div id="filteredList" ></div>
    Object.values(filteredChampions).map((champion) => {
      const div = document.createElement('div');
      div.className = 'card';
      div.style.backgroundImage = `url("${champion.splash}")`;
      const p = document.createElement('p');
      p.className = 'championName';
      p.innerHTML = `${champion.name}`;
      div.appendChild(p);

      const backCard = document.createElement('div');
      backCard.className = 'back-card';
      const backCardInfo = document.createElement('div');
      backCardInfo.className = 'back-card__info';
      backCard.appendChild(backCardInfo);
      const championName = document.createElement('div');
      const championNameImage = document.createElement('img');
      championNameImage.src = `${champion.img}`;
      championName.appendChild(championNameImage);
      backCardInfo.appendChild(championName);
      const backCardInfoTitle = document.createElement('h3');
      backCardInfoTitle.innerHTML = champion.title;
      backCardInfo.appendChild(backCardInfoTitle);
      const championBox = document.createElement('div');
      championBox.className = 'champion-box';
      const championClass = document.createElement('div');
      championClass.className = 'champion-class';
      const championClassText = document.createElement('p');
      championClassText.innerHTML = 'CLASS';
      championClass.appendChild(championClassText);
      championBox.appendChild(championClass);
      const championDifficult = document.createElement('div');
      championDifficult.className = 'champion-difficulty';
      const championDifficultText = document.createElement('p');
      championDifficultText.innerHTML = 'DIFFICULTY';
      championDifficult.appendChild(championDifficultText);
      championBox.appendChild(championDifficult);

      const championStats = document.createElement('div');
      championStats.className = 'champion-stats';

      Object.entries(champion.info).map(([key, value]) => {
        const championStatsText = document.createElement('p');
        championStatsText.className = 'champion-stats__item';
        championStatsText.innerHTML = `${key}: ${value}`;
        championStats.appendChild(championStatsText);
      });

      backCardInfo.appendChild(championStats);

      const moreStatsButton = document.createElement('div');
      moreStatsButton.className = 'more-stats';
      moreStatsButton.innerHTML = 'More stats';
      backCardInfo.appendChild(moreStatsButton);
      div.appendChild(backCard);
      filteredList.appendChild(div);
    });
  });
});

/* 
  [<div class="difficulty1" data-value="1" id="easy" href="#">easy</div>,
  <div class="difficulty1" data-value="2" id="medium" href="#">medium</div>,
  <div class="difficulty1" data-value="3" id="hard" href="#">hard</div>]
*/
let difficulty1 = document.querySelectorAll('.difficulty1');
difficulty1.forEach((option) => {
  option.addEventListener('click', () => {
    let term = option.getAttribute('data-value');

    list.classList.add('hidden');
    filteredList.classList.remove('hidden');

    filteredList.innerHTML = '';
    let filteredChampions = filteredByDifficulty(championList, term);

    //filteredList ==  <div id="filteredList" ></div>
    Object.values(filteredChampions).map((champion) => {
      const div = document.createElement('div');
      div.className = 'card';
      div.style.backgroundImage = `url("${champion.splash}")`;
      const p = document.createElement('p');
      p.className = 'championName';
      p.innerHTML = `${champion.name}`;
      div.appendChild(p);

      const backCard = document.createElement('div');
      backCard.className = 'back-card';
      const backCardInfo = document.createElement('div');
      backCardInfo.className = 'back-card__info';
      backCard.appendChild(backCardInfo);
      const championName = document.createElement('div');
      const championNameImage = document.createElement('img');
      championNameImage.src = `${champion.img}`;
      championName.appendChild(championNameImage);
      backCardInfo.appendChild(championName);
      const backCardInfoTitle = document.createElement('h3');
      backCardInfoTitle.innerHTML = champion.title;
      backCardInfo.appendChild(backCardInfoTitle);
      const championBox = document.createElement('div');
      championBox.className = 'champion-box';
      const championClass = document.createElement('div');
      championClass.className = 'champion-class';
      const championClassText = document.createElement('p');
      championClassText.innerHTML = 'CLASS';
      championClass.appendChild(championClassText);
      championBox.appendChild(championClass);
      const championDifficult = document.createElement('div');
      championDifficult.className = 'champion-difficulty';
      const championDifficultText = document.createElement('p');
      championDifficultText.innerHTML = 'DIFFICULTY';
      championDifficult.appendChild(championDifficultText);
      championBox.appendChild(championDifficult);

      const championStats = document.createElement('div');
      championStats.className = 'champion-stats';

      Object.entries(champion.info).map(([key, value]) => {
        const championStatsText = document.createElement('p');
        championStatsText.className = 'champion-stats__item';
        championStatsText.innerHTML = `${key}: ${value}`;
        championStats.appendChild(championStatsText);
      });

      backCardInfo.appendChild(championStats);

      const moreStatsButton = document.createElement('div');
      moreStatsButton.className = 'more-stats';
      moreStatsButton.innerHTML = 'More stats';
      backCardInfo.appendChild(moreStatsButton);
      div.appendChild(backCard);
      filteredList.appendChild(div);
    });
  });
});
filteredList.innerHTML = '';
