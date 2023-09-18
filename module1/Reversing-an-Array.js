'use strict';

const weapons = [
  {
    item: 'Red Orbs',
    cost: 240,
  },
  {
    item: 'Green Orbs',
    cost: 194,
  },
  {
    item: 'Yellow Orbs',
    cost: 154,
  },
  {
    item: 'Kill Machine',
    cost: 80,
  },
];

const displayWeapons = (arr) => {
  for (const elem of arr) {
    console.log(`${elem.item}:`, `$${elem.cost}`);
  }
};

displayWeapons(weapons.reverse());
