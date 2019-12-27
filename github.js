class Github {
  constructor() {
    this.client_id = "1890fe19484022ac76a9";
    this.client_secret = "d5fc1e6dcad237be4ea42becdeba79acb86a3b32";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    const repos = await reposResponse.json();

    return {
      profile,
      repos
    };
  }
}
