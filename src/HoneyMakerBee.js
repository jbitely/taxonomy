var HoneyMakerBee = function() {
  Bee.call();
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = new Bee();
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

