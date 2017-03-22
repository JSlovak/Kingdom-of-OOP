'use strict';

import LivingThing from './LivingThing';

class Archaea extends LivingThing {

  constructor (name) {
    super(name, true, false, true, true, false);
  }
}