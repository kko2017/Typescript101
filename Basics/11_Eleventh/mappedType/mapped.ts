type Heroes = 'Hulk' | 'Thor' | 'Wanda';
type HeroesHP = { [p in Heroes]: number };
const heroesHP: HeroesHP = {
    Hulk: 50,
    Thor: 35,
    Wanda: 25
};