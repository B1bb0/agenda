const form = document.getElementById("form-cadastro");
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');
    const inputEmailContato = document.getElementById('email-contato');
    const inputAnotacaoContato = document.getElementById('anotacao-contato');

    let linha = '<tr>';
    linha += `<td> ${inputNomeContato.value} </td>`;
    linha += `<td> ${inputNumeroContato.value} </td>`;
    linha += `<td> ${inputEmailContato.value} </td>`;
    linha += `<td> ${inputAnotacaoContato.value} </td>`;
    linha += '<tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
    inputEmailContato.value = '';
    inputAnotacaoContato.value = '';
});