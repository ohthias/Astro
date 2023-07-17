// Função para fazer login
function fazerLogin(nome, senha) {
    // Obtém os dados do usuário com base no nome de usuário
    const usuario = localStorage.getItem(nome);
  
    // Verifica se o usuário existe e se a senha está correta
    if (usuario) {
      const usuarioObj = JSON.parse(usuario);
  
      if (usuarioObj.senha === senha) {
        console.log('Login bem-sucedido!');
        window.location.href = '../../Html/Base/home.html';
        return;
      }
    }
  
    console.log('Nome de usuário ou senha incorretos!');
    window.alert('Nome de usuário ou senha incorretos!')
  }
  
  // Captura o formulário de login
  const loginForm = document.getElementById('loginForm');
  
  // Adiciona um evento de submit ao formulário de login
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtém os valores dos campos do formulário
    const loginNome = document.getElementById('loginNome').value;
    const loginSenha = document.getElementById('loginSenha').value;
  
    // Chama a função fazerLogin com os valores coletados
    fazerLogin(loginNome, loginSenha);
  });
  