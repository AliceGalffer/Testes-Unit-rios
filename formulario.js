function validarFormulario() {
    // Limpa mensagens de erro e sucesso
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    document.getElementById('success-msg').textContent = '';

    // Verifica se a idade é menor que 18 anos
    var idade = document.getElementById('idade').value;
    if (idade < 18) {
        document.getElementById('error-idade').textContent = 'Você precisa ter pelo menos 18 anos para participar.';
        return false;
    }

    // Verifica se todos os campos estão preenchidos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var senhaRepetida = document.getElementById('senhaRepetida').value;
    var estado = document.getElementById('estado').value;
    var cidade = document.getElementById('cidade').value;

    var hasError = false;

    if (!nome) {
        document.getElementById('error-nome').textContent = 'Nome é obrigatório.';
        hasError = true;
    }
    if (!email) {
        document.getElementById('error-email').textContent = 'Email é obrigatório.';
        hasError = true;
    }
    if (!senha) {
        document.getElementById('error-senha').textContent = 'Senha é obrigatória.';
        hasError = true;
    }
    if (!senhaRepetida) {
        document.getElementById('error-senhaRepetida').textContent = 'Repita a senha.';
        hasError = true;
    }
    if (senha !== senhaRepetida) {
        document.getElementById('error-senhaRepetida').textContent = 'As senhas não coincidem.';
        hasError = true;
    }
    if (!estado) {
        document.getElementById('error-estado').textContent = 'Estado é obrigatório.';
        hasError = true;
    }
    if (!cidade) {
        document.getElementById('error-cidade').textContent = 'Cidade é obrigatória.';
        hasError = true;
    }

    if (hasError) {
        return false;
    }

    // Simula envio bem sucedido
    document.getElementById('success-msg').textContent = 'Formulário enviado com sucesso!';
    return false; // Impede o envio real do formulário para fins de teste
}

function selecionarCidades() {
    var estado = document.getElementById('estado').value;
    var cidadeSelect = document.getElementById('cidade');
    cidadeSelect.innerHTML = ''; // Limpa as opções atuais

    switch (estado) {
        case 'SP':
            adicionarCidade('São Paulo', cidadeSelect);
            adicionarCidade('Campinas', cidadeSelect);
            adicionarCidade('Santos', cidadeSelect);
            break;
        case 'RJ':
            adicionarCidade('Rio de Janeiro', cidadeSelect);
            adicionarCidade('Niterói', cidadeSelect);
            adicionarCidade('Petrópolis', cidadeSelect);
            break;
        case 'MG':
            adicionarCidade('Belo Horizonte',cidadeSelect);
            adicionarCidade('Contagem', cidadeSelect);
            adicionarCidade('Betim', cidadeSelect);
            break;
        case 'ES':
            adicionarCidade('Vitória', cidadeSelect);
            adicionarCidade('Vila Velha', cidadeSelect);
            adicionarCidade('Cariacica', cidadeSelect);
            break;
        default:
            adicionarCidade('-- Escolha um estado primeiro --', cidadeSelect);
            cidadeSelect.disabled = true;
            break;
    }

    cidadeSelect.disabled = false;
}

function adicionarCidade(nome, select) {
    var option = document.createElement('option');
    option.value = nome;
    option.textContent = nome;
    select.appendChild(option);
}