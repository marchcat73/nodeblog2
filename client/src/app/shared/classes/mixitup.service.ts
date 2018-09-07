import { ElementRef } from '@angular/core';

// import { mixitup } from 'mixitup/dist/mixitup.js';
import * as $ from 'jquery';
declare let $: any;
declare let require: any;
const mixitup = require('mixitup');

// declare var mixitup;

/*export class MixitupService {
  static initMixitup(ref: ElementRef) {
    const mixer = mixitup(ref.nativeElement, {
        animation: {
            enable: true,
            effectsIn: 'fade translateY(-100%)',
            effectsOut: 'fade translateY(-100%)',
            duration: 200,
            easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
        }
    });
    mixer.filter('.mix');
  }
}*/

export class MixitupService {
  static initMixitup(ref: ElementRef) {
    $(function () {
      const mixer = mixitup(ref.nativeElement, {
          animation: {
            enable: true,
            effectsIn: 'fade translateY(200%)',
            effectsOut: 'fade translateY(200%)',
            duration: 300,
            easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
        }
      });
    });
  }
}
