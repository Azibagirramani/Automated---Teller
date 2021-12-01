/**
 * Customers service
 */

class Customers {
  Axois;
  Routes;
  constructor(axios, routes) {
    this.Axois = axios;
    this.Routes = routes;
  }

  async getOverview() {
    return await this.Axois.get(`${this.Routes.dashboard.overview}`);
  }

  async customers(){
    return await this.Axois.get(`${this.Routes.customers.fetchAll}`);
  }
}

export default Customers;
