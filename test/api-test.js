var vows = require('vows'),
    assert = require('assert'),
    Plates = require('../lib/plates');
    common = require('./fixtures/common');

vows.describe('merge data into markup').addBatch({
  'when providing both data and markup': {
    
    '(1) a single tag with an `id` that corresponds to a `data-key`.': (

      function() {
        return common.createTest('test-1');
      }()

    ),
    '(2) a deeply nested tag with an `id` that corresponds to a `data-key`.': (

      function() {
        return common.createTest('test-2');
      }()

    ),
    '(3) a tag with an `id` that corresponds to a `data-key`, having a body of nested tags.': (

      function() {
        return common.createTest('test-3');
      }()

    ),
    '(4) a tag with an arbitrary attribute that corresponds to a `data-key`.': (

      function() {
      
        var map = new Plates.Map();
        map.where('src').is('google.com').use('key1');
        map.where('src').is('yahoo.com').use('key2');

        return common.createTest('test-4', map);

      }()

    ),  
    '(5) a tag that matches a specified attribute in the map': {

    }
  }
}).export(module);
