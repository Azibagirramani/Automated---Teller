class Stats {
  Axois;
  Routes;
  constructor(axios, routes) {
    this.Axois = axios;
    this.Routes = routes;
  }

  async process_stats() {
    return await this.Axois.get(`${this.Routes.process.stats}`);
  }

  async transactions() {
    return await this.Axois.get(`${this.Routes.splynx.splynx_transactions}`);
  }
}

export default Stats;
