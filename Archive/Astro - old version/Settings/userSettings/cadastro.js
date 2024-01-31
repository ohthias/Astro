// Função para cadastrar um novo usuário
function cadastrarUsuario(nome, email, senha) {
  // Verifica se o usuário já está cadastrado
  if (localStorage.getItem(nome)) {
    console.log('O usuário já está cadastrado!');
    return;
  }

  // Cria um objeto com os dados do usuário
  const usuario = {
    nome: nome,
    senha: senha
  };

  // Armazena os dados do usuário no localStorage
  localStorage.setItem(nome, JSON.stringify(usuario));

  console.log('Usuário cadastrado com sucesso!');
  window.location.href = "/Astro/src/login/sign_up.html";
}

// Captura o formulário de cadastro
const cadastroForm = document.getElementById('cadastroForm');

// Adiciona um evento de submit ao formulário de cadastro
cadastroForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtém os valores dos campos do formulário
  const nome = document.getElementById('user').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('loginSenha').value;

  // Chama a função cadastrarUsuario com os valores coletados
  cadastrarUsuario(nome, email, senha);
});
