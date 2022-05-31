// typescript é tipado - precisamos criar variáveis com tipo
let motor: boolean;
motor = true;
let idade: number; // int e float e double
idade = 20; 
let nome: string;
nome = "Bruno Lima";
console.log(` Motor: ${motor} Idade: ${idade} Nome: ${nome}`)

let coisa: any; //recebe qualquer coisa
coisa = 10;
coisa = "dez";
coisa = true;

// vetores ou arrays
let jogadores = ["Bruno Lima", "Alan", "Neymar", "Messi", "Cristiano Ronaldo"]
let times: Array<string>;
times = ["Sesi Franca", "São Paulo", "Bauru", "Pinheiros"];

console.log(`Jogadores ${jogadores}`)
console.log(`Times ${times}`)

// exemplo de interface
interface Aluno{
    nome: string;
    nota: number;
    aprovado: boolean;
    situacao(): string; // situacao é uma função
}

let zeca: Aluno = { // zeca = obj
    nome: "Bruno Lima",
    nota: 10,
    aprovado: true,
    situacao: function () {
        if (this.aprovado){
            return (`APROVADO`)
        }
        else {
            return (`REPROVADO`)
        }
    }
}
console.log(`${zeca.nome} ${zeca.nota} ${zeca.situacao()}`)


// interface com classe
interface Saudacao { // essa interface tem apenas função
    bomDia(): string,
    boaTarde(): string
}

// implementa herança
//criando uma classe
class Funcionario {
    //variável protegida que pode ser herdadas
    protected atividade: string
    constructor(atividade:string){ // método construtor
        this.atividade = atividade
    }
    public exercerCargo(): void {
        console.log(`A atividade é ${this.atividade}`)
    }
}

// extends: herda uma classe  
// implements: implementa uma classe
class Docente extends Funcionario implements Saudacao { // classe docente precisa ter as duas funções, bom dia e boa tarde

    private name: string;

    constructor(name: string, atividade: string){ // recebe o nome do docente
        super(atividade); //chama o construtor da Docente
        this.name = name;
    }

    bomDia(): string {
        this.exercerCargo()
        return `Bom dia com muita alegria, ${this.name}`
    }
    boaTarde(): string {
        this.exercerCargo()
        return `Boa tarde a todos, ${this.name}`
    }
}
let obj = new Docente("Bruno", "coordenador")
console.log(obj.boaTarde());
console.log(obj.bomDia());