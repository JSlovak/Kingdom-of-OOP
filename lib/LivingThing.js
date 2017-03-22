'use strict';

export default class LivingThing {
  constructor (name, uniCellular, trueNucleus, anaerobic, asexual, mobile){
    this._name = name;
    this._uniCellular = uniCellular;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name(){
    return this._name;

  }

  set name(newName){
    if (typeof newName !== "boolean"){
      throw new Error ( "Please use 'true' or 'false' as a value" );
    }
    this._name = newName;
  }

  get uniCellular(){
    return this.uniCellular;

  }

  set uniCellular(value){
     if (typeof newName !== "boolean"){
      throw new Error ( "Please use 'true' or 'false' as a value" );
    }
      this._uniCellular = value;
  }

  get multiCellular() {
    return !this._uniCellular;

  }

  set multiCellular(value) {
    if (typeof newName !== "boolean"){
      throw new Error ( "Please use 'true' or 'false' as a value" );
    }
    this._uniCellular = !value;

  }

  get eukaryote() {
    return this._trueNucleus;

  }

  set eukaryote(value) {
    if (typeof newName !== "boolean"){
      throw new Error ( "Please use 'true' or 'false' as a value" );
    }
    this._truNucleus = value;
  }

  get anaerobic() {
    return this._anaerobic;

  }

  set anaerobic(value){
    if (typeof newName !== "boolean"){
      throw new Error ( "Please use 'true' or 'false' as a value" );
    }
    this._anaerobic = value;

  }

  get asexual(){
    return this._asexual;

  }

  set asexual(value){
    if (typeof newName !== "boolean"){
      throw new Error ( "Please use 'true' or 'false' as a value" );
    }
    this._asexual = value;

  }

  get mobile(){
    return this._mobile;

  }

  set mobile(value){
    if (typeof newName !== "boolean"){
      throw new Error ( "Please use 'true' or 'false' as a value" );
    }
    this._mobile = value;

  }

  get immobile(){
    return this._mobile;

  }

  set immobile(value){
    if (typeof newName !== "boolean"){
      throw new Error ( "Please use 'true' or 'false' as a value" );
    }
    this._mobile = !value;

  }

}