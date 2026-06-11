# 🔍 Visualizador de Perfil do GitHub

Uma aplicação web simples e elegante que utiliza a API oficial do GitHub para buscar e exibir informações detalhadas de perfis de usuários, incluindo seus repositórios mais recentes.

## 🚀 Funcionalidades

- **Busca de Usuários:** Pesquise por qualquer usuário do GitHub.
- **Perfil Detalhado:** Exibe avatar, nome, biografia e contadores de seguidores/seguindo.
- **Repositórios Recentes:** Lista os 10 repositórios mais recentes com informações de:
  - ⭐ Estrelas (Stars)
  - 🍴 Forks
  - 👀 Visualizações (Watchers)
  - 💻 Linguagem principal
- **UX Aprimorada:** 
  - Suporte para busca ao pressionar a tecla **Enter**.
  - Estados de carregamento (Loading).
  - Tratamento de erros (usuário não encontrado).

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES6+)**: Organizado em módulos para melhor manutenção.
- **Fetch API**: Para consumo de dados da API do GitHub.
- **HTML5 & CSS3**: Estrutura e estilização da interface.

## 📂 Estrutura do Projeto

- `js/api.js`: Gerencia as requisições assíncronas à API.
- `js/ui.js`: Responsável por manipular o DOM e renderizar os dados na tela.
- `js/index.js`: Arquivo principal que coordena os eventos de clique e teclado.

## ⚙️ Como executar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/visualizador-perfil-github.git
   ```
2. Como o projeto utiliza **Módulos JavaScript**, é necessário rodar através de um servidor local para evitar erros de CORS ou segurança do navegador.
   - Se usar o VS Code, recomendo a extensão **Live Server**.
3. Abra o arquivo `index.html` e comece a pesquisar!

---
Desenvolvido por Breno Lopes em Dev em Dobro Fullstack