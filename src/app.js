const PubSub = require('./helpers/pub_sub.js')
const instrumentFamilyData = require('./data/instrument_family_data.js')
const InstrumentFamilies = require('./models/instrument_families.js')
const FormView = require('./views/form_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');


  const formView = new FormView()
  formView.bindEvent();


  const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamilies.bindEvent();



});
