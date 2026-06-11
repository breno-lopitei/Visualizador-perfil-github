import { fetchGitHubProfile, fetchGitHubRepos } from './api.js';
import { elements, getSearchValue, renderProfile, setSearchState, showAlert } from './ui.js';

elements.btnSearch.addEventListener('click', async () => {
    const userName = getSearchValue();

    if (!userName) {
        showAlert('Por favor, digite um nome de usuário do GitHub');
        return;
    }

    try {
        setSearchState(true);
        const userData = await fetchGitHubProfile(userName);
        const userRepos = await fetchGitHubRepos(userName);
        renderProfile(userData, userRepos);
    } catch (error) {
        console.error('Erro ao buscar o usuário:', error);
        showAlert(error.message || 'Ocorreu um erro ao buscar o usuário. Por favor, tente novamente mais tarde.');
    } finally {
        setSearchState(false);
    }
});