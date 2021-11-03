/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance <= 0 || !Number.isInteger(balance)) {
    return null;
  }
  let acc = new Account(this.nextAccountNumber++, holder);
  acc.deposit(balance);
  this.accounts.push(acc);
  return acc.number;
};

Bank.prototype.getAccount = function (number) {
  for (let acc of this.accounts) {
    if (acc.number === number) {
      return acc;
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  let total = 0;
  for (let acc of this.accounts) {
    total += acc.getBalance();
  }
  return total;
};
