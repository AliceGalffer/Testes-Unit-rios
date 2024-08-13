//separar leitura da logica e ter parametro (parenteses cheio)
//regra de senha
// um teste para cada possibilidade
//retorno f e v
//dois testes para validação de senha certo e errado



function verificarSenhas(senha, senhaRepetida) {
    //const senha = document.getElementById(senhaId).value;
    //const senhaRepetida = document.getElementById(senhaRepetidaId).value;

    if (senha !== senhaRepetida) {
        //document.getElementById(erroId).textContent = 'As senhas não coincidem.';
        return false; // Indica que há um erro
    }
    return true; // Indica que não há erro
}

function senha(s) {
    // Verifica se a senha tem pelo menos 8 caracteres
    const comprimentoMinimo = s.length >= 8;
    
    // Verifica se a senha contém pelo menos um número
    const temNumero = /[0-9]/.test(s);

    // Retorna true se ambos os requisitos forem atendidos, caso contrário, retorna false
    return comprimentoMinimo && temNumero;
}

module.exports = {verificarSenhas,senha}
