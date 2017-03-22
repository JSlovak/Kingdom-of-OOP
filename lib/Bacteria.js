'use strict';

import LivingThing from './LivingThing';

class Bacteria extends LivingThing {
  constructor (name) {
    super(name, true, false, false, true, false);

  }
}