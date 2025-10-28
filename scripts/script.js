
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});


const form = document.getElementById('formContato');
form.addEventListener('submit', e => {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if(!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos!');
  } else {
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
    form.reset();
  }
});


document.getElementById('anoAtual').textContent = new Date().getFullYear();