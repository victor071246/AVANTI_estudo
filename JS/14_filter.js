const valores = [2, 3, 6, 9];

const users = [
    { name: 'Luciano', age: 40 },
    { name: 'Pedro', age: 15 },
    { name: 'Maria', age: 54 },
];

const numerosMaioresQueCinco = valores.filter((num) => num >= 5);

const numeroPares = valores.filter((num) => num % 2 === 0);

const menoresDeIdade = users.filter((user) => user.age > 18);

console.log(numerosMaioresQueCinco);
console.log(numeroPares);
console.log(menoresDeIdade);
