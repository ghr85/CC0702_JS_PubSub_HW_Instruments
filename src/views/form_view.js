
const PubSub = require('../helpers/pub_sub.js');

const FormView = function(){


};

FormView.prototype.bindEvent = function(){

  const instFamilySelect = document.querySelector('#instrument-families');

  PubSub.subscribe('InstrumentFamilies:Ready', (evt) => {
    const allInstFamilies = evt.detail;
    this.populate(allInstFamilies);
  });

  instFamilySelect.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('FormView:change', selectedIndex);
  });
};

FormView.prototype.populate = function(familyData){
  const instFamilySelect = document.querySelector('#instrument-families');
  familyData.forEach((family, index) => {
    const option = document.createElement('option');
    option.textContent = family.name;
    option.value = index;
    instFamilySelect.appendChild(option);
  })
}



module.exports = FormView;
