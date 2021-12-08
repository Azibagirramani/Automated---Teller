class Transaction {
  Axois;
  Routes;
  constructor(axios, routes) {
    this.Axois = axios;
    this.Routes = routes;
  }

  async paystackTransactions() {
    return await this.Axois.get(`${this.Routes.paystack.fetchAll}`);
  }

  async paystackSettlements() {
    return await this.Axois.get(`${this.Routes.paystack.settlements}`);
  }
}

export default Transaction;
