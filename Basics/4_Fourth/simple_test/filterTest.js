let arr = [
  { who: 'superhero', name: 'Captin' },
  { who: 'superhero', name: 'Thor' },
  { who: 'Villain', name: 'Joker' },
];

let filtered = arr.filter(function (item) {
    if (item.who === 'superhero') {
        return item;
    }
});

console.log(filtered);