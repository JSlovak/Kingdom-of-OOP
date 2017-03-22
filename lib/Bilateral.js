'use strict';
import Animal from './Animal';

export default class Cnidarian extends Animal {

  constructor (name, body) {
    super(name, "bilateral");
    this._body = body;
  }

  get body(){
    return this._body;
  }

  set body(value){
    if (typeof value !== "string" ){
      throw new Error ( "Please enter the type of symmetry");
    }

    if (value === " "){
      throw new Error ( "Please enter the type of symmetry");
    }
    this._body = value;
  }
}