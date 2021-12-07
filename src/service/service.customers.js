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

  async customers() {
    return await this.Axois.get(`${this.Routes.customers.fetchAll}`);
  }

  async customerFilter(data) {
    return await this.Axois.get(
      `${this.Routes.customers.filter}?add_date=${data.add_date || ""}&status=${
        data.status || ""
      }&last_update=${data.last_update || ""}&billing_type=${
        data.billing_type || ""
      }&search=${data.search || ""}`
    );
  }

  async customerSummary() {
    return await this.Axois.get(`${this.Routes.customers.summary}`);
  }
}

export default Customers;
