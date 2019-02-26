
const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(){


};

ResultView.prototype.bindEvent = function(){


  PubSub.subscribe('InstrumentFamilies:Filtered-ready', (evt) => {
    const family_obj = evt.detail;
    this.render(family_obj);
  });

  ResultView.prototype.render = function (family_obj) {
    const instFamilyContainer = document.querySelector('div#family-info');
    const family_name = document.createElement('h3');
    family_name.textContent = family_obj.name;
    instFamilyContainer.appendChild(family_name);
    const family_desc = document.createElement('p');
    family_desc.textContent = family_obj.description;
    instFamilyContainer.appendChild(family_desc);
    const family_insts_header = document.createElement('h4');
    family_insts_header.textContent = 'Instruments of this family include';
    instFamilyContainer.appendChild(family_insts_header);
    const family_insts_list = document.createElement('ul');
    instFamilyContainer.appendChild(family_insts_list);
    const unorderedList = document.querySelector('ul');
    const inst_ary = family_obj.instruments;
    for (inst of inst_ary ){
      const inst_str = document.createElement('li');
      inst_str.textContent = inst;
      unorderedList.appendChild(inst_str);
    }
  };


};
module.exports = ResultView;
