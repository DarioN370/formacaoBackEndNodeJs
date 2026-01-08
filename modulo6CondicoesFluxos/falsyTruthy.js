// Falsy: false, 0, "", null, undefined, NaN

// Truthy: Todos os outros valores

const nome = "";
if (nome) {
  console.log("Olá", nome);
} else {
  console.log("Ainda não sei o seu nome");
}

const idade = null
if (idade != null) {
  if (idade >= 18) {
    console.log("Maior de idade");
  } else {
    console.log("Menor de idade");
  }
} else {
    console.log("Digite um numero valido");
}
