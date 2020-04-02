import data from './data/lol/lol.js';
import {
  getArray,
  filteredbyClass,
} from './data.js';

const dataChampion = data.data;

const infoChampions = getArray(dataChampion);

const getAvgOnInfo = (property, championList) => championList.reduce(
  (acc, champion) => acc + champion.info[property], 0,
) / championList.length;

const getAvgOnStats = (property, championList) => championList.reduce(
  (acc, champion) => acc + champion.stats[property], 0,
) / championList.length;

const mages = filteredbyClass(infoChampions, 'Mage');
const manaMages = getAvgOnStats('mp', mages);
const HPMages = getAvgOnStats('hp', mages);
const defenseMages = getAvgOnInfo('defense', mages);
const difficultyMages = getAvgOnInfo('difficulty', mages);
const armorMages = getAvgOnStats('armor', mages);
const attackMages = getAvgOnInfo('attack', mages);
const magicMages = getAvgOnInfo('magic', mages);

const avgMagesattack = document.querySelector('#attackMages');
const avgMagesdefense = document.querySelector('#defenseMages');
const avgMagesDifficulty = document.querySelector('#difficultyMages');
const avgMagesMagic = document.querySelector('#magicMages');
const avgMagesHP = document.querySelector('#HPMages');
const avgMagesArmor = document.querySelector('#armorMages');
const avgMagesMana = document.querySelector('#manaMages');

avgMagesattack.innerHTML = `Attack: ${attackMages.toFixed(1)}`;
avgMagesArmor.innerHTML = `Armor: ${armorMages.toFixed(1)}`;
avgMagesMana.innerHTML = `Mana: ${manaMages.toFixed(1)}`;
avgMagesDifficulty.innerHTML = `dificulty: ${difficultyMages.toFixed(1)}`;
avgMagesdefense.innerHTML = `Defense: ${defenseMages.toFixed(1)}`;
avgMagesMagic.innerHTML = `Magic: ${magicMages.toFixed(1)}`;
avgMagesHP.innerHTML = `HP: ${HPMages.toFixed(1)}`;

const assasins = filteredbyClass(infoChampions, 'Assassin');
const manaAssasins = getAvgOnStats('mp', assasins);
const HPAssasins = getAvgOnStats('hp', assasins);
const defenseAssasins = getAvgOnInfo('defense', assasins);
const difficultyAssasins = getAvgOnInfo('difficulty', assasins);
const armorAssasins = getAvgOnStats('armor', assasins);
const attackAssasins = getAvgOnInfo('attack', assasins);
const magicAssasins = getAvgOnInfo('magic', assasins);

const avgAssasinsattack = document.querySelector('#attackAssasins');
const avgAssasinsdefense = document.querySelector('#defenseAssasins');
const avgAssasinsDifficulty = document.querySelector('#difficultyAssasins');
const avgAssasinsMagic = document.querySelector('#magicAssasins');
const avgAssasinsHP = document.querySelector('#HPAssasins');
const avgAssasinsArmor = document.querySelector('#armorAssasins');
const avgAssasinsMana = document.querySelector('#manaAssasins');

avgAssasinsattack.innerHTML = `Attack: ${attackAssasins.toFixed(1)}`;
avgAssasinsArmor.innerHTML = `Armor: ${armorAssasins.toFixed(1)}`;
avgAssasinsMana.innerHTML = `Mana: ${manaAssasins.toFixed(1)}`;
avgAssasinsDifficulty.innerHTML = `dificulty: ${difficultyAssasins.toFixed(1)}`;
avgAssasinsdefense.innerHTML = `Defense: ${defenseAssasins.toFixed(1)}`;
avgAssasinsMagic.innerHTML = `Magic: ${magicAssasins.toFixed(1)}`;
avgAssasinsHP.innerHTML = `HP: ${HPAssasins.toFixed(1)}`;

const tanks = filteredbyClass(infoChampions, 'Tank');
const manaTanks = getAvgOnStats('mp', tanks);
const HPTanks = getAvgOnStats('hp', tanks);
const defenseTanks = getAvgOnInfo('defense', tanks);
const difficultyTanks = getAvgOnInfo('difficulty', tanks);
const armorTanks = getAvgOnStats('armor', tanks);
const attackTanks = getAvgOnInfo('attack', tanks);
const magicTanks = getAvgOnInfo('magic', tanks);

const avgTanksattack = document.querySelector('#attackTanks');
const avgTanksdefense = document.querySelector('#defenseTanks');
const avgTanksDifficulty = document.querySelector('#difficultyTanks');
const avgTanksMagic = document.querySelector('#magicTanks');
const avgTanksHP = document.querySelector('#HPTanks');
const avgTanksArmor = document.querySelector('#armorTanks');
const avgTanksMana = document.querySelector('#manaTanks');

avgTanksattack.innerHTML = `Attack: ${attackTanks.toFixed(1)}`;
avgTanksArmor.innerHTML = `Armor: ${armorTanks.toFixed(1)}`;
avgTanksMana.innerHTML = `Mana: ${manaTanks.toFixed(1)}`;
avgTanksDifficulty.innerHTML = `dificulty: ${difficultyTanks.toFixed(1)}`;
avgTanksdefense.innerHTML = `Defense: ${defenseTanks.toFixed(1)}`;
avgTanksMagic.innerHTML = `Magic: ${magicTanks.toFixed(1)}`;
avgTanksHP.innerHTML = `HP: ${HPTanks.toFixed(1)}`;

