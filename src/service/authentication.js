/**
 * Authentication service
 */

class Authenticate {
  Axois;
  Routes;
  constructor(axios, routes) {
    this.Axois = axios;
    this.Routes = routes;
  }

  async login(user) {
    return await this.Axois.post(`${this.Routes.authenticate.login}`, user);
  }
}

export default Authenticate;
