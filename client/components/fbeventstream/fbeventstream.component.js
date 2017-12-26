'use strict';
const angular = require('angular');

export class fbeventstreamComponent {
  /*@ngInject*/
  constructor() {
    this.events = getRequest().then(res => { resolve(res)  });
    this.message = 'World';
  }

  function getRequest(){
    var page_id = 1776675752608125;
    var access_token = `EAACEdEose0cBABpMWugbY8DdEZBV8XHq6VSn5UVcxHokXLXzfLQRRoFDq0cPwO06pLMI4wYsZBUfpZCfzNK3MPDNo2ZA2CimKFHPJPyHVOG9p7L2jrG2WZAqJ80AAloFXnIRHbqlAZAWkYS6A6DITmc4yXNGSqPw2hjbBoCV9AMlvE8MbOgFZCgOT5DibVYRnyCI3osLl8S8QZDZD`;
    return fetch(`https://graph.facebook.com/v2.3/${page_id}?access_token=${access_token}&fields=events`)
    .then( res => res.json())
    .then( body =>{ return body;
    })
  }
}

export default angular.module('directives.fbeventstream', [])
  .component('fbeventstream', {
    template: '<h1>Hello {{ $ctrl.message }}</h1>',
    bindings: { message: '<' },
    controller: fbeventstreamComponent
  })
  .name;
