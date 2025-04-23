const valores = [2, 3, 6, 9];

const products = [
    { name: 'Chair', price: 400 },
    { name: 'Desk', price: 600 },
    { name: 'TV', price: 1900 },
];

const somaTotalDosValores = valores.reduce((acc, val) => acc + val, 0);

const somaTotalDosProdutos = products.reduce((acc, val) => acc + val.price, 0);

console.log(somaTotalDosValores);
