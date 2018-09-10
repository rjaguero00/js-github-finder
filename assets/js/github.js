class Github {
    constructor() {
        this.client_id = '2ea79e78adbec6904a24';
        this.client_secret = 'd9a1bdad91df8f88589eb42dd22c5785f844b26b';
    }

    //Get user method
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}& client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}