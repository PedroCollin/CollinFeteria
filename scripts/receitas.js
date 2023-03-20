// Função para adicionar classe 'hover' nas receitas quando o mouse estiver sobre elas
function addHoverClass() {
    const receitas = document.querySelectorAll('.receita');
    receitas.forEach(receita => {
      receita.addEventListener('mouseover', () => {
        receita.classList.add('hover');
      });
      receita.addEventListener('mouseout', () => {
        receita.classList.remove('hover');
      });
    });
  }
  
  // Função para carregar dinamicamente os dados das receitas a partir de um JSON
  function loadReceitas() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const receitas = JSON.parse(this.responseText);
        const container = document.querySelector('.receitas');
        container.innerHTML = '';
        receitas.forEach(receita => {
          const div = document.createElement('div');
          div.classList.add('receita');
          const img = document.createElement('img');
          img.src = receita.imagem;
          img.alt = receita.nome;
          const h2 = document.createElement('h2');
          h2.textContent = receita.nome;
          const p1 = document.createElement('p');
          p1.classList.add('ingredientes');
          p1.textContent = receita.ingredientes;
          const p2 = document.createElement('p');
          p2.classList.add('preparo');
          p2.textContent = receita.preparo;
          div.appendChild(img);
          div.appendChild(h2);
          div.appendChild(p2);
  div.appendChild(p1);
  div.appendChild(p2);
  container.appendChild(div);
  });
  addHoverClass();
  }
  };
  xhr.open('GET', 'data/receitas.json', true);
  xhr.send();
  }
  
  // Chama a função para carregar as receitas ao carregar a página
  window.addEventListener('load', loadReceitas);