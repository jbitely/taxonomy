var RetiredForagerBee = function() {
  ForagerBee.call();
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype = new ForagerBee();
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
