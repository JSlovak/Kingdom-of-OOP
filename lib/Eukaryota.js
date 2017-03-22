'use strict';
import LivingThing from "./LivingThing";

export default class Eukaryota extends LivingThing {
  constructor (name, uniCellular, asexual, mobile, heterotroph) {
     super(name, uniCellular, true, false, asexual, mobile);
     this._heterotroph = heterotroph;
  }

  get heterotroph(){
    return this._heterotroph;

  }

  set heterotroph(value){
     if (typeof newName !== "boolean"){
      throw new Error ( "Please use 'true' or 'false' as a value" );
    }
    this._heterotroph = value;

  }

  get autotroph(){
    return !this._heterotroph;

  }

  set autotroph(value){
     if (typeof newName !== "boolean"){
      throw new Error ( "Please use 'true' or 'false' as a value" );
    }
    this._heterotroph = !value;


  }
}