const enquetesContainer = document.getElementById("enquetes-container");
const form = document.getElementById("form-enquete");

const enquetes = [];

const iniciais = [
  { titulo: "Qual horário você acha melhor para as aulas começarem?", opcoes: ["7h", "7:30", "8h", "8:30"] },
  { titulo: "Qual seu estilo musical favorito?", opcoes: ["Rock", "Pop", "Funk", "Sertanejo"] },
  { titulo: "Qual seu app favorito?", opcoes: ["Instagram", "TikTok", "WhatsApp", "X"] },
  { titulo: "Qual seu animal favorito?", opcoes: ["Gato", "Cachorro", "Pássaro", "Peixe"] }
];

function criarEnquete(titulo, opcoes) {
  const votos = {};
  opcoes.forEach(op => votos[op] = 0);

  const enquete = { titulo, opcoes, votos };
  enquetes.push(enquete);

  const div = document.createElement("div");
  div.className = "enquete";

  const h3 = document.createElement("h3");
  h3.textContent = titulo;
  div.appendChild(h3);

  opcoes.forEach(opcao => {
    const botao = document.createElement("button");
    botao.textContent = opcao;
    botao.addEventListener("click", () => {
      enquete.votos[opcao]++;
      atualizarResultado(div, enquete);
    });
    div.appendChild(botao);
  });

  const resultado = document.createElement("div");
  resultado.className = "resultado";
  div.appendChild(resultado);

  atualizarResultado(div, enquete);
  enquetesContainer.appendChild(div);
}

function atualizarResultado(div, enquete) {
  const resultado = div.querySelector(".resultado");
  resultado.textContent = enquete.opcoes
    .map(op => `${op}: ${enquete.votos[op]} voto${enquete.votos[op] !== 1 ? 's' : ''}`)
    .join(" | ");
}

// Cria as enquetes iniciais
iniciais.forEach(enq => criarEnquete(enq.titulo, enq.opcoes));

// Formulário para criar novas enquetes
form.addEventListener("submit", e => {
  e.preventDefault();
  const titulo = document.getElementById("titulo").value.trim();
  const opcoesTexto = document.getElementById("opcoes").value.trim();

  if (titulo && opcoesTexto) {
    const opcoes = opcoesTexto.split(",").map(op => op.trim()).filter(op => op);
    if (opcoes.length >= 2) {
      criarEnquete(titulo, opcoes);
      form.reset();
    } else {
      alert("Insira pelo menos duas opções.");
    }
  }
});

