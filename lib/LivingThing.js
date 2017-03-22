'use strict';

export default class LivingThing {
  constructor (name, uniCellular, trueNucleus, anaerobic, asexual, mobile){
    this._name = name;
    this._uniCellular = uniCellular;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }
}