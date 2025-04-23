// copiar um array

//variáveis
const numeros = [1, 2, 3, 4];

const numeros2 = [5, 6, 7, 8, 9];

//copiar um array

const copia = [...numeros];

// console.log(copia);

//concatenar arrays

const arraysConcatenados = [...numeros, ...numeros2];

// console.log(arraysConcatenados);

// adicionando elementos no array

const novoArray = [10, ...arraysConcatenados, 30];

// console.log(novoArray);

const usuario = { nome: 'Ana', idade: 30 };

const copiaUsuario = { ...usuario };

// console.log(copiaUsuario);

//modificando objetos

const usuarioAtualizado = { ...usuario, idade: 25, cidade: 'Florianópolis' };

// console.log(usuarioAtualizado);

const novosDadosDoUsuario = {
    genero: 'Masculino',
    DataNascimento: '11/05/2000',
};

const novoUsuario = { nome: 'Victor', idade: 22 };

const usuarios = { ...usuario, ...novosDadosDoUsuario };

console.log(usuarios);
