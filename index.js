import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

const cliente1 = new Cliente('Ricardo', 11122233309)

const cliente2 = new Cliente('Alice', 44488833309)

const contaRicardo = new ContaCorrente(1001, cliente1)

const conta2 = new ContaCorrente(102, cliente2)

contaRicardo.depositar(500)
contaRicardo.tranferir(150, conta2)

console.log(contaRicardo)
console.log(conta2)
