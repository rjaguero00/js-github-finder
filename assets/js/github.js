class Github {
    constructor() {
        this.client_id = '2ea79e78adbec6904a24';
        this.client_secret = 'd9a1bdad91df8f88589eb42dd22c5785f844b26b';
        this.repos_count = 5;
        this.repos_sort = 'create: asc';
    }

    //Get user method
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}