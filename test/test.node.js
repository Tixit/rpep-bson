"use strict";

var Unit = require('deadunit')

var testTransportModule = require('rpep/test/node_modules/testTransport')
var testUtils = require("rpep/test/node_modules/testUtils")

var bson = require('../rpep-bson')

Unit.test('All node tests', function(t) {
    this.timeout(5000)

    // this is here so that we actually get stack traces for unhandled promise rejections
    process.on('unhandledRejection', (reason, p) => {
      t.ok(false, 'Unhandled Rejection reason: '+reason)
      t.log(p)
    })
    process.on('uncaughtException', (reason) => {
        t.ok(false)
        t.log(reason)
    })


    //*
    
    var createTestTransportGetter = function() {
        var testTransport = testTransportModule({listeners:{}})
        return function() {
            return testTransport
        }
    }

    testUtils.runTest(this, 'rpep with bson', bson, createTestTransportGetter(), testUtils.createSerializationTestOptions(bson))


    //*/

}).writeConsole(1000)