const supports = filteredbyClass(infoChampions, 'Support');
const manaSupport = getAvgOnStats('mp', supports);
const HPSupport = getAvgOnStats('hp', supports);
const defenseSupport = getAvgOnInfo('defense', supports);
const difficultySupport = getAvgOnInfo('difficulty', supports);
const armorSupport = getAvgOnStats('armor', supports);
const attackSupport = getAvgOnInfo('attack', supports);
const magicSupport = getAvgOnInfo('magic', supports);


const avgSupportsattack = document.querySelector('#attackSupports');
const avgSupportsdefense = document.querySelector('#defenseSupports');
const avgSupportsDifficulty = document.querySelector('#difficultySupports');
const avgSupportsMagic = document.querySelector('#magicSupports');
const avgSupportsHP = document.querySelector('#HPSupports');
const avgSupportsArmor = document.querySelector('#armorSupports');
const avgSupportsMana = document.querySelector('#manaSuppports');

avgSupportsattack.innerHTML = `Attack: ${attackSupport.toFixed(1)}`;
avgSupportsArmor.innerHTML = `Armor: ${armorSupport.toFixed(1)}`;
avgSupportsMana.innerHTML = `Mana: ${manaSupport.toFixed(1)}`;
avgSupportsDifficulty.innerHTML = `dificulty: ${difficultySupport.toFixed(1)}`;
avgSupportsdefense.innerHTML = `Defense: ${defenseSupport.toFixed(1)}`;
avgSupportsMagic.innerHTML = `Magic: ${magicSupport.toFixed(1)}`;
avgSupportsHP.innerHTML = `HP: ${HPSupport.toFixed(1)}`;

const adcs = filteredbyClass(infoChampions, 'Marksman');
const manaAdc = getAvgOnStats('mp', adcs);
const HPAdc = getAvgOnStats('hp', adcs);
const defenseAdc = getAvgOnInfo('defense', adcs);
const difficultyAdc = getAvgOnInfo('difficulty', adcs);
const armorAdc = getAvgOnStats('armor', adcs);
const attackAdc = getAvgOnInfo('attack', adcs);
const magicAdc = getAvgOnInfo('magic', adcs);

const avgADCsattack = document.querySelector('#attackADC');
const avgADCdefense = document.querySelector('#defenseADC');
const avgADCDifficulty = document.querySelector('#difficultyADC');
const avgADCMagic = document.querySelector('#magicADC');
const avgADCHP = document.querySelector('#HPADC');
const avgADCArmor = document.querySelector('#armorADC');
const avgADCMana = document.querySelector('#manaADC');

avgADCsattack.innerHTML = `Attack: ${attackAdc.toFixed(1)}`;
avgADCdefense.innerHTML = `Armor: ${defenseAdc.toFixed(1)}`;
avgADCArmor.innerHTML = `Armor: ${armorAdc.toFixed(1)}`;
avgADCMana.innerHTML = `Mana: ${manaAdc.toFixed(1)}`;
avgADCDifficulty.innerHTML = `dificulty: ${difficultyAdc.toFixed(1)}`;
avgADCdefense.innerHTML = `Defense: ${defenseAdc.toFixed(1)}`;
avgADCMagic.innerHTML = `Magic: ${magicAdc.toFixed(1)}`;
avgADCHP.innerHTML = `HP: ${HPAdc.toFixed(1)}`;

const fighters = filteredbyClass(infoChampions, 'Fighter');
const manaFighter = getAvgOnStats('mp', fighters);
const HPFighter = getAvgOnStats('hp', fighters);
const defenseFighter = getAvgOnInfo('defense', fighters);
const difficultyFighter = getAvgOnInfo('difficulty', fighters);
const armorFighter = getAvgOnStats('armor', fighters);
const attackFighter = getAvgOnInfo('attack', fighters);
const magicFighter = getAvgOnInfo('magic', fighters);

const avgFightersattack = document.querySelector('#attackFighters');
const avgFighterdefense = document.querySelector('#defenseFighters');
const avgFighterDifficulty = document.querySelector('#difficultyFighters');
const avgFighterMagic = document.querySelector('#magicFighters');
const avgFighterHP = document.querySelector('#HPFighters');
const avgFighterArmor = document.querySelector('#armorFighters');
const avgFighterMana = document.querySelector('#manaFighters');

avgFightersattack.innerHTML = `Attack: ${attackFighter.toFixed(1)}`;
avgFighterdefense.innerHTML = `Armor: ${defenseFighter.toFixed(1)}`;
avgFighterArmor.innerHTML = `Armor: ${armorFighter.toFixed(1)}`;
avgFighterMana.innerHTML = `Mana: ${manaFighter.toFixed(1)}`;
avgFighterDifficulty.innerHTML = `dificulty: ${difficultyFighter.toFixed(1)}`;
avgADCdefense.innerHTML = `Defense: ${defenseAdc.toFixed(1)}`;
avgFighterMagic.innerHTML = `Magic: ${magicFighter.toFixed(1)}`;
avgFighterHP.innerHTML = `HP: ${HPFighter.toFixed(1)}`;

export const roles = document.querySelectorAll('.role');
const rolesInfo = document.querySelectorAll('.descriptionClass');
roles.forEach((role) => {
  role.addEventListener('click', () => {
    const term = role.getAttribute('data-value');
    rolesInfo.forEach((info) => {
      info.classList.add('hidden');
      if (info.id === term) {
        info.classList.remove('hidden');
      }
    });
  });
});
