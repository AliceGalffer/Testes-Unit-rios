
const {verificarSenhas,senha} = require('./formulario')

it('Testando se a senha é igual a confirmação de senha', () => {
    expect(verificarSenhas("senha","senha")).toBe(true)
 })

it('Testando se a senha é diferente de confirmação de senha', () => {
   expect(verificarSenhas("senha","senhaerrada")).toBe(false)
})

it('Testando se a senha atende os requisitos propostos', () => {
    expect(senha("s")).toBe(false)
 })


 it('Testando se a senha contem oito caracters', () => {
    expect(senha("12345678")).toBe(true)

 })

 it('Testando se a senha contem oito caracters', () => {
    expect(senha("1")).toBe(false)

 })

 it('Testando se a senha contem pelo menos um numero', () => {
    expect(senha("")).toBe(false)

 })

 it('Testando se a senha contem pelo menos um numero', () => {
    expect(senha("0123456789")).toBe(true)

 })

 it('Testando se a senha contem pelo menos um numero', () => {
    expect(senha("asdfghjk")).toBe(false)

 })


