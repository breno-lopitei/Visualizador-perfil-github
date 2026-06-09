export const elements = {
    btnSearch: document.getElementById('btn-search'),
    inputSearch: document.getElementById('input-search'),
    profileResults: document.querySelector('.profile-results'),
};

export function getSearchValue() {
    return elements.inputSearch.value.trim();
}

export function setSearchState(isLoading) {
    elements.btnSearch.disabled = isLoading;

    if (isLoading) {
        elements.profileResults.innerHTML = '<p class="loading">Carregando...</p>';
    }
}

export function renderProfile(userData) {
    elements.profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name || userData.login}" class="profile-avatar">

            <div class="profile-info">
                <h2>${userData.name || userData.login}</h2>
                <p>${userData.bio || 'Não possui bio cadastrada 😥.'}</p>
            </div>
        </div>

        <div class="profile-counters">
            <div class="followers">
                <h4>🚶‍♂️ Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>👥 Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>
    `;
}

export function showAlert(message) {
    alert(message);
}