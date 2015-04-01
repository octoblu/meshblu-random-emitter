'use strict';
var util = require('util');
var EventEmitter = require('events').EventEmitter;

var MESSAGE_SCHEMA = {};

var OPTIONS_SCHEMA = {};

function Plugin(){
  var self = this;
  this.options = {};
  this.messageSchema = MESSAGE_SCHEMA;
  this.optionsSchema = OPTIONS_SCHEMA;
  setInterval(function(){
    self.sendRandom();
  }, 1000);
}

util.inherits(Plugin, EventEmitter);

Plugin.prototype.onMessage = function(message){
};

Plugin.prototype.setOptions = function(options){
  this.options = options;
};

Plugin.prototype.sendRandom = function() {
  this.emit('message', {
    devices: '*',
    payload: {
      random: Math.random()
    }
  });
}

module.exports = {
  messageSchema: MESSAGE_SCHEMA,
  optionsSchema: OPTIONS_SCHEMA,
  Plugin: Plugin
};
