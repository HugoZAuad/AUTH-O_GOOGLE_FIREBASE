# Autenticação Google com Firebase

Este projeto demonstra como implementar a autenticação usando a conta Google em uma aplicação web, utilizando o Firebase como backend. O projeto inclui as seguintes funcionalidades principais:

## Tecnologias Utilizadas

- **Firebase**: Plataforma de desenvolvimento de aplicativos que fornece uma variedade de serviços, incluindo autenticação, banco de dados em tempo real, e hospedagem.
- **JavaScript**: Linguagem de programação utilizada para implementar a lógica do cliente.
- **HTML/CSS**: Tecnologias utilizadas para estruturar e estilizar a interface do usuário.

## Principais Funcionalidades

### 1. Configuração do Firebase

O projeto começa com a configuração do Firebase. É necessário criar um projeto no [Firebase Console](https://console.firebase.google.com/) e habilitar o método de autenticação do Google. As credenciais do projeto são então integradas ao código.

### 2. Autenticação com Google

A principal funcionalidade do projeto é permitir que os usuários se autentiquem usando suas contas do Google. O fluxo de autenticação é gerenciado pelo Firebase, que simplifica o processo de login e registro.

### 3. Interface do Usuário

A interface do usuário é construída com HTML e CSS, proporcionando uma experiência simples e intuitiva. Os usuários podem clicar em um botão para iniciar o processo de login com o Google.

### 4. Gerenciamento de Sessão

Após a autenticação, o Firebase gerencia a sessão do usuário. O estado de autenticação é monitorado, permitindo que a aplicação reaja a mudanças no estado do usuário (por exemplo, se o usuário fizer logout).

### 5. Logout

Os usuários podem sair da aplicação a qualquer momento. O projeto implementa uma funcionalidade de logout que limpa a sessão do usuário e redireciona para a página inicial.

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
  git clone https://github.com/HugoZAuad/Autentica-o_google-firebase.git

2. Navegue até o diretório do projeto:
  cd Autentica-o_google-firebase

3. Abra o arquivo index.html em um navegador web.

4. Certifique-se de que as credenciais do Firebase estão corretamente configuradas no código.

5. Acessar a Aplicação:

  Abra o navegador em http://localhost:3000.

## Estrutura de pastas
```
google-auth-firebase/
├── public/
│   ├── index.html
│   └── styles.css
├── src/
│   ├── firebase.js
│   ├── app.js
│   └── components/
│       └── LoginButton.js
├── firebaseConfig.js
├── package.json
└── README.md
```
## Contribuições
  Abrir issues para reportar problemas ou sugerir melhorias.
  
  Fazer um fork do repositório, criar uma nova branch para sua feature ou bug fix, e enviar um pull request.

## Contato
Sinta-se à vontade para ajustar qualquer parte do texto conforme necessário!

## Deploy
- https://autentica-o-google-firebase.vercel.app
