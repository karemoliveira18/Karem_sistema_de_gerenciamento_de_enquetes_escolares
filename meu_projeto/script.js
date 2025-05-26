const enquetes = [
    {
      titulo: "Qual o próximo destino do passeio escolar?",
      descricao: "Escolha entre parque, museu ou cinema.",
      opcoes: ["Parque", "Museu", "Cinema"],
    },
    {
      titulo: "Qual tema você prefere para a próxima festa?",
      descricao: "Fantasia, Anos 80 ou Neon?",
      opcoes: ["Fantasia", "Anos 80", "Neon"],
    },
    {
      titulo: "Devemos ter um dia do pijama na escola?",
      descricao: "Responda sim ou não e ajude a criar um dia divertido!",
      opcoes: ["Sim", "Não"],
    },
  ];
  
  function renderizarEnquetes() {
    const container = document.getElementById("enquetes-container");
    container.innerHTML = "";
  
    enquetes.forEach((enquete, index) => {
      const votos = Array(enquete.opcoes.length).fill(0);
  
      const card = document.createElement("div");
      card.className = "card";
  
      const titulo = document.createElement("h3");
      titulo.innerText = enquete.titulo;
  
      const descricao = document.createElement("p");
      descricao.innerText = enquete.descricao;
  
      const opcoesContainer = document.createElement("div");
      enquete.opcoes.forEach((opcao, i) => {
        const btn = document.createElement("button");
        btn.innerText = opcao;
        btn.onclick = () => {
          votos[i]++;
          resultado.innerText = `Votos: ${enquete.opcoes.map(
            (o, idx) => `${o}: ${votos[idx]}`
          ).join(" | ")}`;
        };
        opcoesContainer.appendChild(btn);
      });
  
      const resultado = document.createElement("p");
      resultado.className = "voto";
      resultado.innerText = "Votos: ainda não registrados.";
  
      card.appendChild(titulo);
      card.appendChild(descricao);
      card.appendChild(opcoesContainer);
      card.appendChild(resultado);
      container.appendChild(card);
    });
  }
  
  function criarEnquete() {
    const titulo = document.getElementById("titulo").value.trim();
    const descricao = document.getElementById("descricao").value.trim();
  
    if (!titulo || !descricao) {
      alert("Preencha todos os campos.");
      return;
    }
  
    enquetes.push({
      titulo: titulo,
      descricao: descricao,
      opcoes: ["Sim", "Não"]
    });
  
    document.getElementById("titulo").value = "";
    document.getElementById("descricao").value = "";
  
    renderizarEnquetes();
    alert("Nova enquete criada!");
  }
  
  renderizarEnquetes();
  