const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data_ary) {
  this.data = data_ary;
};


InstrumentFamilies.prototype.bindEvent = function () {

  PubSub.publish('InstrumentFamilies:Ready', this.data);
  PubSub.subscribe('FormView:change',(event)=>{
    const selection_int = event.detail;
    this.get_family(selection_int);
  })

  InstrumentFamilies.prototype.get_family = function (selection_int) {
    const family_obj = this.data[selection_int];
    PubSub.publish('InstrumentFamilies:Filtered-ready', family_obj)
  };
};
module.exports = InstrumentFamilies;
