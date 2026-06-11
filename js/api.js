const BASE_URL = 'https://api.github.com';

// A função fetchGitHubProfile busca os dados do perfil do usuário no GitHub usando a API pública. Ela recebe o nome de usuário como parâmetro, faz uma requisição GET para o endpoint correspondente e retorna os dados do perfil em formato JSON. Se o usuário não for encontrado, a função lança um erro.
export async function fetchGitHubProfile(userName) {
    const response = await fetch(`${BASE_URL}/users/${encodeURIComponent(userName)}`);

    if (!response.ok) {
        throw new Error('Usuário não encontrado');
    }

    return response.json();
}

export async function fetchGitHubRepos(userName) {

    // o link abaixo é para pegar os repositórios mais recentes do usuário, limitando a 10 resultados por página e ordenando por data de criação
    const response = await fetch(`${BASE_URL}/users/${userName}/repos?per_page=10&sort=created`);
   
    if (!response.ok) {
        throw new Error('Usuário não encontrado');
    }

    return await response.json();
}