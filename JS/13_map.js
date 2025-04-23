const valores = [2, 3, 6, 9];

const users = [
    { name: 'Luciano', age: 40 },
    { name: 'Pedro', age: 15 },
    { name: 'Maria', age: 54 },
];

const valoresDobrados = valores.map((valor) => valor * 2);

const userNames = users.map((user) => user.name);

console.log(valoresDobrados);

console.log(valores);

console.log(userNames);
