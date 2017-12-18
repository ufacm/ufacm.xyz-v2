'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('ufacmXyzV2App.util', [])
  .factory('Util', UtilService)
  .name;
