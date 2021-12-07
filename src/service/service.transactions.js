class Transaction {
  Axois;
  Routes;
  constructor(axios, routes) {
    this.Axois = axios;
    this.Routes = routes;
  }

  async flutterwave() {
    return await this.Axois.get(`${this.Routes.transaction.fetchAll}`);
  }
}

export default Transaction;
