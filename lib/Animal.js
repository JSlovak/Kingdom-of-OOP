'use strict';
import Eukaryota from './Eukaryota';

export default class Animal extends Eukaryota {

  constructor (name, symmetry) {
    super(name, false, false, true, true);
    this._symmetry = symmetry;
  }

  get symmetry(){
    return this._symmetry;
  }

  set symmetry(value){
    if (typeof value !== "string" ){
    throw new Error ( "Please enter the type of symmetry");
    }

    if (value === " "){
      throw new Error ( "Please enter the type of symmetry");
    }
    this._symmetry = value;
  }
}

