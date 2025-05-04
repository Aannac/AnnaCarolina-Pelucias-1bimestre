function revelarCupom() {
  const camada = document.getElementById('camada-cinza');
  const cupom = document.getElementById('cupom');

  camada.style.opacity = 0;
  setTimeout(() => {
    camada.style.display = 'none';
    cupom.style.display = 'block';

    // Armazena o cupom apenas quando for raspado
    localStorage.setItem('cupomDesconto', 'DESCONTO10');
    alert('Cupom revelado: DESCONTO10');
  }, 500);
}

function voltarParaLoja() {
  window.location.href = '../index.html'; // Voltar à página principal após revelar o cupom
}