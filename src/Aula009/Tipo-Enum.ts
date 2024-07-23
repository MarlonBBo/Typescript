
enum Cores {
  vermelho = 1,
  azul,
  amarelo = 200,
  roxo = 'ROXO',
  laranja = 'LARANJA',
  verde = 'VERDE'
}

function CorA(cor: Cores): void {
  console.log(cor);
}

CorA(Cores.vermelho); // Saída: ROXO

console.log(Cores)
