class Engineer {
    constructor(name, id, email, role, gitHub) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.gitHub = gitHub;

      }
      getName() {
        return this.name;
      }    
      getId() {
        return this.id;
      }  
      getEmail() {
        return this.email;
      }
      getRole() {
        return 'Engineer';
      }
      getGitHub() {
          return this.gitHub;
      }
};

module.exports = Engineer;