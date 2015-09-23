'use strict';

module.exports = {
  rules: {
    'angular/directive-name': [2, 'fc'],
    'angular/angularelement': 2,
    'angular/no-jquery-angularelement': 2,
    'angular/interval-service': 2,
    'angular/timeout-service': 2,
    'angular/module-getter': 2,
    'angular/module-setter': 2,
    'angular/no-http-callback': 2
    'angular/component-limit': [2, 1],
    'angular/controller-as': 1,
    'angular/controller-as-route': 1,
    'angular/window-service': 1,
    'angular/document-service': 1,
    'angular/deferred': 1,
    'angular/function-type': [1, 'named'],
    'angular/no-controller': 1,
    'angular/controller-as-vm': 0,
  },
  extends: ['thou-shalt-not', 'angular']
};