/*
Crie um cadastro de pessoas onde o usuário informe o nome, idade
e se está trabalhando ou não, se a pessoa estiver trabalhando
pergunte para ele o salário que está ganhando. Para cada pessoa
cadastrada, pergunte ao usuário se ele deseja continuar
cadastrando ou não. No final, mostre as pessoas que estão
desempregadas, as pessoas que estão empregadas separadas
pelas que ganham mais que 2500 e menos que 2500.

Exemplo de resultado:
Pessoas desempregadas:
Nome: Alessandro, Idade: 28
Nome: Alessandro, Idade: 28

Pessoas empregadas com salários menores que 2500:
Nome: Alessandro, Idade: 28, Salário: 1500
Nome: Alessandro, Idade: 28, Salário: 2400

Pessoas empregadas com salários maiores que 2500:
Nome: Alessandro, Idade: 28, Salário: 2700
Nome: Alessandro, Idade: 28, Salário: 3000 
*/

let pessoas
let continuar = true

while (continuar) {
    let nome = prompt('Digite seu nome:')
    let idade = parseInt(prompt('Digite sua idade (somente números):'))
    let trabalha = confirm('Você está trabalhando?')
    let salario


if (trabalha) {
    salario = parseFloat(prompt('Informe seu salário (apenas números):'))
}

pessoas.push({
    nome: nome, 
    idade: idade, 
    trabalha: trabalha,  
    salario: salario
})

continuar = confirm('Deseja continuar cadastrando novos usuários?')
}

let desempregadas = []
let salarioMenor2500 = []
let salarioMaior2500 = []

for (let pessoa of pessoas) {
    if (!pessoa.trabalha) {
        desempregadas.push(pessoa)
    } else if (pessoa.salario <= 2500) {
        salarioMaior2500.push(pessoa)
    } else {
        salarioMaior2500.push(pessoas)
    }
}

doucument.write(`<h2>Pessoas desempregadas:</h2>`)
for (let pessoa of desempregadas) {
    document.write(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}<br>`)
}

document.write(`<h2>Pessoas empregadas com salários menores que 2500,00:</h2>`)
for (let pessoa of salarioMenor2500) {
    doucument.write(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}<br>`)
}

doucument.write(`<h2>Pessoas empregadas com salários maiores que 2500,00:</h2>`)
for (let pessoa of salarioMaior2500) {
    document.write(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}<br>`)
}