const form = document.getElementById("form-cadastro");
form.addEventListener('submit', function(e) {

    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');
    const inputEmailContato = document.getElementById('email-contato');
    const inputAnotacaoContato = document.getElementById('anotacao-contato');

    let linha = `<tr>`;
    linha += `<td> ${inputNomeContato.value} </td>`;
    linha += `<td> ${inputNumeroContato.value} </td>`;
    linha += `<td> ${intdutEmailContato.value} </td>`;
    linha += `<td> ${inputAnotacaoContato.value} </td>`;
    linha += `<tr>`;

    const corpoTabela = document.getElementsByClassName('contatos');
    corpoTabela.innerHTML = linha;

});