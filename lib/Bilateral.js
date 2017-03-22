'use strict';
import Animal from './Animal';

class Cnidarian extends Animal {

  constructor (name, body) {
    super(name, "bilateral");
    this._body = body;
  }

  get body(){
    return this._body;
  }

  set body(){
    this._body = body;
  }
}