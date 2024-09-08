/*
Crie um objeto para colocar nome e duas notas. Atribua nome e
duas notas para o primeiro objeto, que será nosso primeiro aluno.
Agora crie mais um objeto para colocar informações do nosso
segundo aluno. Mostre as informações de cada aluno no console.
Mostre também a média do primeiro aluno e a média do segundo
aluno. Por fim mostre a média desta turma de 2 alunos. 
*/

const aluno1 = {
    nome: 'Frederico',
    nota1: 9.8,
    nota2: 10
}

const aluno2 = {
    nome: 'Cristian',
    nota1: 9.6,
    nota2: 9.9
}

let media1 = (aluno1.nota1 + aluno1.nota2) / 2
let media2 = (aluno2.nota1 + aluno2.nota2) / 2

console.log(`Aluno 1: ${aluno1.nome}. Notas: ${aluno1.nota1}, ${aluno1.nota2}. Média: ${media1}.`)
console.log(`Aluno 2: ${aluno2.nome}. Notas: ${aluno2.nota1}, ${aluno2.nota2}. Média: ${media2}.`)
