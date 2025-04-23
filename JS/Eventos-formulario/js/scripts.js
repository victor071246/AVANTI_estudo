const inputForm = document.querySelector('#busca');

const botaoBusca = document.querySelector('#botaobusca');

const resultadoDiv = document.querySelector('#resultado');

inputForm.addEventListener('keydown', (e) => {
    console.log(e.key);
});

inputForm.addEventListener('focus', (e) => {
    inputForm.style.backgroundColor = '#FF0'; // Amarelo
});

inputForm.addEventListener('blur', (e) => {
    inputForm.style.backgroundColor = ''; // Amarelo
});

function searchResult() {
    const valorBusca = inputForm.ariaValueMax.trim();
    if (valorBusca) {
        resultadoDiv.textContent = `Você buscou: ${valorBusca}`;
    } else {
        resultadoDiv.textContent = 'Por favor, insira algo na busca.';
    }
}

botaoBusca.addEventListener('click', (e) => {
    searchResult();
});
